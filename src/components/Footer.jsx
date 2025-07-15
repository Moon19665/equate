"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-[#d6dde3] pt-12 pb-6  text-[14px]">
      <div className="max-w-[1920px] px-3 md:px-12 mx-auto">
        {/* Top: Logo and Columns */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Logo */}
          <div className="mb-8 md:mb-0 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/footer-logo.png"
                alt="Brex Logo"
                className=" w-auto"
                style={{ maxWidth: "120px" }}
              />
            </Link>
          </div>
          {/* Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <div className="font-semibold mb-3 text-white text-[15px]">
                Product
              </div>
              {/* [
                  { label: "Corporate card", href: "/corporate-card" },
                  { label: "Business banking", href: "/business-banking" },
                  { label: "Expense management", href: "/spend-management" },
                  {
                    label: "Accounting automation",
                    href: "/account-automation",
                  },
                  { label: "Bill pay", href: "/bill-pay" },
                  { label: "Travel", href: "/travel" },
                  { label: "Startups", href: "/startups" },
                  { label: "Product release", href: "/spring-2025" },
                ] */}
              <ul className="space-y-2">
                {[
                  { label: "Corporate card", href: "#" },
                  { label: "Business banking", href: "#" },
                  { label: "Expense management", href: "#" },
                  { label: "Accounting automation", href: "#" },
                  { label: "Bill pay", href: "#" },
                  { label: "Travel", href: "#" },
                  { label: "Startups", href: "#" },
                  { label: "Product release", href: "#" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:underline   cursor-pointer transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Platform */}
            <div>
              <div className="font-semibold mb-3 text-white text-[15px]">
                Platform
              </div>

              <ul className="space-y-2">
                {[
                  { label: "Equate AI", href: "#" },
                  { label: "Global ready", href: "#" },
                  { label: "Native integrations", href: "#" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:underline   cursor-pointer transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <div className="font-semibold mb-3 text-white text-[15px]">
                Company
              </div>

              <ul className="space-y-2">
                {[{ label: "Careers", href: "/careers" }].map(
                  ({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="hover:underline   cursor-pointer transition"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Resources */}
            <div>
              <div className="font-semibold mb-3 text-white text-[15px]">
                Resources
              </div>

              <ul className="space-y-2">
                {[
                  { label: "Help center", href: "#" },
                  { label: "Setup guide", href: "#" },
                  { label: "Webinars", href: "#" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:underline   cursor-pointer transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social & App Buttons */}
        <div className="flex flex-col items-center mt-12 gap-6">
          {/* Social Icons */}
          <div className="flex space-x-5">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white   cursor-pointer transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white   cursor-pointer transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-white   cursor-pointer transition"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white   cursor-pointer transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="hover:text-white   cursor-pointer transition"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
          {/* App Store Buttons */}
          {/* <div className="flex space-x-4">
            <a href="#" aria-label="App Store" className="cursor-pointer">
              <img
                src="https://www.brex.com/_next/static/media/app-store-badge.9c7f6d1f.svg"
                alt="Download on the App Store"
                className="h-9 w-auto"
              />
            </a>
            <a href="#" aria-label="Google Play" className="cursor-pointer">
              <img
                src="https://www.brex.com/_next/static/media/google-play-badge.9b0b2b0a.svg"
                alt="Get it on Google Play"
                className="h-9 w-auto"
              />
            </a>
          </div> */}
        </div>

        {/* Disclaimer */}
        {/* <div className="mt-12 text-[11px] text-[#b0b7bc] leading-snug space-y-2 max-w-5xl mx-auto">
          <p>
            *Total treasury return includes yield and additional return and is
            subject to the total balances in Checking, Treasury, and Vault.
            Yield is the annual percentage rate based on the current 7-day
            average yield for the{" "}
            <a href="#" className="underline cursor-pointer">
              Dreyfus Government Cash Management Fund (DGVXX)
            </a>
            , and is effective as of 06/02/25. Additional return is effective as
            of 06/02/25 and paid by Equate Treasury LLC. Yield and additional
            return are variable and only earned on uninvested funds in Treasury.
            Yield and additional return are provided monthly and automatically
            reinvested.{" "}
            <a href="#" className="underline cursor-pointer">
              More details on current rates here.
            </a>
          </p>
          <p>Equate Inc. | 500 W 500W Suite 300 | Salt Lake City, UT 84101</p>
          <p>
            Equate is a financial technology company, not a bank. The Equate
            business account consists of Checking, a commercial checking account
            provided by Column N.A., Member{" "}
            <a href="#" className="underline   cursor-pointer">
              FDIC
            </a>
            , and Treasury and Vault, cash management services provided by
            Equate Treasury LLC, Member{" "}
            <a href="#" className="underline   cursor-pointer">
              FINRA
            </a>{" "}
            and{" "}
            <a href="#" className="underline   cursor-pointer">
              SIPC
            </a>
            .
          </p>
          <p>
            Securities are offered through Equate Treasury LLC. Funds in
            Treasury are not FDIC-insured. Funds in Vault or adjacent banks, if
            any, are eligible for{" "}
            <a href="#" className="underline   cursor-pointer">
              FDIC
            </a>{" "}
            insurance. Funds are not FDIC-insured until they arrive at program
            banks. Conditions apply; investing in securities involves risk and
            loss of money. Yields are variable and fluctuate. Past performance
            is not a guarantee of future results. This is not an offer, or
            solicitation, to buy and/or sell any securities. See Treasury LLC’s{" "}
            <a href="#" className="underline   cursor-pointer">
              disclosures
            </a>{" "}
            for more information. See the latest statement of investments for
            Equate Treasury LLC{" "}
            <a href="#" className="underline   cursor-pointer">
              here
            </a>
            .
          </p>
          <p>
            The Equate Commercial Card is issued by Sutton Bank, and the Equate
            business account for FBO third parties is issued by Column N.A. or,
            if otherwise indicated, by JPMorgan Chase Bank, N.A. Mastercard® is
            a registered trademark, and the circles design is a trademark of
            Mastercard International Inc. The Visa Commercial Card is issued by
            Fifth Third Bank, N.A. Visa is a trademark of Visa U.S.A. Inc.
            Widely not in the US: cards are not issued where Visa® debit cards
            are accepted. No ATM access. All users are subject to approval,
            including underwriting, credit, and certain payment services are
            provided by Equate Payments, LLC.{" "}
            <a href="#" className="underline   cursor-pointer">
              Payments, LLC disclosures
            </a>
            .
          </p>
          <p>
            Some Equate products have associated fees. Plans start at $0 per
            user, per month, and more advanced features are available for $12
            per user, per month.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
