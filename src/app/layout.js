import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["300","400","500","600","700","800","900"]
});

export const metadata = {
  title: "Innovetix Global Pvt. Ltd.",
  description: "Innovetix - Powered by Team Careertronic ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased overflow-x-hidden`}
      >
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
