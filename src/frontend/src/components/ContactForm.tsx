import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

export default function ContactForm() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      await actor.submitContactForm(
        form.name,
        form.phone,
        form.email,
        form.message,
      );
      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please try again or call us directly.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        data-ocid="contact_form.success_state"
        className="rounded-xl bg-green-50 border border-green-200 p-8 flex flex-col items-center text-center gap-3"
      >
        <CheckCircle2 className="w-12 h-12 text-green-600" />
        <h3 className="text-xl font-bold text-green-800">Message Received!</h3>
        <p className="text-green-700">
          Thank you for reaching out. Mike or one of our team members will get
          back to you within a few hours. For urgent issues, please call us
          directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-green-600 underline hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="cf-name" className="font-semibold text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="cf-name"
            data-ocid="contact_form.name.input"
            placeholder="Jane Smith"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="h-11 text-base"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="cf-phone" className="font-semibold text-foreground">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="cf-phone"
            data-ocid="contact_form.phone.input"
            type="tel"
            placeholder="(905) 555-0000"
            required
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="h-11 text-base"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="cf-email" className="font-semibold text-foreground">
          Email Address
        </Label>
        <Input
          id="cf-email"
          data-ocid="contact_form.email.input"
          type="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className="h-11 text-base"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="cf-message" className="font-semibold text-foreground">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="cf-message"
          data-ocid="contact_form.message.textarea"
          placeholder="Describe your plumbing issue"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="text-base resize-none"
        />
      </div>

      {status === "error" && (
        <div
          data-ocid="contact_form.error_state"
          className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        data-ocid="contact_form.submit_button"
        disabled={status === "loading" || !actor}
        className="w-full h-12 text-base font-bold bg-accent hover:bg-accent/90 text-white"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Get a Free Quote"
        )}
      </Button>
    </form>
  );
}
