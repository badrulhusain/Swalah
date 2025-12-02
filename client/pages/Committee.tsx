import { Layout } from "@/components/Layout";
import { Mail, Linkedin } from "lucide-react";

interface CommitteeMember {
  name: string;
  role: string;
  description: string;
  email?: string;
  image?: string;
}

const committeemembers: CommitteeMember[] = [
  {
    name: "Rajesh Kumar",
    role: "President",
    description: "Leading the union with vision and dedication. Oversees all union activities and represents student interests.",
    email: "rajesh@college.edu",
  },
  {
    name: "Priya Singh",
    role: "Vice President",
    description: "Supporting the president and managing day-to-day operations. Ensures smooth execution of all initiatives.",
    email: "priya@college.edu",
  },
  {
    name: "Arun Patel",
    role: "Secretary",
    description: "Maintains records, manages communications, and coordinates between teams. The backbone of our organization.",
    email: "arun@college.edu",
  },
  {
    name: "Sneha Verma",
    role: "Arts Club Secretary",
    description: "Promotes cultural activities, organizes art exhibitions, and nurtures creative talent across campus.",
    email: "sneha@college.edu",
  },
  {
    name: "Vikram Singh",
    role: "Sports Secretary",
    description: "Organizes sporting events, manages teams, and promotes fitness and wellness among students.",
    email: "vikram@college.edu",
  },
  {
    name: "Ananya Das",
    role: "Media & Publicity Lead",
    description: "Manages communications, social media, and ensures our stories reach the entire community.",
    email: "ananya@college.edu",
  },
  {
    name: "Rohan Gupta",
    role: "Finance Secretary",
    description: "Manages union budget and finances transparently. Ensures responsible resource allocation.",
    email: "rohan@college.edu",
  },
  {
    name: "Pooja Joshi",
    role: "Events Coordinator",
    description: "Plans and executes memorable events that define the college experience for all students.",
    email: "pooja@college.edu",
  },
];

export default function Committee() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/10 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Committee</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Meet the passionate leaders driving our union and working tirelessly for student welfare and engagement.
          </p>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {committeemembers.map((member, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-white dark:bg-slate-950 overflow-hidden hover:shadow-lg transition-all hover:border-secondary/30"
            >
              {/* Avatar Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center border-b border-border group-hover:from-secondary/30 group-hover:to-accent/30 transition-colors">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-semibold text-secondary">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>

                {member.email && (
                  <div className="flex items-center gap-2 text-sm text-primary hover:underline pt-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Class Representatives Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Class Representatives</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our class representatives bridge the gap between the union and students in each year, ensuring every voice is heard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["First Year", "Second Year", "Third Year", "Fourth Year"].map((year) => (
              <div
                key={year}
                className="p-6 rounded-xl border border-border bg-slate-50 dark:bg-slate-900 space-y-3"
              >
                <h3 className="text-lg font-semibold text-foreground">{year}</h3>
                <p className="text-sm text-muted-foreground">Class representatives coordinate activities and gather feedback from their respective years.</p>
                <p className="text-sm font-medium text-primary">Coming Soon - Meet the team</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
