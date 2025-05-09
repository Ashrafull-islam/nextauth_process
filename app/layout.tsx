'use client'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Script from "next/script";
import BootstrapComponet from "./Components/BootstrapComponent";
import Footer from "./Components/Footer/Footer";
import NextAuthSessionProvider from "./provider/NextAuthSessionProvider";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans+Bengali:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Signika:wght@300..700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body>
       <NextAuthSessionProvider>
        {!pathname.startsWith('/admin') && (
        <Navbar></Navbar>
      )}
        {children}
         {!pathname.startsWith('/admin') && (
        <Footer></Footer>
      )}
        <BootstrapComponet></BootstrapComponet>
       </NextAuthSessionProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-zP/2SmN9D+3B4Fb8U1OhyyxchcE0ksWSlK/d5D8U+e1c1qj7UL66AYkgqulWcvGH"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-rbsA2VBKQzH4pv8pKpU0Uy+K4n9gqGAQ+c5Nq6pGDZlYpXnEbHgqJk5gf6mLr9Kk"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script type="module">
          import Swiper from
          'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs' const
          swiper = new Swiper(...)
        </Script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </body>
    </html>
  );
}
