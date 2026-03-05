"use client";

export default function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="faq-item"
      style={{ listStyle: "none" }}
      onToggle={(e) => {
        const el = e.currentTarget as HTMLDetailsElement;
        if (el.open) el.classList.add("open");
        else el.classList.remove("open");
      }}
    >
      <summary
        className="faq-question"
        style={{ listStyle: "none", cursor: "pointer" }}
      >
        <span>{q}</span>
        <span className="faq-icon">+</span>
      </summary>
      <div className="faq-answer">
        <div className="faq-answer-inner">{a}</div>
      </div>
    </details>
  );
}
