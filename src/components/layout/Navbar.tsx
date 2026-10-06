"use client";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { CurrencyToggleButton } from "../currency-toggle-button";

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navbar"
      className="top-0 flex justify-center items-center mx-auto my-5 px-4 w-full md:max-w-7xl"
    >
      <div className="z-10 flex justify-between items-center border-2 p-2 rounded-xl w-full min-h-[68px]">
        <div className="flex items-center gap-1 font-bold">
          <Link href={"/"}>
            {/* Fixed container — both images overlay each other, can never stack vertically */}
            <span className="relative block h-[40px] w-[120px]">
              <Image
                src={"/assets/logos/logo-light.svg"}
                fill
                style={{ objectFit: "contain" }}
                alt="logo"
                className="block dark:hidden"
                priority
              />
              <Image
                src={"/assets/logos/logo-dark.svg"}
                fill
                style={{ objectFit: "contain" }}
                alt="logo"
                className="hidden dark:block"
                priority
              />
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <CurrencyToggleButton />
          <ThemeToggleButton />
          {pathname.startsWith("/generate") || (
            <Link href={"/generate"}>
              <Button className="ml-4 font-bold">Generate Invoice</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
