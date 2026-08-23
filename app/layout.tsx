import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const heroImage = `${basePath}/portfolio-hero.png`;
const favicon = `${basePath}/favicon.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rhustom C. De Guzman | Full Stack Web App Developer",
  description:
    "Full stack developer building custom web applications, business systems, API integrations, and database-backed workflows.",
  openGraph: {
    title: "Rhustom C. De Guzman | Full Stack Web App Developer",
    description:
      "Custom web apps, business automation, API integrations, and full stack systems for real operations.",
    images: [heroImage],
  },
  icons: {
    icon: favicon,
    shortcut: favicon,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070d0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
