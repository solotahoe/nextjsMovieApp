import { Inter } from "next/font/google";
import "./globals.css";
import {Montserrat} from "@next/font/google";

const montserrat = Montserrat({
  weight:["500", '700'],
  subsets:['latin'],
  varible:'--add-to-css-tailwind'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "solo app",
  description: "next app dev ed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32 my-12`}>
      
        {children}</body>
     
    </html>
  );
}
