import { Layout } from "@/components/Layout";
import { CheckCircle, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SWALAH STUDENTS' UNION 2025–26
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Darul Hidaya Da’wa College Manoor — A platform where knowledge, leadership, and Islamic values unite.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The SWALAH Students’ Union is a vibrant, value-based movement dedicated to shaping morally upright, intellectually enriched, and socially responsible students rooted in Islamic character.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operating under the academic and spiritual vision of Darul Huda Islamic University, SWALAH blends knowledge, creativity, ethics, and leadership to build well-rounded personalities.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <div>
                  <p className="font-semibold text-foreground">Affiliation</p>
                  <p className="text-sm text-muted-foreground">Darul Huda Islamic University</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <div>
                  <p className="font-semibold text-foreground">Focus Areas</p>
                  <p className="text-sm text-muted-foreground">
                    Arts, Literature, Media, Moral Training & Social Outreach
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <div>
                  <p className="font-semibold text-foreground">Languages</p>
                  <p className="text-sm text-muted-foreground">
                    English, Malayalam, Arabic, Urdu
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <div>
                  <p className="font-semibold text-foreground">Core Strength</p>
                  <p className="text-sm text-muted-foreground">
                    Islamic character, creativity, leadership, communication
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          {/* Mission */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To nurture intellectually empowered, morally disciplined, and creatively inspired students who contribute meaningfully to society with sincerity and compassion.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To raise a generation where intellect, creativity, linguistic excellence, and Islamic values come together to serve humanity with wisdom and responsibility.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sincerity, Discipline, Creativity, Social Responsibility, Integrity, and Islamic Ethics.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 border border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About SWALAH</h2>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              SWALAH is the Students' Wing for Arts and Literary Activities of Hidaya. It serves as a platform for debates, creative writing, cultural performances, drama, digital arts, media production, and social outreach.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Students actively engage in mastering English, Malayalam, Arabic, and Urdu through contests, workshops, and continuous practice — shaping confident communicators and responsible leaders.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every activity focuses on building Islamic character, moral grounding, sincerity, humility, and respect — integrating intellectual pursuits with spiritual development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              SWALAH continues to innovate by blending tradition with modernity, fostering creativity, healthy competition, and community service to build a just and noble future.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
