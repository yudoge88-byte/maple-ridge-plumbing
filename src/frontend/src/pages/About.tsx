import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Heart, Star, Zap } from "lucide-react";
import { useMetaTags } from "../hooks/useMetaTags";

const values = [
  {
    icon: Heart,
    title: "Honest Pricing",
    desc: "We give you a clear, upfront quote before any work begins. No surprises on your invoice — ever. What we quote is what you pay.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "We know a plumbing emergency can’t wait. Our team is on call 24/7 and typically on-site within 60 minutes anywhere in Hamilton.",
  },
  {
    icon: Star,
    title: "Quality Work",
    desc: "Every job is done to code and backed by our workmanship guarantee. We use premium parts and stand behind every repair and installation.",
  },
];

export default function About() {
  useMetaTags({
    title: "About Us | Maple Ridge Plumbing Hamilton",
    description:
      "Family-owned since 1980, Maple Ridge Plumbing is built on honest pricing, fast response, and quality workmanship. Meet owner Mike Callahan.",
  });

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Maple Ridge Plumbing
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Family-owned and Hamilton-proud for over 40 years.
          </p>
        </div>
      </section>

      {/* Owner story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="w-40 h-40 rounded-2xl overflow-hidden bg-secondary border-4 border-border shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&auto=format"
                  alt="Mike Callahan, owner of Maple Ridge Plumbing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-4">
                Meet Mike Callahan
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started Maple Ridge Plumbing in 1980 with one van, a box of
                  tools, and a simple promise: treat every customer like a
                  neighbour. Growing up in Hamilton, I watched tradespeople
                  build this city with their hands. I wanted to be part of that
                  tradition.
                </p>
                <p>
                  Over the past 40+ years, we’ve grown into a trusted team of
                  licensed plumbers — but the values haven’t changed. We still
                  answer our own phones, still show up on time, and still take
                  pride in doing the job right the first time. My family lives
                  here. Your pipes are our pipes.
                </p>
                <p>
                  Whether you’ve got a dripping tap or a flooded basement at 2
                  AM, Maple Ridge Plumbing is the call you make. We’ll be there.
                </p>
              </div>
              <p className="mt-4 font-bold text-foreground">
                — Mike Callahan, Owner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-foreground text-center mb-8">
            Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-border shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground mb-6">
            Get in touch today for a free estimate or emergency assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+19055550123">
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold bg-accent hover:bg-accent/90 text-white gap-2"
              >
                Call (905) 555-0123
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-bold"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
