import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Magic Home — Professional Home Cleaning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #032C9B 0%, #021A5C 55%, #0163DA 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            color: "#76BC21",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Magic Home
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Professional Cleaning. A Home That Feels Like Magic.
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "rgba(255,255,255,0.75)" }}>
          Austin & nearby · Insured · Eco-friendly · Free quotes
        </div>
      </div>
    ),
    { ...size }
  );
}
