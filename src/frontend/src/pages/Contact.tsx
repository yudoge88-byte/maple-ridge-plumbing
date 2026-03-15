import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { useMetaTags } from "../hooks/useMetaTags";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Emergency Only" },
];

export default function Contact() {
  useMetaTags({
    title: "Contact Us | Maple Ridge Plumbing Hamilton",
    description:
      "Call Maple Ridge Plumbing at (905) 555-0123 or fill in our contact form. Serving Hamilton, Ancaster, Dundas, Stoney Creek and surrounding areas.",
  });

  return (
    <>
      {/* Header */}
      <section className="bg-primary py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/75 text-lg">
            We're here to help — day or night.
          </p>
        </div>
      </section>

      {/* Click-to-call CTA */}
      <section className="py-10 bg-accent/5 border-b border-accent/20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wide mb-3">
            For urgent issues, call us directly
          </p>
          <a href="tel:+19055550123" data-ocid="contact.call_now.button">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 text-xl font-extrabold bg-accent hover:bg-accent/90 text-white gap-3 pulse-orange"
            >
              <Phone className="w-6 h-6" />
              (905) 555-0123
            </Button>
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Available 24/7 for emergencies
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info column */}
            <div className="space-y-8">
              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Clock
                      className="w-5 h-5"
                      style={{ color: "oklch(0.40 0.17 40)" }}
                    />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    Business Hours
                  </h2>
                </div>
                <ul className="space-y-2">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="font-medium text-foreground text-sm">
                        {h.day}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          h.day === "Sunday"
                            ? "text-accent"
                            : "text-muted-foreground"
                        }`}
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service area */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: "oklch(0.40 0.17 40)" }}
                    />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    Service Area
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We proudly serve Hamilton and surrounding communities
                  including:
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-2">
                  {[
                    "Hamilton",
                    "Ancaster",
                    "Dundas",
                    "Stoney Creek",
                    "Waterdown",
                    "Binbrook",
                    "Flamborough",
                    "And more nearby",
                  ].map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-1.5 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency phone */}
              <div className="rounded-xl bg-primary p-6 text-white">
                <p className="text-sm text-white/70 uppercase tracking-wide font-semibold mb-2">
                  Emergency? Don't wait.
                </p>
                <a
                  href="tel:+19055550123"
                  className="text-2xl font-extrabold text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-6 h-6" />
                  (905) 555-0123
                </a>
                <p className="text-white/60 text-xs mt-2">
                  We answer 24/7 for plumbing emergencies.
                </p>
              </div>
            </div>

            {/* Form column */}
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
