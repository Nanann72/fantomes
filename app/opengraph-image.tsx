import { ImageResponse } from "next/og";

export const alt = "Fantômes : débusque les abonnements que tu paies sans t'en servir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f2e8",
          color: "#14213d",
          padding: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#e4572e",
          }}
        >
          FANTÔMES
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          Débusque les abonnements que tu paies sans t&apos;en servir.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 36,
            borderTop: "3px solid #14213d",
            paddingTop: 28,
          }}
        >
          La lettre de résiliation est déjà écrite.
        </div>
      </div>
    ),
    size
  );
}
