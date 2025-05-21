import "./globals.css";
import TopNavigationBar from "./Components/TopNavigationBar";
import Footer from "./Components/Footer";
import JoinSkygoalToday from "./Components/JoinSkygoalToday";
import MobileHeader from "./Components/MobileHeader";
import { Inter } from "next/font/google";
import InstantCallBackWidget from "@/shared/InstantCallBackWidget";

const poppins = Inter({
  subsets: ['latin'],
  weight: ['400'],
  // variable: '--font-poppins',          // Optional, for Tailwind
})

export const metadata = {
  title: "Best Tech and IT service provider",
  description: "Best Tech and IT service provider",
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <div className="max-lg:hidden">
          <TopNavigationBar />
        </div>
        <div className="w-full lg:hidden">
          <MobileHeader />
        </div>
        <main className="w-full pt-[10rem] min-h-screen overflow-y-auto overflow-x-hidden">{children}</main>
        <div className="">
          <InstantCallBackWidget />
        </div>
        <JoinSkygoalToday />
        <Footer />
      </body>
    </html>
  );
}
