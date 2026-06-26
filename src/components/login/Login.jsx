import Link from "next/link";
import { CircleUserRound } from "lucide-react";

const Login = ({ mobile = false }) => {
  if (mobile) {
    return (
      <Link
        href="/login"
        className="inline-flex items-center gap-2 font-semibold"
      >
        <CircleUserRound size={22} />
        Login / Sign Up
      </Link>
    );
  }

  return (
    <div className="hidden md:block">
      <Link
        href="/login"
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
      >
        <CircleUserRound size={20} />
        Login / Sign Up
      </Link>
    </div>
  );
};

export default Login;