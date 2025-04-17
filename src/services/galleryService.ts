
import axios from "axios";
import { toast } from "@/hooks/use-toast";

const BASE_URL = "https://donation-ten-sigma.vercel.app";

export interface GalleryItem {
  id?: string;
  _id?: string;  // Added to handle API response
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
  gallery?: string; // Added to handle API response
  createdAt?: string;
  updatedAt?: string;
}

export const fetchGalleryItems = async (): Promise<GalleryItem[]> => {
  try {
    console.log("Fetching gallery items from:", `${BASE_URL}/gallery`);
    const response = await axios.get(`${BASE_URL}/gallery`);
    
    // Log the response to help debug
    console.log("Gallery API response:", response.data);
    
    // Map API response format to our application format
    const items = response.data.map((item: any) => ({
      id: item._id, // Map _id to id for consistent use in the app
      _id: item._id, // Keep original _id
      title: item.title,
      date: item.date,
      location: item.location,
      description: item.description,
      imageUrl: item.gallery, // Map gallery to imageUrl for consistent use in the app
      gallery: item.gallery, // Keep original gallery field
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }));
    
    return items;
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    toast({
      title: "Error",
      description: "Failed to load gallery items. Please try again later.",
      variant: "destructive",
    });
    return [];
  }
};

export const fetchGalleryItemById = async (id: string): Promise<GalleryItem> => {
  try {
    const response = await axios.get(`${BASE_URL}/gallery/${id}`);
    const item = response.data;
    
    // Convert API format to app format
    return {
      id: item._id,
      _id: item._id,
      title: item.title,
      date: item.date,
      location: item.location,
      description: item.description,
      imageUrl: item.gallery,
      gallery: item.gallery,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    };
  } catch (error) {
    console.error(`Error fetching gallery item with id ${id}:`, error);
    toast({
      title: "Error",
      description: "Failed to load gallery item. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
};

export const createGalleryItem = async (formData: FormData): Promise<GalleryItem> => {
  try {
    console.log("Creating gallery item:", Object.fromEntries(formData));
    const response = await axios.post(`${BASE_URL}/gallery`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    const item = response.data;
    
    // Convert API response to app format
    return {
      id: item._id,
      _id: item._id,
      title: item.title,
      date: item.date,
      location: item.location,
      description: item.description,
      imageUrl: item.gallery,
      gallery: item.gallery,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    };
  } catch (error) {
    console.error("Error creating gallery item:", error);
    toast({
      title: "Error",
      description: "Failed to create gallery item. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
};

export const updateGalleryItem = async (
  id: string,
  data: Partial<GalleryItem>
): Promise<GalleryItem> => {
  try {
    console.log(`Updating gallery item with id ${id}:`, data);
    
    // Convert app format back to API format for the update
    const apiData: any = {
      title: data.title,
      date: data.date,
      location: data.location,
      description: data.description,
    };
    
    const response = await axios.put(`${BASE_URL}/gallery/${id}`, apiData);
    const item = response.data;
    
    // Convert API response to app format
    return {
      id: item._id,
      _id: item._id,
      title: item.title,
      date: item.date,
      location: item.location,
      description: item.description,
      imageUrl: item.gallery,
      gallery: item.gallery,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    };
  } catch (error) {
    console.error(`Error updating gallery item with id ${id}:`, error);
    toast({
      title: "Error",
      description: "Failed to update gallery item. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
};

export const deleteGalleryItem = async (id: string): Promise<void> => {
  try {
    console.log(`Deleting gallery item with id ${id}`);
    await axios.delete(`${BASE_URL}/gallery/${id}`);
    toast({
      title: "Success",
      description: "Gallery item deleted successfully",
    });
  } catch (error) {
    console.error(`Error deleting gallery item with id ${id}:`, error);
    toast({
      title: "Error",
      description: "Failed to delete gallery item. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
};
