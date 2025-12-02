import { Layout } from "@/components/Layout";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Gallery() {
  // Photo collections are shown in the grid below — we keep this function lean.

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
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Photos</h2>

        {/* show ordered images from public/gallery/img1..img23 directly */}
        <ImageGrid />

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


function ImageGrid() {
  const total = 12; // total images available in public/gallery/img1..img23
  const pageSize = 12; // show 12 cards per view
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open == null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") setOpen((v) => (v && v > 1 ? v - 1 : v));
      if (e.key === "ArrowRight") setOpen((v) => (v && v < total ? v + 1 : v));
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: Math.min(pageSize, total - page * pageSize) }).map((_, i) => {
          const num = page * pageSize + i + 1;
          const src = `/gallery/img${num}.jpg`;
          return (
            <button
              key={num}
              onClick={() => setOpen(num)}
              className="group relative rounded-2xl overflow-hidden shadow-xl border border-border p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label={`Open image ${num}`}
            >
                <img
                  src={src}
                  alt={`Gallery image ${num}`}
                  className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-transparent to-transparent text-white">
                <div className="flex items-center justify-between">
                  <div className="space-y-0">
                    <p className="text-sm font-semibold truncate">Photo {num}</p>
                    <p className="text-xs text-white/70">Hidaya College</p>
                  </div>
                  <div className="ml-2 opacity-90 p-2 bg-white/10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/><polyline points="17 3 21 3 21 7"/><path d="M3 12h18"/></svg>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* pagination controls */}
      <div className="flex items-center justify-between gap-4 mt-6">
        <div className="text-sm text-muted-foreground">Showing {page * pageSize + 1} - {Math.min((page + 1) * pageSize, total)} of {total}</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-3 py-1 rounded bg-muted-foreground/10 text-muted-foreground disabled:opacity-50"
          >
            Prev
          </button>
          <div className="text-sm text-muted-foreground">Page {page + 1} / {Math.ceil(total / pageSize)}</div>
          <button
            onClick={() => setPage((p) => Math.min(Math.ceil(total / pageSize) - 1, p + 1))}
            disabled={(page + 1) * pageSize >= total}
            className="px-3 py-1 rounded bg-muted-foreground/10 text-muted-foreground disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {open && (
        <Lightbox
          index={open}
          total={total}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((v) => (v && v > 1 ? v - 1 : v))}
          onNext={() => setOpen((v) => (v && v < total ? v + 1 : v))}
        />
      )}
    </>
  );
}

function Lightbox({ index, total, onClose, onPrev, onNext }: {
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const src = `/gallery/img${index}.jpg`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full h-full md:h-auto bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={`Expanded ${index}`} className="w-full max-h-[90vh] object-contain rounded-lg mx-auto" />

        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          aria-label="Close gallery"
        >
          <X className="w-5 h-5" />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          aria-label="Previous image"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          aria-label="Next image"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs text-white/80">
          {index} / {total}
        </div>
      </div>
    </div>
  );
}
