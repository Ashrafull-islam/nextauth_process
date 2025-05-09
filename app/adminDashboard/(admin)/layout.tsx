
import "@/public/app-assets/css/pages/dashboard-ecommerce.css";
import "./admin.css"
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Header></Header>
        <SideNav></SideNav>
        {children}
        {/* BEGIN: Vendor JS */}
        <Script
          src="../../../app-assets/vendors/js/vendors.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="../../../app-assets/vendors/js/charts/apexcharts.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="../../../app-assets/vendors/js/extensions/toastr.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="../../../app-assets/vendors/js/extensions/moment.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="../../../app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="../../../app-assets/vendors/js/tables/datatable/dataTables.bootstrap5.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="../../../app-assets/vendors/js/core/app-menu.js"
          strategy="afterInteractive"
        />
        <Script src="../../../app-assets/js/core/app.js" strategy="afterInteractive" />
        <Script
          src="../../../app-assets/js/scripts/pages/dashboard-analytics.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
