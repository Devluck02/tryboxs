import Link from "next/link";
import Logo from "../logo/Logo";
import SocialLinks from "../sociallinks/SocialLinks";
import { Mail, Phone, MapPin, Headset, ChevronRight } from "lucide-react";
import { FOOTER_COMPANY_LINKS } from "@/constants/footer";
import Newsletter from "../newsletter/Newsletter";

const Footer = () => {
  return (
    <footer className="bg-[#191F2E]">
      <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Newsletter */}
        <div className="border-b border-white/10 py-12">
          <Newsletter />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

          {/* About */}
          <div className="flex flex-col gap-5">
            <Logo textColor="text-white" />
            <p className="text-sm leading-7 text-white/55">
              TryBoxs helps you discover the best deals, discounts, and savings
              from top brands — all in one place.
            </p>
            <SocialLinks />
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-base font-bold text-white">
              <span className="h-4 w-1 rounded-full bg-[#3E80DD]" />
              Company
            </h3>
            <ul className="flex flex-col gap-3.5">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#3E80DD] opacity-0 transition-all group-hover:opacity-100"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-base font-bold text-white">
              <span className="h-4 w-1 rounded-full bg-[#3E80DD]" />
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Mail size={15} className="text-[#3E80DD]" />
                </span>
                <span className="break-all text-sm text-white/55">contact@tryboxs.in</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Phone size={15} className="text-[#3E80DD]" />
                </span>
                <span className="text-sm text-white/55">+91-7976645391</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <MapPin size={15} className="text-[#3E80DD]" />
                </span>
                <span className="text-sm leading-6 text-white/55">
                  TryBoxs, 123 Business Street,<br />New Delhi, India
                </span>
              </li>
              <li className="mt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#3E80DD] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <Headset size={16} />
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} TryBoxs. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-white/40 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-xs text-white/40 transition-colors hover:text-white">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="text-xs text-white/40 transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
