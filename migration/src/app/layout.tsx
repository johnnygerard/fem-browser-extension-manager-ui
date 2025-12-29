import { Header } from "@/component/header";
import { Noscript } from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { loadTheme, ThemeProvider } from "next-theme-provider";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const APP_NAME = "Extensions";
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://fem-browser-extension-manager-ui-jgerard.vercel.app",
  ),
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/asset/image/favicon.png",
    },
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const theme = await loadTheme();

  return (
    <html
      data-theme={theme}
      className={cn(notoSans.variable, "font-sans antialiased")}
      lang="en-US"
    >
      <body
        className={cn(
          "flex min-h-screen min-w-min flex-col items-center",
          "px-4 pt-5 pb-16 tb:px-8 tb:pt-6 dt:pt-10",
          "bg-linear-to-b from-[#EBF2FC] to-[#EEFBF9]",
          "dark:from-[#04091B] dark:to-[#091540]",
        )}
      >
        <ThemeProvider initialTheme={theme}>
          {/* This wrapper div allows the header to match the width of the main content */}
          <div>
            <Header />
            <main className="mt-10 dt:mt-16">{children}</main>
          </div>
        </ThemeProvider>
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
