import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { TEMPLATE_METADATA } from "@/lib/constants";
import Footer from "@/components/ui/private/footer";
import Navbar from "@/components/ui/private/navbar";
import OblivionModal from "@/components/ui/private/home/OblivionModal";
// import PrelineScript from "@/components/plugins/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D'Code NSUT - Official Coding Society",
  description: "D'Code : The Competitive Programming Society of NSUT is the official coding society of Netaji Subhas University of Technology. Join us for hackathons, workshops, and technical events that shape the future of technology.",
  openGraph: {
    title: "D'Code NSUT - Official Coding Society",
    description:
      "D'Code NSUT is the official coding society of Netaji Subhas University of Technology. Join us for hackathons, workshops, and technical events that shape the future of technology. Experience innovation with events like Oblivion, our flagship technical summit.",
    type: "website",
    url: "https://www.dcodensut.tech/",
    siteName: "D'Code NSUT",
    images: [
      {
        url: "https://www.dcodensut.tech/og-banner.png",
        width: 1200,
        height: 630,
        alt: "D'Code NSUT - Official Coding Society",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D'Code NSUT - Official Coding Society",
    description:
      "D'Code NSUT is the official coding society of Netaji Subhas University of Technology. Join us for hackathons, workshops, and technical events that shape the future of technology.",
    images: ["https://www.dcodensut.tech/og-banner.png"],
  },
  keywords: [
    "D'Code",
    "NSUT",
    "coding society",
    "hackathon",
    "programming",
    "technology",
    "Oblivion",
    "technical events",
    "workshops",
    "competitive programming",
    "web development",
    "machine learning"
  ],
  authors: [{ name: "D'Code NSUT" }],
  creator: "D'Code NSUT",
  publisher: "D'Code NSUT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <OblivionModal />
      <div className="light">
      <Navbar />
      {children}

      <Footer />
      </div>




      {/* <PrelineScript /> */}



      </body>
     
    </html>
  );
}
