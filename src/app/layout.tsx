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
  ...TEMPLATE_METADATA,
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
