import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavigationBar from "./Components/TopNavigationBar";
import Footer from "./Components/Footer";
import JoinSkygoalToday from "./Components/JoinSkygoalToday";
import MobileHeader from "./Components/MobileHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-lg:hidden">
          <TopNavigationBar />
        </div>
        <div className="w-full lg:hidden">
          <MobileHeader />
        </div>
        <main className="w-full pt-[10rem] min-h-screen overflow-y-auto overflow-x-hidden">{children}</main>
        <JoinSkygoalToday />
        <Footer />
      </body>
    </html>
  );
}
