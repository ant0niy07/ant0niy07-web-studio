import { ImageResponse } from "next/og";
export const alt = "ant0niy07 Web Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        color: "#f8fafc",
        background: "#090b10",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "#38bdf8",
          fontSize: 26,
          letterSpacing: 4,
        }}
      >
        WEB DEVELOPMENT · POLSKA
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 74,
          fontWeight: 800,
          marginTop: 28,
          maxWidth: 950,
        }}
      >
        Strony, które pracują na Twój biznes.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#94a3b8",
          marginTop: 40,
        }}
      >
        ant0niy07 Web Studio
      </div>
    </div>,
    size,
  );
}
