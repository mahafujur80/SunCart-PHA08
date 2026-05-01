import {Outfit } from "next/font/google";
import "./globals.css";
import 'animate.css';
import NavBar from "../components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export const metadata = {
  title: "SunCart",
  description: "SunCart is an e-commerce platform that offers a wide range of products, including electronics, fashion, home goods, and more. With a user-friendly interface and secure payment options, SunCart provides a seamless shopping experience for customers worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background/70 backdrop-blur-lg">
        <NavBar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
