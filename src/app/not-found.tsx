import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";
import { tw } from "~/utils/tw";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound: FC = () => (
  <div className="flex flex-col items-center text-center">
    <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-100">
      404 Not Found
    </h1>
    <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
      Sorry, the page you are looking for does not exist.
    </p>
    <Link
      href="/"
      className={tw(
        "rounded px-6 py-3 font-medium text-white",
        "bg-blue-600 transition-colors hover:bg-blue-700",
      )}
    >
      Back to Home
    </Link>
  </div>
);

export default NotFound;
