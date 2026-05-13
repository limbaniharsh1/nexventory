"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { RiMenuLine } from "react-icons/ri";

import { header } from "@/data/header";
import { CLIENT } from "@/constants/routes";
import { FaBarsStaggered } from "react-icons/fa6";
import { Button } from "../ui/button";

const Header = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="flex h-20 container items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="-ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-neutral-900 hover:bg-neutral-100 lg:hidden cursor-pointer"
          >
            <FaBarsStaggered className="size-6" aria-hidden />
          </button>

          <Link href={CLIENT.HOME} className="text-primary font-extrabold">
            {/* <img
              src={Images.blackLogo}
              alt="logo"
              className="h-10 w-auto object-contain"
            /> */}
            Web
          </Link>
        </div>

        <div className="flex gap-5">
          {/* Desktop Nav */}
          <DesktopNav items={header} pathname={pathname} />

          {/* CTA */}
          <div className="">
            <Button variant='premium' size="xl">

            <Link
              href=""
              target="_blank"
              // className="rounded-full bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-white"
              >
              Get Started Free
            </Link>
              </Button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={header}
        pathname={pathname}
      />
    </header>
  );
};

export default Header;
