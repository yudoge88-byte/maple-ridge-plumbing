import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Shield,
  Star,
  Tag,
} from "lucide-react";
import { useRef } from "react";
import ContactForm from "../components/ContactForm";
import { useMetaTags } from "../hooks/useMetaTags";

const trustItems = [
  {
    icon: Shield,
    label: "Licensed & Insured",
    desc: "Fully certified for your peace of mind",
  },
  {
    icon: Clock,
    label: "24/7 Emergency Service",
    desc: "We answer when you need us most",
  },
  {
    icon: Tag,
    label: "Free Estimates",
    desc: "Honest pricing, no surprise bills",
  },
  {
    icon: MapPin,
    label: "Serving Hamilton Since 1980",
    desc: "Over 40 years in our community",
  },
];

const testimonials = [
  {
    name: "Sandra Kowalski",
    location: "Ancaster, ON",
    text: "Mike and his crew showed up within the hour when our basement was flooding. Incredibly professional and fair pricing. I won't call anyone else.",
    rating: 5,
  },
  {
    name: "Dave Tremblay",
    location: "Dundas, ON",
    text: "Had a tricky leak behind the wall that two other plumbers couldn't find. Maple Ridge diagnosed it in 20 minutes. Fantastic service.",
    rating: 5,
  },
  {
    name: "Lisa Papadopoulos",
    location: "Stoney Creek, ON",
    text: "Replaced our old water heater quickly and cleaned up perfectly after the job. Friendly, knowledgeable, and great value. Highly recommended!",
    rating: 5,
  },
];

const stars = [1, 2, 3, 4, 5];

export default function Home() {
  useMetaTags({
    title: "Maple Ridge Plumbing | Trusted Local Plumber in Hamilton, ON",
    description:
      "Fast, honest, and reliable plumbing services in Hamilton and surrounding areas since 1980. Available 24/7 for emergencies. Call (905) 555-0123.",
    ogImage:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200",
  });

  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-primary overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, oklch(0.30 0.08 258 / 0.6) 0%, transparent 60%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 text-accent text-sm font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Hamilton, Ontario — Est. 1980
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Trusted Local
              <span className="block text-accent">Plumber in Hamilton</span>
            </h1>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Fast, honest, and reliable plumbing services in Hamilton and
              surrounding areas since 1980. Available around the clock for
              emergencies — because pipe problems don't keep business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+19055550123" data-ocid="hero.call_now.button">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 text-lg font-bold text-white gap-2 pulse-orange"
                  style={{ backgroundColor: "oklch(0.72 0.22 55)" }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now — (905) 555-0123
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                data-ocid="hero.quote.button"
                className="w-full sm:w-auto h-14 text-lg font-bold border-white/40 text-white hover:bg-white/10 hover:text-white bg-transparent gap-2"
              >
                Get a Free Quote
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-white"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
      </section>

      {/* Trust icons */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-secondary border border-border hover:border-accent/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <item.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(0.40 0.17 40)" }}
                  />
                </div>
                <h3 className="font-bold text-sm text-foreground leading-tight mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            Hamilton's Most Trusted Plumbing Experts
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Since 1980, Maple Ridge Plumbing has been the first call for
            homeowners across Hamilton, Ancaster, Dundas, and Stoney Creek.
            Owner Mike Callahan built this company on three simple principles:
            show up on time, fix it right the first time, and never overcharge.
            Four decades later, most of our business comes from repeat customers
            and neighbours referring neighbours. We're proud to be the plumber
            Hamilton families trust.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/services">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                View Our Services
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="font-semibold">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              Real reviews from real Hamilton homeowners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="border-border shadow-card hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {stars.slice(0, t.rating).map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section ref={contactRef} className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">
              Get a Free Quote
            </h2>
            <p className="text-muted-foreground">
              Fill in your details and we'll get back to you promptly.
            </p>
          </div>
          <div className="bg-white border border-border rounded-2xl p-6 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
