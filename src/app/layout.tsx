import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hola",
  description: "Botame tu gaaa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ew">
      <body>{children}</body>
    </html>
  );
}
