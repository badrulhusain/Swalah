import { Layout } from "@/components/Layout";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  description: string;
  status: "upcoming" | "past";
}

const events: Event[] = [
  {
    id: 1,
    title: "College Fest 2024",
    date: "March 15-17, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "Main Campus Ground",
    attendees: "2000+",
    description: "The biggest event of the year featuring cultural performances, competitions, food stalls, and entertainment.",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Sports Meet",
    date: "February 10-12, 2024",
    time: "7:00 AM onwards",
    location: "Sports Complex",
    attendees: "500+",
    description: "Annual inter-year sports competition featuring cricket, basketball, volleyball, and athletics.",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Personality Development Workshop",
    date: "January 25, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Auditorium Hall",
    attendees: "300+",
    description: "Interactive workshop on communication skills and personal development by industry experts.",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Art Exhibition & Sale",
    date: "December 20-22, 2023",
    time: "11:00 AM - 6:00 PM",
    location: "Central Gallery",
    attendees: "800+",
    description: "Showcase of student artwork with opportunity to purchase and support talented artists.",
    status: "past",
  },
  {
    id: 5,
    title: "Music Night - Live Performances",
    date: "November 30, 2023",
    time: "6:00 PM - 10:00 PM",
    location: "Open Air Amphitheater",
    attendees: "1200+",
    description: "Evening of live music featuring student and professional bands.",
    status: "past",
  },
  {
    id: 6,
    title: "Alumni Interaction Session",
    date: "November 15, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Main Auditorium",
    attendees: "400+",
    description: "Meet successful alumni, hear their success stories, and get career guidance.",
    status: "past",
  },
];

const upcomingEvents = events.filter((e) => e.status === "upcoming");
const pastEvents = events.filter((e) => e.status === "past");

function EventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-xl border border-border bg-white dark:bg-slate-950 p-6 hover:shadow-lg hover:border-primary/30 transition-all">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground flex-1">{event.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            event.status === "upcoming"
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {event.status === "upcoming" ? "Upcoming" : "Past"}
        </span>
      </div>

      <p className="text-muted-foreground mb-4">{event.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Users className="w-4 h-4 text-primary" />
          <span>{event.attendees} attendees</span>
        </div>
      </div>

      {event.status === "upcoming" && (
        <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Register Now
        </button>
      )}
    </div>
  );
}

export default function Events() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/10 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Events & Activities</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover the vibrant calendar of events that make our college experience unforgettable.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full"></span>
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-secondary rounded-full"></span>
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
