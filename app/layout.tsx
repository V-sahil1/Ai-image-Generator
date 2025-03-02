import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { Toaster } from "@/components/ui/sonner";


const font =Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets : ['latin']
})

export const metadata: Metadata = {
  title: "Ai image Generation",
  description: "Ai image Generation using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-blue-900  antialiased`}
      >
        <ResponsiveNav/>
        {children}
   <Toaster/>
      </body>
    </html>
  );
}
