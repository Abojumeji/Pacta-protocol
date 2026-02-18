import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pacta Protocol | Universal On-Chain Agreement & Settlement Infrastructure",
  description:
    "Pacta is the trustless agreement and settlement layer for Sui. Condition-based settlement, asset-agnostic escrow, and fully composable infrastructure for DeFi.",
  keywords: [
    "Pacta",
    "Sui",
    "DeFi",
    "escrow",
    "settlement",
    "smart contract",
    "agreement",
    "trustless",
    "on-chain",
  ],
  openGraph: {
    title: "Pacta Protocol | Universal On-Chain Agreement Infrastructure",
    description:
      "Trustless condition-based settlement infrastructure for Sui. Asset-agnostic. Fully composable.",
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
