"use client";

import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

// import MobileNav from "./MobileNav";

export default function Nav() {

  return (
    <nav className="w-full flex items-center justify-center bg-[var(--primary)] px-6 py-4 border-b border-neutral-800 relative">
      
      {/* Login / Signup a la izquierda */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex gap-4 text-white text-sm">
        <Link
          href="/"
          className="hover:text-purple-400 transition-colors"
        >
          Login
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/"
          className="hover:text-purple-400 transition-colors"
        >
          Signup
        </Link>
      </div>

      {/* Logo centrado */}
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.png" alt="Aerolife Logo" width={200} height={60} />
        </div>
      </Link>

{/*     
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-purple-700">
        <MobileNav />
      </div> */}

      
    </nav>
  );
}
