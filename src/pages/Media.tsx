
import { useState, useEffect } from "react";
import { fetchGalleryItems, GalleryItem } from "@/services/galleryService";
import { format } from "date-fns";
import Layout from "@/components/layout/Layout";
import { Loader2, MapPin, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const Media = () => {
  const { data: galleryItems = [], isLoading, error } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGalleryItems,
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Gallery</h1>
            <p className="text-xl text-gray-600">
              Browse our photo gallery to see our work and impact in the community.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="animate-spin h-8 w-8 text-primary" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">
              Failed to load gallery items. Please try again later.
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              No gallery items available at this time.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div
                  key={item.id || item._id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.imageUrl || item.gallery}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        console.error(`Failed to load image: ${item.imageUrl || item.gallery}`);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center text-gray-500 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {format(new Date(item.date), "MMMM d, yyyy")}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Media;
