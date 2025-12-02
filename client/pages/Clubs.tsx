import { Layout } from "@/components/Layout";
import { Music, Trophy, Palette, Code, Leaf, BookOpen } from "lucide-react";

interface Club {
  name: string;
  description: string;
  icon: React.ReactNode;
  members: number;
  founded: string;
}

const clubs: Club[] = [
  {
    name: "Arts Club",
    description:
      "Fostering creativity through visual arts, theater, and performing arts. Organizes exhibitions, plays, and cultural nights.",
    icon: <Palette className="w-8 h-8" />,
    members: 150,
    founded: "2015",
  },
  {
    name: "Sports Club",
    description:
      "Promoting fitness and excellence in sports. Organizes tournaments, training sessions, and inter-college competitions.",
    icon: <Trophy className="w-8 h-8" />,
    members: 200,
    founded: "2014",
  },
  {
    name: "Music Club",
    description:
      "For music enthusiasts of all genres. Conducts concerts, jam sessions, and music appreciation events.",
    icon: <Music className="w-8 h-8" />,
    members: 100,
    founded: "2016",
  },
  {
    name: "Tech Club",
    description:
      "Exploring technology, coding, and innovation. Hosts hackathons, workshops, and tech talks by industry experts.",
    icon: <Code className="w-8 h-8" />,
    members: 180,
    founded: "2017",
  },
  {
    name: "Environmental Club",
    description:
      "Committed to sustainability and environmental awareness. Organizes green initiatives and environmental campaigns.",
    icon: <Leaf className="w-8 h-8" />,
    members: 120,
    founded: "2018",
  },
  {
    name: "Literary Society",
    description:
      "Celebrating literature and creative writing. Hosts poetry readings, book discussions, and writing competitions.",
    icon: <BookOpen className="w-8 h-8" />,
    members: 90,
    founded: "2014",
  },
];

export default function Clubs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/10 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Clubs & Societies</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover our vibrant network of clubs and societies where students pursue their passions and build friendships.
          </p>
        </div>
      </section>

      {/* Clubs Content */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Clubs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border bg-white dark:bg-slate-950 p-8 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {club.icon}
                </div>

                <h3 className="text-xl font-bold text-foreground">{club.name}</h3>

                <p className="text-muted-foreground leading-relaxed">{club.description}</p>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Members</span>
                    <span className="font-semibold text-foreground">{club.members}+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Founded</span>
                    <span className="font-semibold text-foreground">{club.founded}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 border border-primary/20 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Want to Join?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            All clubs welcome new members! Attend our club meet-ups, events, and meetings during the semester. Registration details will be shared during the annual club fair and orientation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View Club Fair Dates
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Club Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-primary">{clubs.length}</p>
            <p className="text-muted-foreground">Active Clubs</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-secondary">
              {clubs.reduce((sum, club) => sum + club.members, 0)}+
            </p>
            <p className="text-muted-foreground">Total Members</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-accent">30+</p>
            <p className="text-muted-foreground">Events Yearly</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
            <p className="text-muted-foreground">Years Together</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
