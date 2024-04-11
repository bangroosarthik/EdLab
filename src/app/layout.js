import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/layout/Header";
import { AppProvider } from "@/Components/layout/AppContext";
import Link from "next/link"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edulab",
  description: "Your one stop for accessing Lab Manuals and resources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-black" >
      <head>
        <link rel="icon" type="image/x-icon" href="/pictlogo.png" />
      </head>
      <body className={inter.className}>
        <main className=" mx-auto  p-4 " >
          <AppProvider>
              <Header />
              {children}
              <footer className="border-t p-8 text-center text-white mt-8">
              &copy; 2024 All rights reserved <a href="/" className="text-blue-600">EDULAB</a>
              <p>Developed By <Link href="/#Contact" className="text-blue-600" >EDULAB TEAM</Link></p>
              </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
