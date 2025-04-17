
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { Calendar as CalendarIcon, Pencil, Trash2, LogOut, Plus } from "lucide-react";
import { fetchEvents, createEvent, updateEvent, deleteEvent, Event } from "@/services/eventService";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const EventManagement = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openEventDialog, setOpenEventDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [eventForm, setEventForm] = useState<Event>({
    title: "",
    date: "",
    location: "",
    description: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const loadEvents = async () => {
    setIsLoading(true);
    const data = await fetchEvents();
    setEvents(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/admin/secret/login");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  const handleAddEvent = () => {
    setSelectedEvent(null);
    setEventForm({
      title: "",
      date: "",
      location: "",
      description: "",
    });
    setSelectedDate(undefined);
    setOpenEventDialog(true);
  };

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setEventForm({
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description,
    });
    if (event.date) {
      setSelectedDate(parseISO(event.date));
    }
    setOpenEventDialog(true);
  };

  const handleDeleteClick = (event: Event) => {
    setSelectedEvent(event);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedEvent?.id) {
      setIsLoading(true);
      const success = await deleteEvent(selectedEvent.id);
      if (success) {
        setEvents(events.filter(e => e.id !== selectedEvent.id));
      }
      setIsLoading(false);
      setOpenDeleteDialog(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setEventForm(prev => ({
        ...prev,
        date: format(date, "yyyy-MM-dd")
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!eventForm.title || !eventForm.date || !eventForm.location) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    if (selectedEvent?.id) {
      // Update existing event
      const updated = await updateEvent(selectedEvent.id, eventForm);
      if (updated) {
        setEvents(events.map(e => e.id === selectedEvent.id ? { ...updated, id: selectedEvent.id } : e));
      }
    } else {
      // Create new event
      const created = await createEvent(eventForm);
      if (created) {
        setEvents([...events, created]);
      }
    }
    
    setIsLoading(false);
    setOpenEventDialog(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Event Management</h1>
        <Button variant="ghost" onClick={handleLogout} className="text-gray-600">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Events</h2>
            <Button onClick={handleAddEvent}>
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </div>

          {isLoading ? (
            <div className="text-center py-8">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No events found. Create your first event!
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="w-[300px]">Description</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.title}</TableCell>
                    <TableCell>
                      {event.date ? format(parseISO(event.date), "MMM dd, yyyy") : "N/A"}
                    </TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell className="max-w-[300px] truncate">
                      {event.description}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditEvent(event)}
                        className="mr-2"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(event)}
                        className="text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </main>

      {/* Event Form Dialog */}
      <Dialog open={openEventDialog} onOpenChange={setOpenEventDialog}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>
              {selectedEvent ? "Edit Event" : "Add New Event"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="text-right font-medium">
                  Title*
                </label>
                <input
                  id="title"
                  name="title"
                  value={eventForm.title}
                  onChange={handleFormChange}
                  className="col-span-3 px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right font-medium">
                  Date*
                </label>
                <div className="col-span-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="location" className="text-right font-medium">
                  Location*
                </label>
                <input
                  id="location"
                  name="location"
                  value={eventForm.location}
                  onChange={handleFormChange}
                  className="col-span-3 px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="description" className="text-right font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={eventForm.description}
                  onChange={handleFormChange}
                  rows={4}
                  className="col-span-3 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isLoading}>
                {selectedEvent ? "Update Event" : "Create Event"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the event
              "{selectedEvent?.title}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EventManagement;
