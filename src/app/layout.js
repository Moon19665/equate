import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "equate",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <header style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem" }}>
          <Image src="/logo.png" alt="Equate Logo" width={40} height={40} />
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>equate</span>
        </header>
        {children}
      </body>
    </html>
  );
}
