import type { Metadata } from "next";
import { Saira_Stencil_One, Saira} from "next/font/google";
import "./globals.css";

import { ReactQueryProvider } from "@/context/ClientProvider";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300","400","500", "600"]
});


const sairaStencilOne = Saira_Stencil_One({
  variable: "--font-saira-stencil-one",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "E-Commerce Capputeeno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sairaStencilOne.variable} ${saira.variable} antialiased`}
      >
        <ReactQueryProvider>
        {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
