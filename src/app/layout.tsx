import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WordNext Blog",
  description: "Crea tu página web o blog con WordNext, una página donde va a poder hacer su página web o blog sin tener que programar usted mismo ni preocuparse por la memoria de su página web",
  openGraph:{
    title: "WordNext Blog - Desarrollo tu página web fácil y rápido",
    description: "WordNext te permite hacer que personas programen tu páginas web y blogs sin código. Fácil, rápido y sin complicaciones.",
    url: 'https://word-next-seven.vercel.app/',
    siteName: "WordNext Blog",
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/svg/logo.svg" type="image/x-icon" />
        <meta name="google-site-verification" content="mCe3iHd8LHtdqRk7JCFQAk2boQ17dVLVAWNwk64m2f8" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-01F58R66Z6"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-01F58R66Z6', {
        page_path: window.location.pathname,
      });
    `}}
        />
        <meta name="google" content="notranslate"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </body>
    </html>
  );
}
