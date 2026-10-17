"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import aslpcMark from "../../../public/aslpc-mark.png";

const WHATSAPP_GREEN = "#25D366";
const GREETING_SEEN_KEY = "aslpc-whatsapp-greeted";
const TYPING_AT_MS = 4000;
const MESSAGE_AT_MS = 5400;
const HIDE_AT_MS = 14000;

const href = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(SITE.whatsapp.greeting)}`;

type BubbleState = "hidden" | "typing" | "message";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function hasSeenGreeting() {
  try {
    return window.sessionStorage.getItem(GREETING_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markGreetingSeen() {
  try {
    window.sessionStorage.setItem(GREETING_SEEN_KEY, "1");
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the greeting just shows again.
  }
}

/**
 * Floating WhatsApp contact button, pinned bottom-right on every page. It pops in shortly
 * after load, pulses softly and wiggles now and then; once per browser session a small chat
 * bubble "types" a greeting before revealing it. All motion is disabled under reduced-motion.
 */
export function WhatsAppButton() {
  const [bubble, setBubble] = useState<BubbleState>("hidden");

  useEffect(() => {
    if (hasSeenGreeting()) return;
    const timers = [
      setTimeout(() => setBubble("typing"), TYPING_AT_MS),
      setTimeout(() => setBubble("message"), MESSAGE_AT_MS),
      setTimeout(() => {
        setBubble("hidden");
        markGreetingSeen();
      }, HIDE_AT_MS),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  function dismissBubble() {
    setBubble("hidden");
    markGreetingSeen();
  }

  return (
    <div
      className="animate-wa-pop fixed right-4 z-40 flex items-end gap-3 print:hidden sm:right-6"
      style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom) + 0.75rem))", animationDelay: "1s" }}
    >
      {bubble !== "hidden" ? (
        <div
          role="status"
          className="animate-wa-bubble-in relative mb-2 w-60 rounded-2xl rounded-br-sm border border-line bg-surface p-3 pr-8 text-ink shadow-[0_18px_40px_-16px_rgba(23,37,50,0.45)] sm:w-64"
        >
          <button
            type="button"
            onClick={dismissBubble}
            aria-label="Dismiss message"
            className="absolute top-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-paper hover:text-ink"
          >
            <svg aria-hidden viewBox="0 0 12 12" className="h-2.5 w-2.5">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-paper">
              <Image src={aslpcMark} alt="" width={18} height={18} className="h-4.5 w-4.5 object-contain" />
              <span
                className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface"
                style={{ backgroundColor: WHATSAPP_GREEN }}
              />
            </span>
            <p className="text-xs font-semibold text-ink">{SITE.shortName} Team</p>
          </div>
          {bubble === "typing" ? (
            <p className="mt-2 flex h-5 items-center gap-1 pl-1" aria-label="Typing">
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="animate-wa-dot h-1.5 w-1.5 rounded-full bg-muted"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </p>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={markGreetingSeen}
              className="mt-2 block text-sm leading-snug text-ink/85 hover:text-ink"
            >
              Hello 👋 Have a question about our work? Chat with us on WhatsApp.
            </a>
          )}
        </div>
      ) : null}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={markGreetingSeen}
        aria-label={`Chat with ${SITE.shortName} on WhatsApp (${SITE.whatsapp.display}), opens in a new tab`}
        title={`Chat on WhatsApp · ${SITE.whatsapp.display}`}
        className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.6)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_36px_-8px_rgba(37,211,102,0.75)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink active:scale-95 motion-reduce:transition-none sm:h-16 sm:w-16"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        <span
          aria-hidden
          className="animate-ping-soft absolute inset-0 rounded-full"
          style={{ backgroundColor: WHATSAPP_GREEN, animationDelay: "1.6s" }}
        />
        <span
          aria-hidden
          className="animate-ping-soft absolute inset-0 rounded-full"
          style={{ backgroundColor: WHATSAPP_GREEN, animationDelay: "2.7s" }}
        />
        <span className="animate-wa-wiggle relative flex">
          <WhatsAppGlyph className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[-8deg] sm:h-8 sm:w-8" />
        </span>
      </a>
    </div>
  );
}
