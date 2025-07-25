import "./globals.css";
import TopNavigationBar from "./Components/TopNavigationBar";
import Footer from "./Components/Footer";
import JoinSkygoalToday from "./Components/JoinSkygoalToday";
import MobileHeader from "./Components/MobileHeader";
import { Manrope } from "next/font/google";
import InstantCallBackWidget from '../shared/InstantCallBackWidget';
import WhatsappWidget from "./Components/WhatsappWidget";
import Script from "next/script"; // ✅ Add this

const poppins = Manrope({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = {
  title: "Best Tech and IT service provider",
  description: "Best Tech and IT service provider",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Best Tech and IT service provider",
    description: "Get top-notch technology and IT services tailored for your business.",
    siteName: "SGIT",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - external script via next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17213283517"
          strategy="afterInteractive"
        />

        {/* Inline script using next/script */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17213283517');
            `,
          }}
        />

        {/* <!-- Event snippet for Submit lead form conversion page --> */}
        <Script
          id="gtag-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      gtag('event', 'conversion', {'send_to': 'AW-17213283517/9uCdCOSIvvcaEL25949A'});`,
          }}
        />

      </head>
      <body className={poppins.className}>
        <div className="max-lg:hidden">
          <TopNavigationBar />
        </div>
        <div className="w-full lg:hidden">
          <MobileHeader />
        </div>
        <main className="w-full min-h-screen overflow-y-auto overflow-x-hidden">{children}</main>
        <div className="">
          <WhatsappWidget />
          <InstantCallBackWidget />
        </div>
        <JoinSkygoalToday />
        <Footer />
      </body>
    </html>
  );
}
