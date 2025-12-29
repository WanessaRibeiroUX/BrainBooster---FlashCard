"use client";

import React from "react";
import SignInForm from "@/components/sign-in-form";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-full w-full lg:grid lg:grid-cols-2 overflow-hidden">
      {/* Left Side - Hero/Branding */}
      <div className="hidden lg:flex flex-col justify-between bg-zinc-100 dark:bg-zinc-900 p-10 text-zinc-900 dark:text-white">
        <div className="flex items-center gap-2 text-lg font-medium">
          <BookOpen className="h-6 w-6" />
          BrainBoost
        </div>
        <div className="">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;A melhor maneira de aprender e memorizar novos conteúdos.
              Estude de forma eficiente com nossos flashcards.&rdquo;
            </p>
            <footer className="text-sm text-zinc-500 dark:text-zinc-400">
              Equipe BrainBoost
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-6">
          <SignInForm onSwitchToSignUp={() => {}} />

          <div className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
