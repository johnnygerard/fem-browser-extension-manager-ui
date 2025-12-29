import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Noto_Sans } from "next/font/google";
import type { FC, ReactNode } from "react";
import { Header } from "~/components/header";
import "~/styles/globals.css";
import { tw } from "~/utils/tw";

const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const APP_NAME = "Extensions";
const TITLE = APP_NAME;
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://fem-browser-extension-manager-ui-jgerard.vercel.app",
  ),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => (
  <html
    className={notoSans.variable}
    data-scroll-behavior="smooth"
    lang="en-US"
    suppressHydrationWarning
  >
    <body
      className={tw(
        "font-sans",
        "flex min-h-screen min-w-min flex-col items-center",
        "px-4 pt-5 pb-16 tb:px-8 tb:pt-6 dt:pt-10",
        "bg-linear-to-b from-[#EBF2FC] to-[#EEFBF9]",
        "dark:from-[#04091B] dark:to-neutral-900",
      )}
    >
      <ThemeProvider>
        {/* This wrapper div allows the header to match the width of the main content */}
        <div>
          <Header />
          <main className="mt-10 dt:mt-16">{children}</main>
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
