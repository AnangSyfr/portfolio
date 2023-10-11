import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Site || AnangSyfr",
  description: "AnangSyfr's Personal Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-sm`}>
        <div className="w-6/12 mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
