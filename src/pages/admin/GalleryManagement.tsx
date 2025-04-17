
import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchGalleryItems,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  GalleryItem,
} from "@/services/galleryService";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";
import {
  Image,
  Plus,
  Pencil,
  Trash2,
  Calendar,
  MapPin,
  X,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GalleryManagement = () => {
  const queryClient = useQueryClient();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<GalleryItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { data: galleryItems = [], isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGalleryItems,
  });

  const createMutation = useMutation({
    mutationFn: createGalleryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast({
        title: "Success",
        description: "Gallery item added successfully",
      });
      closeForm();
    },
    onError: (error) => {
      console.error("Error creating gallery item:", error);
      toast({
        title: "Error",
        description: "Failed to add gallery item",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<GalleryItem> }) =>
      updateGalleryItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast({
        title: "Success",
        description: "Gallery item updated successfully",
      });
      closeForm();
    },
    onError: (error) => {
      console.error("Error updating gallery item:", error);
      toast({
        title: "Error",
        description: "Failed to update gallery item",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteGalleryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast({
        title: "Success",
        description: "Gallery item deleted successfully",
      });
      setIsDeleteDialogOpen(false);
    },
    onError: (error) => {
      console.error("Error deleting gallery item:", error);
      toast({
        title: "Error",
        description: "Failed to delete gallery item",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (currentItem) {
      setFormData({
        title: currentItem.title,
        date: currentItem.date,
        location: currentItem.location,
        description: currentItem.description,
      });
      setPreviewUrl(currentItem.imageUrl);
    } else {
      resetForm();
    }
  }, [currentItem]);

  const resetForm = () => {
    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
    });
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setCurrentItem(null);
    resetForm();
  };

  const openNewForm = () => {
    setCurrentItem(null);
    setIsFormOpen(true);
  };

  const openEditForm = (item: GalleryItem) => {
    setCurrentItem(item);
    setIsFormOpen(true);
  };

  const confirmDelete = (item: GalleryItem) => {
    setCurrentItem(item);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = () => {
    if (currentItem?.id) {
      deleteMutation.mutate(currentItem.id);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.date || !formData.location) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!currentItem && !selectedFile) {
      toast({
        title: "Validation Error",
        description: "Please select an image",
        variant: "destructive",
      });
      return;
    }

    if (currentItem?.id) {
      // Update existing item
      updateMutation.mutate({
        id: currentItem.id,
        data: formData,
      });
    } else {
      // Create new item
      const formDataObj = new FormData();
      formDataObj.append("title", formData.title);
      formDataObj.append("date", formData.date);
      formDataObj.append("location", formData.location);
      formDataObj.append("description", formData.description);
      
      if (selectedFile) {
        formDataObj.append("image", selectedFile);
      }
      
      createMutation.mutate(formDataObj);
    }
  };

  const isSubmitting = createMutation.isPending || updateMutation.isPending;
  const isDeleting = deleteMutation.isPending;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <Button onClick={openNewForm} className="flex items-center gap-2">
          <Plus size={16} />
          Add New Photo
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin h-8 w-8 text-primary" />
        </div>
      ) : galleryItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No gallery items</h3>
          <p className="mt-2 text-gray-500">Get started by adding a new photo.</p>
          <Button onClick={openNewForm} className="mt-4">
            Add Photo
          </Button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {galleryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="h-16 w-16 overflow-hidden rounded-md">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>
                    {format(new Date(item.date), "MMMM d, yyyy")}
                  </TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditForm(item)}
                      >
                        <Pencil size={16} />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => confirmDelete(item)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {currentItem ? "Edit Gallery Item" : "Add New Gallery Item"}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title*</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="date">Date*</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="location">Location*</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="image">
                    {currentItem ? "Change Image" : "Image*"}
                  </Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="mt-1"
                    required={!currentItem}
                  />
                </div>
                
                {previewUrl && (
                  <div className="relative mt-4 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-h-[200px] w-full object-contain"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setPreviewUrl(null);
                        setSelectedFile(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={closeForm}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {currentItem ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to delete "{currentItem?.title}"? This action cannot be undone.
          </p>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryManagement;
