import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import { TitleProvider } from "@/app/components/TitleProvider";
import Header from "@/app/components/Header";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Testovací úkol",
  description: "Moje objednávky, Faktury a Nastavení účtu",
};

// RootLayout remains a Server Component
export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <TitleProvider>
        <body className="min-h-screen bg-gray-100 mx-4 sm:mx-16 mb-32">
          <Header /> {/* Render the Client Component */}
          <div className="flex items-start">
            <Sidebar className="w-76" />
            <main className="flex-1 px-8">{children}</main>
          </div>
        </body>
      </TitleProvider>
    </html>
  );
}
