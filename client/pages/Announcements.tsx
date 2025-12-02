import { Layout } from "@/components/Layout";
import { Bell, Calendar, AlertCircle } from "lucide-react";

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  category: "important" | "event" | "notice";
  priority: "high" | "medium" | "low";
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "SWALAH Elections 2024 - Nomination Period Open",
    content:
      "The nomination period for SWALAH Elections 2024 is now open. Interested students can submit their nominations by January 31, 2024. Elections will be held in February.",
    date: "January 10, 2024",
    category: "important",
    priority: "high",
  },
  {
    id: 2,
    title: "SWALAH Fest 2024 - Volunteer Registration",
    content:
      "Volunteers needed for SWALAH Fest 2024! If you're interested in contributing to the biggest event of the year, register now. Various roles available - management, coordination, logistics, and more.",
    date: "January 8, 2024",
    category: "event",
    priority: "high",
  },
  {
    id: 3,
    title: "Campus Maintenance - Library Closure",
    content:
      "The main library will remain closed from January 15-20, 2024 for essential maintenance and upgrades. Alternative study spaces will be available in the north wing.",
    date: "January 5, 2024",
    category: "notice",
    priority: "medium",
  },
  {
    id: 4,
    title: "Exam Schedules - Winter Term Released",
    content:
      "Winter term exam schedules have been released. Students can check their personalized schedules on the student portal. Exam period is February 5 - February 28, 2024.",
    date: "December 28, 2023",
    category: "important",
    priority: "high",
  },
  {
    id: 5,
    title: "Semester Break Guidelines",
    content:
      "The college will observe semester break from December 20, 2023 to January 5, 2024. All clubs and union activities will resume on January 8, 2024. Have a great break!",
    date: "December 15, 2023",
    category: "notice",
    priority: "medium",
  },
  {
    id: 6,
    title: "New Bus Route - Campus Transportation",
    content:
      "A new bus route has been added for better connectivity to the north campus. Service starts from January 1, 2024. Check the transportation office for detailed schedules.",
    date: "December 10, 2023",
    category: "notice",
    priority: "low",
  },
];

function getColorClasses(category: string, priority: string) {
  if (priority === "high") {
    return "border-l-4 border-destructive bg-red-50 dark:bg-red-950/20";
  }
  if (category === "event") {
    return "border-l-4 border-accent bg-accent/5";
  }
  if (category === "important") {
    return "border-l-4 border-primary bg-primary/5";
  }
  return "border-l-4 border-secondary bg-secondary/5";
}

function getCategoryIcon(category: string) {
  if (category === "important") return <AlertCircle className="w-5 h-5 text-primary" />;
  if (category === "event") return <Calendar className="w-5 h-5 text-accent" />;
  return <Bell className="w-5 h-5 text-secondary" />;
}

function getCategoryBadge(category: string, priority: string) {
  if (priority === "high") {
    return (
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-destructive/10 text-destructive">
        ⚠ Urgent
      </span>
    );
  }
  if (category === "event") {
    return (
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
        📅 Event
      </span>
    );
  }
  if (category === "important") {
    return (
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
        ⭐ Important
      </span>
    );
  }
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">
      📢 Notice
    </span>
  );
}

export default function Announcements() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/10 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Announcements & Notice Board
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Stay updated with the latest news, important notices, and announcements from the college union.
          </p>
        </div>
      </section>

      {/* Announcements Content */}
      <section className="py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`rounded-lg p-6 border transition-all hover:shadow-lg ${getColorClasses(
                announcement.category,
                announcement.priority
              )}`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{getCategoryIcon(announcement.category)}</div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {announcement.title}
                    </h3>
                    {getCategoryBadge(announcement.category, announcement.priority)}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{announcement.date}</p>

                  <p className="text-muted-foreground leading-relaxed">{announcement.content}</p>

                  <button className="mt-4 text-primary font-semibold text-sm hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Stay Informed</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our notification service to get important announcements and event updates directly to your email.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-white dark:bg-slate-950 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
