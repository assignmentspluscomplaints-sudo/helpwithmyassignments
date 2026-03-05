"use client";

export default function SocialIcon({ icon }: { icon: string }) {
  return (
    <a
      href="#"
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "10px",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.9rem",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--lime)";
        (e.currentTarget as HTMLElement).style.background =
          "rgba(180,255,80,0.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.background = "none";
      }}
    >
      {icon}
    </a>
  );
}
