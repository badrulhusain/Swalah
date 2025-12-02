import { Layout } from "@/components/Layout";
import { Mail, Linkedin } from "lucide-react";

interface CommitteeMember {
  name: string;
  role: string;
  description: string;
  email?: string;
  image?: string;
}
const committeeMembers: CommitteeMember[] = [
  {
    name: "Hashir Muhammed P",
    role: "President",
    description: "Leads the union with vision and responsibility, ensuring smooth overall functioning.",
    email: "hashir.p@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Muhammed Hubab A",
    role: "General Secretary",
    description: "Coordinates union activities, maintains communication, and manages internal documentation.",
    email: "hubab.a@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Muhammed Hisan C",
    role: "Vice President",
    description: "Supports the leadership team and monitors student welfare initiatives.",
    email: "hisan.c@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Muhammed Nihal Thangal",
    role: "Vice President",
    description: "Assists in coordinating programs and ensures smooth event execution.",
    email: "nihal.thangal@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Muhammed Yoosuf P",
    role: "Joint Secretary",
    description: "Manages documentation, assists with planning, and executes key administrative duties.",
    email: "yoosuf.p@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Muhammed Afnas VK",
    role: "PRO",
    description: "Handles public relations, announcements, and external communication of union activities.",
    email: "afnas.vk@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    name: "Muhammed Murshid P",
    role: "Treasurer",
    description: "Responsible for managing the union budget and maintaining transparent financial records.",
    email: "murshid.p@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    name: "Muhammed Hashim P",
    role: "Creative Wing",
    description: "Designs visual content and brings creative direction to events and campaigns.",
    email: "hashim.p@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Muhammed Sinan KK",
    role: "Creative Wing",
    description: "Works on creative design, media production, and branding for the union.",
    email: "sinan.kk@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Muhammed Rabeeh KP",
    role: "Creative Wing",
    description: "Supports digital creativity, event branding, and campaign visuals.",
    email: "rabeeh.kp@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Dibar Sha K",
    role: "Office Secretary",
    description: "Manages office activities, documentation, and administrative support.",
    email: "dibarsha.k@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Mazin Sha K",
    role: "Outreach Coordinator",
    description: "Builds connections with students, organizes outreach programs, and supports community activities.",
    email: "mazinsha.k@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Muhammed Junaid K",
    role: "Financial Manager",
    description: "Oversees financial planning, ensures proper fund allocation, and assists with budget audits.",
    email: "junaid.k@collegeunion.edu",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
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
          {committeeMembers.map((member, index) => (
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
