import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Droplets, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/" as const, label: "Home", ocid: "nav.home.link" },
  { to: "/services" as const, label: "Services", ocid: "nav.services.link" },
  { to: "/about" as const, label: "About", ocid: "nav.about.link" },
  { to: "/gallery" as const, label: "Gallery", ocid: "nav.gallery.link" },
  { to: "/contact" as const, label: "Contact", ocid: "nav.contact.link" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "oklch(0.72 0.22 55)" }}
          >
            <Droplets className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-base sm:text-lg leading-tight">
            Maple Ridge
            <span className="block text-xs font-medium text-white/70 leading-none">
              Plumbing
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{
                className:
                  "px-3 py-2 rounded text-sm font-medium text-white bg-white/15",
              }}
              inactiveProps={{
                className:
                  "px-3 py-2 rounded text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+19055550123"
            data-ocid="nav.call_now.button"
            className="ml-3"
          >
            <Button
              size="sm"
              className="font-bold gap-2 pulse-orange text-white"
              style={{
                backgroundColor: "oklch(0.72 0.22 55)",
              }}
            >
              <Phone className="w-4 h-4" />
              (905) 555-0123
            </Button>
          </a>
        </div>

        {/* Mobile: call button + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a href="tel:+19055550123" data-ocid="nav.call_now.button">
            <Button
              size="sm"
              className="font-bold gap-1 text-xs px-3 pulse-orange text-white"
              style={{
                backgroundColor: "oklch(0.72 0.22 55)",
              }}
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </Button>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-white p-2 rounded hover:bg-white/10 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{
                  className:
                    "px-3 py-3 rounded text-sm font-medium text-white bg-white/15 block",
                }}
                inactiveProps={{
                  className:
                    "px-3 py-3 rounded text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors block",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
