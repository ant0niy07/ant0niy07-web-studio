import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, locales } from "@/config/i18n";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title:
      locale === "pl"
        ? "Polityka prywatności | ant0niy07"
        : "Политика конфиденциальности | ant0niy07",
    description:
      locale === "pl"
        ? "Informacje o prywatności i przetwarzaniu danych."
        : "Информация о конфиденциальности и обработке данных.",
    alternates: {
      canonical: `/${locale}/polityka-prywatnosci`,
      languages: {
        pl: "/pl/polityka-prywatnosci",
        ru: "/ru/polityka-prywatnosci",
      },
    },
  };
}
export default async function Privacy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const pl = locale === "pl";
  return (
    <main className="legal">
      <article>
        <Link href={`/${locale}`}>
          {pl ? "← Wróć na stronę główną" : "← Вернуться на главную"}
        </Link>
        <span className="eyebrow">
          {pl ? "PRYWATNOŚĆ" : "КОНФИДЕНЦИАЛЬНОСТЬ"}
        </span>
        <h1>{pl ? "Polityka prywatności" : "Политика конфиденциальности"}</h1>
        <p>
          {pl
            ? "Ta strona prezentuje ofertę usług web-development. Formularz kontaktowy nie przesyła ani nie zapisuje danych na serwerze — przygotowuje treść zapytania i kopiuje ją do schowka użytkownika."
            : "Этот сайт представляет услуги веб-разработки. Контактная форма не отправляет и не сохраняет данные на сервере — она формирует текст запроса и копирует его в буфер обмена пользователя."}
        </p>
        <h2>{pl ? "Dane kontaktowe" : "Контактные данные"}</h2>
        <p>
          {pl
            ? "Kontakt odbywa się przez zewnętrzne kanały wybrane przez użytkownika, w tym Instagram. Zasady przetwarzania danych przez te usługi określają ich własne polityki prywatności."
            : "Связь осуществляется через выбранные пользователем внешние каналы, включая Instagram. Обработка данных этими сервисами регулируется их собственными политиками конфиденциальности."}
        </p>
        <h2>{pl ? "Dane techniczne" : "Технические данные"}</h2>
        <p>
          {pl
            ? "Hosting strony może przetwarzać podstawowe dane techniczne niezbędne do bezpieczeństwa i dostarczenia witryny, takie jak adres IP, typ przeglądarki i czas żądania."
            : "Хостинг может обрабатывать основные технические данные, необходимые для безопасности и работы сайта: IP-адрес, тип браузера и время запроса."}
        </p>
        <h2>{pl ? "Kontakt" : "Контакты"}</h2>
        <p>
          {pl
            ? "W sprawach związanych z prywatnością skontaktuj się przez profil "
            : "По вопросам конфиденциальности свяжитесь через профиль "}
          <a
            href="https://instagram.com/ant0niy07"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ant0niy07
          </a>
          .
        </p>
        <small>
          {pl
            ? "Ostatnia aktualizacja: 26 sierpnia 2026 r."
            : "Последнее обновление: 26 августа 2026 г."}
        </small>
      </article>
    </main>
  );
}
