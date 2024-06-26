"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";

const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  gnosis,
  fantom,
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadataWallet = {
  name: "Next Starter Template",
  description: "A Next.js starter template with Web3Modal v3 + Wagmi",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: metadataWallet,
});

createWeb3Modal({ wagmiConfig, projectId, chains });

import { WagmiConfig } from "wagmi";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Hulk Cars",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            {children}
            <Footer />
          </ThemeProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
