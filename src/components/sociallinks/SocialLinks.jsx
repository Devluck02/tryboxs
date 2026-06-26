import Image from "next/image";
import Link from "next/link";

import whatsapp from "@/assets/whatsapp.svg";
import facebook from "@/assets/facebook.png";
import x from "@/assets/twitter.png";
import linkedin from "@/assets/linkedin.png";

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/your-number", icon: whatsapp },
  { name: "Facebook", href: "https://facebook.com/your-page", icon: facebook },
  { name: "X", href: "https://x.com/your-handle", icon: x },
  { name: "LinkedIn", href: "https://linkedin.com/company/your-company", icon: linkedin },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#3E80DD]/25"
        >
          <Image
            src={link.icon}
            alt={link.name}
            width={20}
            height={20}
            className="object-contain"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
