// src/components/Header.tsx
"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex h-14 items-center justify-between px-6">
      
      {/* Navigation Links */}
      <nav className="text-white p-4 flex items-center gap-6 text-sm"> 
        <Link href="/" className="text-base font-medium text-white hover:opacity-80 transition-opacity duration-200">Dashboard</Link> 
        <Link href="/calories" className="text-base font-medium text-white hover:opacity-80 transition-opacity duration-200">Calorie Tracker</Link> 
        <Link href="/workouts" className="text-base font-medium text-white hover:opacity-80 transition-opacity duration-200">Workout Tracker</Link> 
      </nav>

      {/* Action Buttons */}
      <nav className="flex items-center gap-3 p-4"> 
        <Link href="/" className="text-base font-medium text-white hover:opacity-80 transition-opacity duration-200">Log Out</Link>  
      </nav>

    </header>
  );
}
