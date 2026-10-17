"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass = "border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-ink";
const labelClass = "text-xs font-semibold tracking-wide text-ink uppercase";

export function ContactForm({ defaultMessage = "" }: { defaultMessage?: string }) {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col gap-3 border border-line bg-surface p-8">
        <p className="font-serif text-2xl font-semibold text-ink">Message sent</p>
        <p className="text-sm text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClass}>
          Full Name
        </label>
        <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          defaultValue={defaultMessage}
          className={inputClass}
        />
      </div>
      {/* Honeypot field, hidden from people and screen readers */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 self-start bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
