"use client";

import { useAuth } from "@/hooks";
import { Button } from "@/components/ui";
import { Loader2, LogIn } from "lucide-react";

export function ApiTest() {
  const { login, isLoggingIn } = useAuth();

  const handleLogin = () => {
    login({
      email: "admin@temp.com",
      password: "Temp@123",
    });
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogin}
      disabled={isLoggingIn}
      className="gap-2 px-6 h-11 rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 group bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/40"
    >
      {isLoggingIn ? (
        <Loader2 className="w-4 h-4 animate-spin text-primary" />
      ) : (
        <LogIn className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
      )}
      {isLoggingIn ? "Logging in..." : "Login as Admin"}
    </Button>
  );
}
