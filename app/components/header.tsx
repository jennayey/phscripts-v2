"use client";

import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

import PHSTLogo from "../../public/images/phscripts-translator-logo-white.svg";
export default function header() {
  return (
    <header className="flex flex-row justify-between px-8 py-6 xl:container xl:mx-auto">
      <div>
        <Image
          priority
          src={PHSTLogo}
          height={50}
          alt="Philippine Scripts Translator Logo"
        />
      </div>
      <div className="flex flex-row justify-end gap-5">
        {/* <div className="text-white font-medium text-md">About</div>
        <div className="text-white font-medium text-md">Downloads</div> */}
        <Button as={Link} href="https://ko-fi.com/I2I0230S1" className="size-fit font-semibold" color="warning">
          Donate on Ko-fi
        </Button>
      </div>
    </header>
  );
}
