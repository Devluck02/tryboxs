import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Logo = ({ textColor = "text-slate-900" }) => {
  return (
    <Link href="/" className="inline-flex items-center gap-2 shrink-0">
      <Image
        src={logo}
        alt="TryBox Logo"
        width={40}
        height={40}
        priority
      />

      <span
        className={`text-xl sm:text-2xl lg:text-3xl font-bold ${textColor}`}
      >
        TryBoxs
      </span>
    </Link>
  );
};

export default Logo;