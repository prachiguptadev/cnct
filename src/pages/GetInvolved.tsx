import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { format, parseISO } from "date-fns";
import { fetchEvents, Event } from "@/services/eventService";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [events, setEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      setEventsLoading(true);
      const data = await fetchEvents();
      setEvents(data);
      setEventsLoading(false);
    };

    loadEvents();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form
    console.log("Volunteer application:", formData);
    alert(
      "Thank you for your interest in volunteering! We will contact you soon."
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-gray-600">
              Join our mission to create positive change. There are many ways
              you can contribute to our cause and make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-16 text-center">Ways to Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="bg-primary/5 p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Donate</h3>
              <p className="text-gray-700 mb-6">
                Financial contributions of any size help us sustain and expand
                our programs. Your donation creates real impact.
              </p>
              <Link to="/donate" className="btn-primary inline-block">
                Make a Donation
              </Link>
            </div>

            <div className="bg-secondary/5 p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-6">
                Contribute your time and skills to our programs. From teaching
                to event support, there's a role for everyone.
              </p>
              <a href="#volunteer-form" className="btn-secondary inline-block">
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Upcoming Events & Campaigns
          </h2>

          {eventsLoading ? (
            <div className="text-center py-6">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="text-center py-6 text-gray-500">
              No upcoming events at the moment. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      {event.date
                        ? format(parseISO(event.date), "MMMM d, yyyy")
                        : "Date TBA"}
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <button className="text-primary font-medium hover:underline inline-flex items-center">
                      Register to Volunteer
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
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

export default GetInvolved;
