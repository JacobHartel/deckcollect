"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { WalletConnect } from "@/components/connect-button"; // your wrapper

export function Nav() {
  return (
    <nav className="w-full flex items-center justify-between p-4 border-b bg-white/10 backdrop-blur">
      <div className="flex items-center space-x-4">
        <Link href="/"><Button variant="ghost">Home</Button></Link>
        <Link href="/packs"><Button variant="ghost">Packs</Button></Link>
        <Link href="/peeps"><Button variant="ghost">Peeps</Button></Link>
      </div>
      <h1 className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">Deck Collect</h1> 
      <WalletConnect />
    </nav>
  );
}
