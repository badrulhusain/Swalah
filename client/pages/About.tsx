import { Layout } from "@/components/Layout";
import { CheckCircle, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About the Union</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Learn about our organization, mission, and the impact we create for our college community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The College Union is a student-led organization dedicated to fostering community, organizing enriching events, and representing student interests across all aspects of campus life. We believe in empowering students to make their college experience memorable and meaningful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our members come from diverse backgrounds, bringing unique perspectives and talents that strengthen our organization and benefit the entire college community.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <div>
                  <p className="font-semibold text-foreground">Founded</p>
                  <p className="text-sm text-muted-foreground">2014 - Over a decade of impact</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <div>
                  <p className="font-semibold text-foreground">Members</p>
                  <p className="text-sm text-muted-foreground">500+ active student volunteers</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <div>
                  <p className="font-semibold text-foreground">Events</p>
                  <p className="text-sm text-muted-foreground">50+ events organized annually</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <div>
                  <p className="font-semibold text-foreground">Coverage</p>
                  <p className="text-sm text-muted-foreground">All academic departments</p>
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
              To create an inclusive, vibrant community that celebrates student achievements, organizes impactful events, and champions the interests and voices of all students.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To establish a college where every student feels valued, heard, and empowered to contribute to campus life and pursue their passions.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Inclusivity, Transparency, Excellence, and Accountability guide everything we do, ensuring fair representation and quality experiences for all.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 border border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">A Brief History</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The College Union was established in 2014 with a simple vision: to give students a voice and a platform to thrive. Over the years, we've grown from a small group of passionate students to a well-organized institution with representation from every corner of campus.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From organizing the annual College Fest that attracts thousands of visitors to launching our media wing that covers campus stories, our journey has been one of continuous growth and impact. We've also pioneered numerous clubs and societies that have become integral to campus culture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, the College Union stands as a symbol of student empowerment, having shaped countless memories, launched successful career paths, and built a community that truly lives by the motto: "For Students, By Students."
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
