import type { Metadata } from "next";
import SessionProvider from "providers/SessionProvider";
import localFont from "next/font/local";
import { Toaster } from 'sonner';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Banter",
  description: "Send chats fast and foremost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <SessionProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} bg-[#f2f2f2]`}>
          {children}
          <Toaster position="bottom-right" closeButton duration={5000} />
        </body>
      </SessionProvider>
    </html>
  );
}
