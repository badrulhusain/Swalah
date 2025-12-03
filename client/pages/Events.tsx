import { Layout } from "@/components/Layout";

interface Event {
  id: number;
  title: string;
  image?: string;
  status: "upcoming" | "past";
}

const events: Event[] = [
  { id: 1, title: "INAGURAL CEREMONY", image: "/gallery/img3.jpg", status: "upcoming" },
  { id: 2, title: "WELCOME PARTY", image: "/gallery/img4.jpg", status: "upcoming" },
  { id: 3, title: "ASRAR EXPO", image: "/gallery/img8.jpg", status: "upcoming" },
  { id: 4, title: "ACADEMIC CONFRENCE", image: "/gallery/img6.jpg", status: "upcoming" },
  { id: 5, title: "INDEPENDENCE DAY", image: "/gallery/img5.jpg", status: "upcoming" },
  { id: 6, title: "LA KAL BASHAR ", image: "/gallery/img9.jpg", status: "upcoming" },
  { id: 7, title: "WAQF SEMINAR", image: "/gallery/img12.jpg", status: "upcoming" },
  { id: 9, title: "WAQF SEMINAR", image: "/gallery/img10.jpg", status: "upcoming" },
  { id: 8, title: "WAQF SEMINAR", image: "/gallery/img11.jpg", status: "upcoming" },
  { id: 10, title: "BOOK LAUNCH", image: "/gallery/img7.jpg", status: "upcoming" },
  { id: 11, title: "WAQF SEMINAR", image: "/gallery/img13.jpg", status: "upcoming" },
];

const programs = events.filter((e) => e.status !== "past");

function ProgramCard({ program }: { program: Event }) {
  const placeholder = `/gallery/img1.jpg`;

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-white dark:bg-slate-950 hover:shadow-lg transition-all">
      <div className="h-48 md:h-[440px] w-full bg-gray-100 dark:bg-slate-900">
        <img
          src={program.image ?? placeholder}
          alt={program.title}
          className="w-full h-full object-fill"
        />
      </div>
      
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

      {/* Main Content - Programs Grid (only non-past) */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
          <span className="w-1 h-8 bg-primary rounded-full"></span>
          Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
