import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Droplets,
  Flame,
  Home,
  Phone,
  Search,
  Settings,
  Wrench,
  Zap,
} from "lucide-react";
import { useMetaTags } from "../hooks/useMetaTags";

const services = [
  {
    icon: Droplets,
    title: "Drain Cleaning",
    desc: "Slow or blocked drains cleared fast with professional-grade equipment. We handle kitchen, bathroom, and floor drains of all types.",
    accent: false,
  },
  {
    icon: Wrench,
    title: "Pipe Repair & Replacement",
    desc: "From minor leaks to full re-piping, we diagnose and fix pipe problems correctly the first time using durable materials built to last.",
    accent: false,
  },
  {
    icon: Flame,
    title: "Water Heater Installation & Repair",
    desc: "Tank and tankless water heater installs, repairs, and maintenance. We carry top brands and offer same-day service in Hamilton.",
    accent: false,
  },
  {
    icon: Settings,
    title: "Toilet & Faucet Repair",
    desc: "Running toilets, leaking faucets, and dripping taps waste water and money. We fix or replace them quickly and affordably.",
    accent: false,
  },
  {
    icon: Search,
    title: "Leak Detection",
    desc: "Using advanced detection tools, we find hidden leaks behind walls and under floors before they cause serious structural damage.",
    accent: false,
  },
  {
    icon: Home,
    title: "Bathroom & Kitchen Plumbing",
    desc: "Full plumbing for renovations and new builds — rough-ins, fixture installation, and finishing work for kitchens and bathrooms.",
    accent: false,
  },
  {
    icon: Zap,
    title: "Emergency Plumbing",
    desc: "Burst pipes, sewage backups, no hot water — we respond 24/7 across Hamilton. Call us any hour and we'll dispatch immediately.",
    accent: true,
  },
];

export default function Services() {
  useMetaTags({
    title: "Plumbing Services | Maple Ridge Plumbing Hamilton",
    description:
      "Drain cleaning, pipe repair, water heater installation, leak detection, emergency plumbing, and more. Serving Hamilton, ON since 1980.",
  });

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Plumbing Services
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Complete plumbing solutions for Hamilton homeowners — residential,
            emergency, and renovation work.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className={`rounded-2xl p-6 border transition-shadow hover:shadow-md ${
                  svc.accent
                    ? "bg-accent/5 border-accent/40 ring-1 ring-accent/30"
                    : "bg-white border-border"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    svc.accent ? "bg-accent" : "bg-accent/10"
                  }`}
                >
                  <svc.icon
                    className="w-6 h-6"
                    style={{
                      color: svc.accent ? "white" : "oklch(0.40 0.17 40)",
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {svc.title}
                  {svc.accent && (
                    <span className="ml-2 inline-block text-xs font-bold uppercase bg-accent text-white px-2 py-0.5 rounded-full">
                      24/7
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-14 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Need a plumber today?
          </h2>
          <p className="text-white/75 mb-6">
            Call us now for fast, reliable service across Hamilton and
            surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+19055550123">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 font-bold bg-accent hover:bg-accent/90 text-white gap-2 pulse-orange"
              >
                <Phone className="w-5 h-5" />
                Call Now — (905) 555-0123
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 font-bold border-white/40 text-white hover:bg-white/10 hover:text-white bg-transparent"
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
