import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useMetaTags } from "../hooks/useMetaTags";

const photos = [
  {
    id: "plumber-working",
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format",
    alt: "Professional plumber working on pipes",
  },
  {
    id: "pipe-installation",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format",
    alt: "Clean modern pipe installation",
  },
  {
    id: "bathroom-reno",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format",
    alt: "Modern bathroom renovation",
  },
  {
    id: "water-heater",
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&q=70",
    alt: "Plumber installing water heater",
  },
  {
    id: "pipe-repair",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&q=70",
    alt: "Pipe repair in progress",
  },
  {
    id: "kitchen-plumbing",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&q=70",
    alt: "Kitchen plumbing installation",
  },
];

export default function Gallery() {
  useMetaTags({
    title: "Our Work | Maple Ridge Plumbing Hamilton",
    description:
      "Browse completed plumbing jobs by Maple Ridge Plumbing — drain cleaning, water heaters, bathroom renovations, and more in Hamilton, ON.",
  });

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Work
          </h1>
          <p className="text-white/75 text-lg">
            A sample of completed jobs across Hamilton and surrounding areas.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm text-muted-foreground font-medium">
                    Completed Job — Hamilton, ON
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-secondary">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-3">
            Like what you see?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us today to discuss your plumbing project.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="font-bold bg-accent hover:bg-accent/90 text-white"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
