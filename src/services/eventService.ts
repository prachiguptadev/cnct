
import { toast } from "@/hooks/use-toast";

export interface Event {
  id?: string;
  _id?: string; // Added to handle API response
  title: string;
  date: string;
  location: string;
  description: string;
}

const BASE_URL = "https://donation-ten-sigma.vercel.app";

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch(`${BASE_URL}/events`);
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    const events = await response.json();
    
    // Map API response to our application format and sort by date
    const mappedEvents = events.map((event: any) => ({
      id: event._id,
      _id: event._id,
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description,
    }));
    
    // Sort events by date (newest first)
    return mappedEvents.sort((a: Event, b: Event) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    toast({
      title: "Error",
      description: "Failed to load events. Please try again later.",
      variant: "destructive",
    });
    return [];
  }
};

export const fetchEventById = async (id: string): Promise<Event | null> => {
  try {
    const response = await fetch(`${BASE_URL}/events/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch event');
    }
    const event = await response.json();
    
    // Map API response to our application format
    return {
      id: event._id,
      _id: event._id,
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description,
    };
  } catch (error) {
    console.error(`Error fetching event ${id}:`, error);
    toast({
      title: "Error",
      description: "Failed to load event details. Please try again later.",
      variant: "destructive",
    });
    return null;
  }
};

export const createEvent = async (event: Event): Promise<Event | null> => {
  try {
    const response = await fetch(`${BASE_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || 'Failed to create event');
    }
    
    toast({
      title: "Success",
      description: "Event created successfully!",
    });
    
    const createdEvent = await response.json();
    
    // Map API response to our application format
    return {
      id: createdEvent._id,
      _id: createdEvent._id,
      title: createdEvent.title,
      date: createdEvent.date,
      location: createdEvent.location,
      description: createdEvent.description,
    };
  } catch (error) {
    console.error("Error creating event:", error);
    toast({
      title: "Error",
      description: `Failed to create event: ${error instanceof Error ? error.message : 'Unknown error'}`,
      variant: "destructive",
    });
    return null;
  }
};

export const updateEvent = async (id: string, event: Event): Promise<Event | null> => {
  try {
    console.log(`Updating event with ID: ${id}`, event);
    
    const response = await fetch(`${BASE_URL}/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || `Failed to update event with ID: ${id}`);
    }
    
    toast({
      title: "Success",
      description: "Event updated successfully!",
    });
    
    const updatedEvent = await response.json();
    
    // Map API response to our application format
    return {
      id: updatedEvent._id,
      _id: updatedEvent._id,
      title: updatedEvent.title,
      date: updatedEvent.date,
      location: updatedEvent.location,
      description: updatedEvent.description,
    };
  } catch (error) {
    console.error(`Error updating event ${id}:`, error);
    toast({
      title: "Error",
      description: `Failed to update event: ${error instanceof Error ? error.message : 'Unknown error'}`,
      variant: "destructive",
    });
    return null;
  }
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  try {
    console.log(`Deleting event with ID: ${id}`);
    
    const response = await fetch(`${BASE_URL}/events/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || `Failed to delete event with ID: ${id}`);
    }
    
    toast({
      title: "Success",
      description: "Event deleted successfully!",
    });
    
    return true;
  } catch (error) {
    console.error(`Error deleting event ${id}:`, error);
    toast({
      title: "Error",
      description: `Failed to delete event: ${error instanceof Error ? error.message : 'Unknown error'}`,
      variant: "destructive",
    });
    return false;
  }
};
