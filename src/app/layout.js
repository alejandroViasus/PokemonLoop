// app/layout.js
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { Inter } from "next/font/google";
import "../../css/index.css";
import Providers from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "pokemon Loop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <Providers>
        <body>{children}</body>
        </Providers>
      </UserProvider>
    </html>
  );
}
