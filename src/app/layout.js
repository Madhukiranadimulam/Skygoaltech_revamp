import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavigationBar from "./Components/TopNavigationBar";
import Footer from "./Components/Footer";
import JoinSkygoalToday from "./Components/JoinSkygoalToday";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <TopNavigationBar />
        <main className="w-full px-[2rem] pt-[10rem] min-h-screen overflow-y-auto">{children}</main>
        <JoinSkygoalToday />
        <Footer />
      </body>
    </html>
  );
}
