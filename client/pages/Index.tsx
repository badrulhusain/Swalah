import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Trophy, MessageSquare, Image, Megaphone, BookOpen } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-secondary/5 to-background py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-sm font-semibold text-primary">Welcome to SWALAH</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              SWALAH
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
              For Students, By Students
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering students through events, activities, and community engagement. We bring students together to create unforgettable memories and foster excellence in every aspect of student life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Card */}
          <Link
            to="/about"
            className="group relative p-8 rounded-xl border border-border bg-white dark:bg-slate-950 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">About Us</h3>
              <p className="text-sm text-muted-foreground">
                Discover our mission, vision, and what drives the student union forward.
              </p>
              <div className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Committee Card */}
          <Link
            to="/committee"
            className="group relative p-8 rounded-xl border border-border bg-white dark:bg-slate-950 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Committee</h3>
              <p className="text-sm text-muted-foreground">
                Meet the dedicated leaders driving our union and representing student interests.
              </p>
              <div className="text-secondary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Meet Team <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Events Card */}
          <Link
            to="/events"
            className="group relative p-8 rounded-xl border border-border bg-white dark:bg-slate-950 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Events & Activities</h3>
              <p className="text-sm text-muted-foreground">
                Explore our vibrant calendar of upcoming and past events celebrating campus life.
              </p>
              <div className="text-accent font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                View Events <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Contact Card */}
          <Link
            to="/contact"
            className="group relative p-8 rounded-xl border border-border bg-white dark:bg-slate-950 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
              <p className="text-sm text-muted-foreground">
                Contact us with questions, suggestions, or to get involved in union activities.
              </p>
              <div className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Contact Us <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground font-medium">Active Members</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-secondary">50+</p>
              <p className="text-muted-foreground font-medium">Events Yearly</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-accent">12</p>
              <p className="text-muted-foreground font-medium">Clubs & Societies</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground font-medium">Years of Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore More Features
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond our core offerings, discover galleries from memorable events, important announcements, and our network of student clubs and societies.
            </p>

            <div className="space-y-4">
              <Link
                to="/gallery"
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <Image className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Photo Gallery</p>
                  <p className="text-sm text-muted-foreground">See memorable moments from events</p>
                </div>
              </Link>

              <Link
                to="/announcements"
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <Megaphone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-semibold text-foreground">Announcements</p>
                  <p className="text-sm text-muted-foreground">Stay updated with latest notices</p>
                </div>
              </Link>

              <Link
                to="/clubs"
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <Trophy className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Clubs & Societies</p>
                  <p className="text-sm text-muted-foreground">Join our vibrant community</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-8 h-80 flex items-center justify-center border border-primary/10">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Join Our Community</h3>
              <p className="text-muted-foreground">Be part of something bigger</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Whether you're interested in events, leadership roles, or just want to stay updated, we'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
}
