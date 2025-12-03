import { Layout } from "@/components/Layout";
import {
  Palette,
  BookOpen,
  PenTool,
  Newspaper,
  Megaphone,
  Users,
  Library,
  ImageIcon,
  Globe,
  Code,
  Camera,
  ShieldCheck,
  FlaskRound,
  FileText,
  HeartHandshake,
  
} from "lucide-react";

interface Club {
  name: string;
  description: string;
  icon: React.ReactNode;
  chairman: string;
  convener: string;
  founded: string;
}
export const clubs: Club[] = [
  {
    name: "CREATIVE WING",
    description:
      "The hub of design and innovation — creating posters, branding, digital content, and creative direction for all union programs.",
    icon: <Palette className="w-8 h-8" />,
    chairman: "Yoosuf",
    convener: "Rabeeh",
    founded: "2015",
  },

  {
    name: "ARABIC WING",
    description:
      "Promotes Arabic language and culture through speech sessions, literary discussions, grammar workshops, and public speaking activities.",
    icon: <BookOpen className="w-8 h-8" />,
    chairman: "Shamil",
    convener: "Ameer Ali",
    founded: "2014",
  },

  {
    name: "URDU WING",
    description:
      "Encourages Urdu poetry, Mushaira events, storytelling, literature appreciation and weekly language development sessions.",
    icon: <PenTool className="w-8 h-8" />,
    chairman: "Ashique",
    convener: "Arif Ali",
    founded: "2016",
  },

  {
    name: "ENGLISH WING",
    description:
      "Enhances English communication, debates, public speaking, creative writing and literary excellence through workshops and activities.",
    icon: <Megaphone className="w-8 h-8" />,
    chairman: "Rizwana",
    convener: "Shuib",
    founded: "2017",
  },

  {
    name: "MALAYALAM WING",
    description:
      "Promotes Malayalam literature through reading clubs, essay writing, storytelling, and cultural discussions.",
    icon: <BookOpen className="w-8 h-8" />,
    chairman: "Ijlan",
    convener: "Shazad",
    founded: "2018",
  },

  {
    name: "GK WING",
    description:
      "Builds knowledge and awareness through quizzes, current affairs sessions, competitions, and informative discussions.",
    icon: <Globe className="w-8 h-8" />,
    chairman: "Mubashir",
    convener: "Nizam",
    founded: "2014",
  },

  {
    name: "LIBRARY WING",
    description:
      "Encourages reading culture, book reviews, literary discussions and library volunteering activities.",
    icon: <Library className="w-8 h-8" />,
    chairman: "Mujthaba",
    convener: "Sulaiman",
    founded: "2014",
  },

  {
    name: "ARTS WING",
    description:
      "Focuses on painting, drawing, calligraphy, sculpture and visual art exhibitions — nurturing creativity across campus.",
    icon: <ImageIcon className="w-8 h-8" />,
    chairman: "Rishad",
    convener: "Sayyid Habeeb",
    founded: "2014",
  },

  {
    name: "MEDIA WING",
    description:
      "The official media group responsible for photography, videography, editing, reporting and event documentation.",
    icon: <Camera className="w-8 h-8" />,
    chairman: "Rihan",
    convener: "Badurl",
    founded: "2014",
  },

  {
    name: "HIMAYA WING",
    description:
      "A welfare and support wing offering guidance, mentoring, counselling awareness, and humanitarian activities.",
    icon: <ShieldCheck className="w-8 h-8" />,
    chairman: "Sulthan",
    convener: "Arshad",
    founded: "2014",
  },

  {
    name: "OGEA WING",
    description:
      "A social service and outreach-focused wing working on charity programs, community support, and empowerment activities.",
    icon: <Users className="w-8 h-8" />,
    chairman: "Mazin Sha",
    convener: "Savad Salim",
    founded: "2014",
  },

{
  name: "SKSSF WING",
  description:
    "The Samastha Kerala Sunni Students Federation wing focusing on creed education, Islamic guidance, moral values, and disciplined student leadership.",
  icon: <ShieldCheck className="w-8 h-8" />, // better icon for creed/aqeedah
  chairman: "Rishad Ali",
  convener: "Abdul Bari",
  founded: "2014",
},
{
  name: "SICMA WING",
  description:
    "The science and innovation wing promoting scientific literacy, research mindset, academic excellence, and technology-based student empowerment.",
  icon: <FlaskRound className="w-8 h-8" />, // science icon
  chairman: "Sabith U",
  convener: "Salman",
  founded: "2014",
},
{
  name: "ORATION WING",
  description:
    "The platform for cultivating public speaking, debates, elocution, motivational talks, and communication excellence.",
  icon: <Megaphone className="w-8 h-8" />,
  chairman: "Anas M",
  convener: "Nihal N.T",
  founded: "2014",
},
{
  name: "PUBLISHING BUREAU",
  description:
    "Responsible for publications, creative writing, magazines, reports, documentation, and all written communication of the Union.",
  icon: <FileText className="w-8 h-8" />, // better for publishing
  chairman: "Irfan Husain",
  convener: "Al-Sabith",
  founded: "2014",
},

 {
  name: "WELFARE WING",
  description:
    "A service-oriented wing supporting student welfare, charity initiatives, relief activities, and community assistance programs.",
  icon: <HeartHandshake className="w-8 h-8" />, // welfare/help icon
  chairman: "Ajmal",
  convener: "Fadil",
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
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chairman</span>
                      <span className="font-semibold text-foreground">{club.chairman}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Convener</span>
                      <span className="font-semibold text-foreground">{club.convener}</span>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>

        {/* Join Section */}
        {/* <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 border border-primary/20 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Want to Join?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Meet the chairman and convener of each club — attend club meet-ups, events, and meetings during the semester to connect and learn how to participate. Registration details will be shared during the annual club fair and orientation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View Club Fair Dates
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
              Contact Us
            </button>
          </div>
        </div> */}

        {/* Club Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-primary">{clubs.length}</p>
            <p className="text-muted-foreground">Active Clubs</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-secondary">
              {clubs.length * 2}+
            </p>
            <p className="text-muted-foreground">Total Club Leads</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-accent">10+</p>
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
