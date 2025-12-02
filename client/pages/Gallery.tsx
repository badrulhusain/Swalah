import { Layout } from "@/components/Layout";
import { Image } from "lucide-react";

export default function Gallery() {
  const galleryCategories = [
    { title: "College Fest", count: 45 },
    { title: "Sports Events", count: 32 },
    { title: "Art & Culture", count: 28 },
    { title: "Club Activities", count: 36 },
    { title: "Campus Life", count: 52 },
    { title: "Celebrations", count: 24 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Capture the vibrant moments and memories from our college events and activities.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Photo Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryCategories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-border bg-slate-100 dark:bg-slate-900 aspect-square cursor-pointer hover:shadow-lg transition-all"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center space-y-2">
                  <Image className="w-12 h-12 text-muted-foreground mx-auto opacity-50" />
                  <p className="text-muted-foreground font-medium">{category.title}</p>
                  <p className="text-xs text-muted-foreground">{category.count} photos</p>
                </div>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-xl border border-border text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Share Your Memories</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have photos from college events? We'd love to include them in our gallery! Send your photos to our media team or upload them directly.
          </p>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Submit Photos
          </button>
        </div>
      </section>
    </Layout>
  );
}
