import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Poppins, Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "Next.js + TypeScript + AppRouter Demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1366px] min-h-screen mx-auto px-[60px] flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
