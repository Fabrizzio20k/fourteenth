import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Una pregunta especial 💕",
  description: "Para mi amor en este 14 de febrero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-gochihand">{children}</body>
    </html>
  );
}
