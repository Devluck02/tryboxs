import { Suspense } from "react";
import RedirectClient from "./RedirectClient";

export const metadata = {
  title: "Redirecting... — TryBoxs",
  description: "You are being redirected to the store. Earn cashback on your purchase via TryBoxs.",
};

const RedirectPage = () => (
  <Suspense
    fallback={
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#3E80DD]" />
      </div>
    }
  >
    <RedirectClient />
  </Suspense>
);

export default RedirectPage;
