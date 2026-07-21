import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1917", // charcoal
          color: "#B45309", // amber-accent
          fontSize: 24,
          fontWeight: 700,
          borderRadius: "8px",
          border: "2px solid #FAF7F2", // warm-cream
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}
