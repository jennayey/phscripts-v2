"use client";

import { Link } from "@nextui-org/react";

export default function footer() {
  return (
    <footer className="flex flex-col-reverse items-center gap-y-1 md:flex-row md:justify-between px-5 xl:px-8 py-6 gap-x-6 align-middle xl:container xl:mx-auto xs:h-2">
      <div className="text-b-navy-400">©2020–2024 </div>
      <div className="flex flex-row gap-x-1">
        <div className="text-b-navy-400">Website and assets by</div>

        <Link
          href="https://jennayey.com"
          color="warning"
          className="text-b-blue"
        >
          jennayey.com
        </Link>
      </div>
    </footer>
  );
}
