import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { ToastTest } from "@/components/toast-test";
import { ApiTest } from "@/components/api-test";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans relative transition-colors duration-300">
      <div className="absolute top-6 right-6 flex items-center gap-2 z-10 p-1.5 bg-card/60 backdrop-blur-xl rounded-full border border-border shadow-2xl">
        <LanguageToggle />
        <div className="w-px h-4 bg-border mx-1" />
        <ThemeToggle />
      </div>

      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-32 px-8 sm:items-start text-center sm:text-left">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-8">
          {t("title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Experience the power of modern web development with Next.js, Tailwind
          CSS, and i18n support.
        </p>
        <div className="flex flex-wrap gap-4">
          <ToastTest />
          <ApiTest />
        </div>
      </main>
    </div>
  );
}
