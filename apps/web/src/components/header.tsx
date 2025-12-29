"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";
import Image from "next/image";

export default function Header() {
  const { useSession } = authClient;
  const { data, error, isPending } = useSession();
  if (error) {
    console.log(error);
  }
  const session = data;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Verificar se é admin
  const { data: adminCheck } = trpc.admin.isAdmin.useQuery(undefined, {
    enabled: !!session,
  });

  const publicLinks = [
    { to: "/", label: "Home" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  const privateLinks = [
    { to: "/dashboard", label: "Dashboard" },
    {
      to: adminCheck?.isAdmin ? "/admin/decks" : "/my-decks",
      label: "Meus Decks",
    },
    { to: "/favorites", label: "Favoritos" },
    { to: "/purchases", label: "Compras" },
  ];

  const adminLinks = [
    {
      to: "/admin",
      label: "Admin",
      className:
        "text-white font-semibold bg-red-900 px-3 py-2 rounded-md hover:bg-red-700",
    },
  ];

  let linksToShow: Array<{ to: string; label: string; className?: string }> =
    session ? [...publicLinks, ...privateLinks] : publicLinks;

  if (adminCheck?.isAdmin) {
    linksToShow = [...linksToShow, ...adminLinks];
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  BB
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  BrainBoost
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {linksToShow.map(({ to, label, className }) => (
                <Link
                  key={to}
                  href={to}
                  className={
                    className ||
                    "px-3 py-2 rounded-md text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <ModeToggle />
              <div className="h-6 w-px bg-border" />
              <UserMenu />
            </div>

            <button
              className="md:hidden p-2 rounded-md hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-1 px-4 py-4">
              {linksToShow.map(({ to, label, className }) => (
                <Link
                  key={to}
                  href={to}
                  className={
                    className ||
                    "px-3 py-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t">
                <ModeToggle />
                <UserMenu />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
