import { Link } from "@tanstack/react-router";
import { Droplets, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">Maple Ridge Plumbing</span>
            </div>
            <div className="flex items-start gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Hamilton, Ontario, Canada</span>
            </div>
            <a
              href="tel:+19055550123"
              className="flex items-center gap-2 text-accent font-bold mt-2 hover:text-accent/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (905) 555-0123
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/60">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/services" as const, label: "Services" },
                { to: "/about" as const, label: "About Us" },
                { to: "/gallery" as const, label: "Our Work" },
                { to: "/contact" as const, label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/60">
              Business Hours
            </h3>
            <ul className="space-y-1 text-sm text-white/70">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span>7:00 AM – 7:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>8:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-accent font-semibold">
                  Emergency Only
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>
            © {year} Maple Ridge Plumbing, Hamilton, ON · (905) 555-0123
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
