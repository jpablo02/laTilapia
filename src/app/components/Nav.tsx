"use client";

import Image from "next/image";
import Link from "next/link";

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

      {/* Redes sociales a la derecha */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex gap-4">
        <Link
          href="https://www.facebook.com/profile.php?id=61579619343785"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/face.png"
            alt="Facebook"
            width={58}
            height={58}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        <Link
          href="https://www.instagram.com/pescaderialatilapia?igsh=a3lmNXQxeXV5NzEy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/insta.png"
            alt="Instagram"
            width={58}
            height={58}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
    </nav>
  );
}
