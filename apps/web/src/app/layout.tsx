import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../index.css";
import "@/types/auth";
import Providers from "@/components/providers";
import Header from "@/components/header";
import SessionDebug from "@/components/session-debug";
import { HeaderProvider } from "@/contexts/header-context";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BrainBoost - Flashcards Inteligentes",
  description:
    "Aprenda mais rápido com flashcards personalizados e inteligentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased font-sans`}>
        <Providers>
          <div className="grid grid-rows-[auto_1fr] h-svh">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
