import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black relative">
      <div className="absolute top-4 right-4 flex gap-4 z-10">
        <Link
          href="/"
          locale="en"
          className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
        >
          English
        </Link>
        <Link
          href="/"
          locale="ar"
          className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
        >
          العربية
        </Link>
      </div>













      
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {t("title")}
      </main>
    </div>
  );
}
