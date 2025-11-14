import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Terry | Sr. Director Digital Production Practices",
  description: "Quality Leader with 20+ years in tech, specializing in modern development, testing, team leadership, and AI/ML in software quality.",
  openGraph: {
    title: "Eric Terry | Quality Leader",
    description: "Sr. Director Digital Production Practices | Applitools Ambassador | AI Nomad",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}