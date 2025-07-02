import "./globals.css";
import TopNavigationBar from "./Components/TopNavigationBar";
import Footer from "./Components/Footer";
import JoinSkygoalToday from "./Components/JoinSkygoalToday";
import MobileHeader from "./Components/MobileHeader";
import { Manrope } from "next/font/google";
import InstantCallBackWidget from '../shared/InstantCallBackWidget';

const poppins = Manrope({
  subsets: ['latin'],
  weight: ['400'],
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
        <main className="w-full min-h-screen overflow-y-auto overflow-x-hidden">{children}</main>
        <InstantCallBackWidget />
        <JoinSkygoalToday />
        <Footer />
      </body>
    </html>
  );
}
