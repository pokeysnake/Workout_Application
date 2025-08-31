import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Gym",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className="min-h-screen p-4 md:p-6">
        {/* 2×2 grid: sidebar (left), header (top-right), main (bottom-right) */}
        <div
          className="
            grid
            h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)]
            grid-cols-1 md:grid-cols-[280px_1fr] 
            grid-rows-[auto_1fr] 
            gap-6 
          "
        >
          {/* Sidebar = tall glass card spanning both rows at md+ */}
          <aside className="glass md:row-span-2 overflow-hidden"> 
            <Sidebar />
          </aside>

          {/* Header = slim glass card */}
          <header className="glass overflow-hidden"> 
            {/* TIP: In your Header component, remove 'border-b' to avoid a double border. */}
            <Header />
          </header>

          {/* Main = scrollable glass card */}
          <main className="glass overflow-auto"> 
            <div className="p-6">{children}</div> 
          </main>
        </div>
      </body>
    </html>
  );
}
