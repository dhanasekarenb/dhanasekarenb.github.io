import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dhanasekaren Balasubramanian | Neural Portfolio",
  description:
    "Deep Learning & Data Science portfolio — designed as a 5-layer Convolutional Neural Network. Explore skills, experience, and projects through the lens of deep learning.",
  keywords: [
    "Deep Learning",
    "Data Science",
    "Machine Learning",
    "Portfolio",
    "Dhanasekaren Balasubramanian",
    "NeRF",
    "Mamba Transformer",
  ],
  openGraph: {
    title: "Dhanasekaren Balasubramanian | Neural Portfolio",
    description:
      "Deep Learning & Data Science portfolio — a CNN-inspired interactive experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${jetbrains.variable} antialiased`}>
        <div className="neural-bg-overlay" />
        {children}
      </body>
    </html>
  );
}
