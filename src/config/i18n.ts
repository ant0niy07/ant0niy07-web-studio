export type Locale = "pl" | "ru";
export const locales: Locale[] = ["pl", "ru"];
export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
export const localeMeta = {
  pl: {
    title: "Strony internetowe dla firm | ant0niy07",
    description:
      "Nowoczesne strony firmowe i sklepy internetowe dla biznesu w Warszawie i całej Polsce.",
  },
  ru: {
    title: "Сайты для бизнеса в Польше | ant0niy07",
    description:
      "Современные корпоративные сайты и интернет-магазины для бизнеса в Варшаве и по всей Польше.",
  },
};
export const ru: Record<string, string> = {
  "Web Development": "Веб-разработка",
  Realizacje: "Проекты",
  Oferta: "Услуги",
  Cennik: "Цены",
  "Jak pracuję": "Как я работаю",
  Kontakt: "Контакты",
  "Bezpłatna konsultacja": "Бесплатная консультация",
  "Otwórz menu": "Открыть меню",
  "Zamknij menu": "Закрыть меню",
  Menu: "Меню",
  "STRONY WWW DLA BIZNESU W POLSCE": "САЙТЫ ДЛЯ БИЗНЕСА В ПОЛЬШЕ",
  "Nowoczesna strona, która wygląda profesjonalnie i ":
    "Современный сайт, который выглядит профессионально и ",
  "Nowoczesna strona, która wygląda profesjonalnie i":
    "Современный сайт, который выглядит профессионально и",
  "pomaga zdobywać klientów.": "помогает привлекать клиентов.",
  "Projektuję szybkie, responsywne strony firmowe i sklepy internetowe — od pierwszej koncepcji po publikację na Twojej domenie.":
    "Я создаю быстрые адаптивные корпоративные сайты и интернет-магазины — от первой концепции до публикации на вашем домене.",
  "Porozmawiajmy o Twojej stronie ": "Обсудим ваш сайт ",
  "Zobacz realizacje ": "Посмотреть проекты ",
  "Realizacja od 3–5 dni": "Срок от 3–5 дней",
  "Rozliczenie po akceptacji": "Оплата после утверждения",
  "Bez miesięcznego abonamentu za standardowy hosting":
    "Без ежемесячной платы за стандартный хостинг",
  "Termin zależy od zakresu projektu i dostarczenia materiałów.":
    "Срок зависит от объёма проекта и предоставления материалов.",
  "Animowana wizualizacja budowania responsywnej strony":
    "Анимированная визуализация создания адаптивного сайта",
  "Sprawdź ofertę": "Посмотреть предложение",
  "Wyślij zapytanie": "Отправить запрос",
  "Gotowe do publikacji": "Готово к публикации",
  "Szybka i responsywna": "Быстро и адаптивно",
  "Strona dopasowana do telefonu i komputera": "Сайт для телефона и компьютера",
  "Podpięcie domeny i publikacja": "Подключение домена и публикация",
  "Bezpieczne rozliczenie po akceptacji": "Безопасная оплата после утверждения",
  "Wsparcie przy uruchomieniu": "Поддержка при запуске",
  "REALIZACJE I WERSJE DEMO": "ПРОЕКТЫ И ДЕМО-ВЕРСИИ",
  "Zobacz, jak może wyglądać Twój biznes w internecie.":
    "Посмотрите, как ваш бизнес может выглядеть в интернете.",
  "Każdy projekt powstaje pod konkretną branżę, klientów i cel biznesowy — bez kopiowania jednego szablonu.":
    "Каждый проект создаётся под конкретную отрасль, клиентов и бизнес-цель — без копирования одного шаблона.",
  "Filtry realizacji": "Фильтры проектов",
  Wszystkie: "Все проекты",
  Platformy: "Платформы",
  "Lokalny biznes": "Локальный бизнес",
  Motoryzacja: "Автомобили",
  Gastronomia: "Рестораны",
  "Beauty i usługi": "Красота и услуги",
  "Wdrożenie komercyjne": "Коммерческий проект",
  "Wersja demo": "Демо-версия",
  "Platforma dla szkoły online iLikeLearn":
    "Образовательная платформа iLikeLearn",
  "Rozbudowana platforma edukacyjna prezentująca programy nauki, ofertę oraz ścieżkę zapisu dla kursantów. Projekty tej klasy wyceniam indywidualnie — od 2 500 PLN.":
    "Развитая образовательная платформа с учебными программами, предложением и понятным путём записи. Проекты такого уровня оцениваются индивидуально — от 2 500 PLN.",
  "Indywidualny system do zarządzania szkołą online":
    "Индивидуальная система управления онлайн-школой",
  "Indywidualnie zaprojektowana platforma do kompleksowego zarządzania szkołą online, obecnie dostępna w języku rosyjskim. System oferuje osobne role i uprawnienia dla administratora, nauczyciela, testera, ucznia oraz rodzica, a także obsługuje harmonogram, kilka linków do zajęć, zadania domowe, obecność, odwołane i przeniesione lekcje oraz automatyczne rozliczenia na podstawie stawki i liczby odbytych zajęć.":
    "Индивидуально разработанная платформа для комплексного управления онлайн-школой, интерфейс которой сейчас доступен на русском языке. Система предусматривает отдельные роли и права доступа для администратора, преподавателя, тестировщика, ученика и родителя, а также поддерживает расписание, несколько ссылок на занятия, домашние задания, посещаемость, отменённые и перенесённые уроки и автоматический расчёт оплаты на основании ставки и фактического количества занятий.",
  "Platforma online": "Онлайн-платформа",
  Edukacja: "Образование",
  "Dedykowany UX": "Индивидуальный UX",
  "Strona internetowa atelier Lenok": "Сайт ателье LenOK",
  "Elegancka witryna dla atelier z prezentacją marki, usług i kolekcji, przygotowana dla klientów polskojęzycznych.":
    "Элегантный сайт ателье с презентацией бренда, услуг и коллекций для польскоязычных клиентов.",
  "Strona firmowa": "Корпоративный сайт",
  Atelier: "Ателье",
  "Dynamiczna prezentacja usług detailingowych, pakietów, realizacji i szybkiej ścieżki do kontaktu.":
    "Динамичная презентация услуг детейлинга, пакетов, работ и удобного пути к контакту.",
  Detailing: "Детейлинг",
  Galeria: "Галерея",
  Animacje: "Анимации",
  "Vazi — kuchnia gruzińska": "VAZI — грузинская кухня",
  "Wizualna strona restauracji z menu, prezentacją lokalu i wygodną ścieżką kontaktu dla gości.":
    "Визуальный сайт ресторана с меню, презентацией заведения и удобным способом связи для гостей.",
  Restauracja: "Ресторан",
  "Charakterystyczna strona barbershopu z ofertą usług, wizerunkiem marki i czytelną ścieżką do rezerwacji.":
    "Характерный сайт барбершопа с услугами, образом бренда и понятным путём к записи.",
  Barbershop: "Барбершоп",
  Rezerwacja: "Запись",
  "Mobile UX": "Мобильный UX",
  "Mobile First": "Сначала мобильные",
  "Otwórz projekt ": "Открыть проект ",
  "Zobacz zakres ": "Посмотреть объём ",
  "Zakres może obejmować: ": "В проект могут входить: ",
  "Omów podobny projekt ": "Обсудить похожий проект ",
  OFERTA: "УСЛУГИ",
  "Od prostej wizytówki po rozbudowany sklep.":
    "От простого сайта-визитки до большого интернет-магазина.",
  "Strony firmowe": "Корпоративные сайты",
  "Profesjonalna prezentacja firmy, oferty, lokalizacji i najważniejszych kanałów kontaktu.":
    "Профессиональная презентация компании, предложения, адреса и основных способов связи.",
  "Landing page": "Лендинг",
  "Skoncentrowana strona przygotowana pod konkretną usługę, kampanię lub pozyskiwanie zapytań.":
    "Целевая страница для конкретной услуги, рекламной кампании или получения заявок.",
  "Sklepy internetowe": "Интернет-магазины",
  "Katalog produktów, koszyk, płatności online i konfiguracja metod dostawy.":
    "Каталог товаров, корзина, онлайн-оплата и настройка способов доставки.",
  "Dedykowane rozwiązania": "Индивидуальные решения",
  "Kalkulatory, formularze wieloetapowe, panele użytkowników i logika dopasowana do procesu firmy.":
    "Калькуляторы, многошаговые формы, личные кабинеты и логика под процессы компании.",
  "DOPASUJ ZAKRES": "ПОДБЕРИТЕ ФОРМАТ",
  "Jakiej strony potrzebuje Twój biznes?": "Какой сайт нужен вашему бизнесу?",
  "Rodzaj biznesu": "Тип бизнеса",
  "Typ projektu": "Тип проекта",
  "Potrzebne funkcje ": "Нужные функции ",
  "Potrzebne funkcje": "Нужные функции",
  "(możesz wybrać kilka)": "(можно выбрать несколько)",
  "Usługi lokalne": "Локальные услуги",
  Beauty: "Красота и услуги",
  Budownictwo: "Строительство",
  Sklep: "Магазин",
  "Strona wizytówka": "Сайт-визитка",
  "Sklep internetowy": "Интернет-магазин",
  "Dedykowana platforma": "Индивидуальная платформа",
  "Formularz kontaktowy": "Контактная форма",
  WhatsApp: "WhatsApp",
  Kalkulator: "Калькулятор",
  "Płatności online": "Онлайн-оплата",
  "Wersje językowe": "Языковые версии",
  "Panel użytkownika": "Личный кабинет",
  "Rekomendowany kierunek": "Рекомендуемый формат",
  "Projekt indywidualny": "Индивидуальный проект",
  "Pakiet Wizytówka": "Пакет «Визитка»",
  "Dokładna wycena zależy od zakresu i integracji.":
    "Точная стоимость зависит от объёма и интеграций.",
  "Skopiuj brief": "Скопировать бриф",
  "Brief projektu strony": "Бриф проекта сайта",
  "Branża: ": "Сфера: ",
  "Rodzaj projektu: ": "Тип проекта: ",
  "Potrzebne funkcje: ": "Нужные функции: ",
  "Proszę o kontakt w sprawie wyceny.":
    "Прошу связаться со мной для оценки стоимости.",
  "do ustalenia": "нужно уточнить",
  "Brief został skopiowany.": "Бриф скопирован.",
  "PRZEJRZYSTY CENNIK": "ПРОЗРАЧНЫЕ ЦЕНЫ",
  "Wiesz, za co płacisz.": "Вы знаете, за что платите.",
  "Bez niejasnych pakietów i obowiązkowego miesięcznego abonamentu za utrzymanie standardowej strony.":
    "Без непонятных пакетов и обязательной ежемесячной платы за обслуживание стандартного сайта.",
  "ustalony zakres projektu": "согласованный объём проекта",
  "1–3 kluczowe sekcje lub podstrony": "1–3 ключевых раздела или страницы",
  "Pełna responsywność na telefonie i komputerze":
    "Полная адаптация для телефона и компьютера",
  "Podpięcie własnej domeny": "Подключение вашего домена",
  "Hosting bez miesięcznego abonamentu": "Хостинг без ежемесячной платы",
  "Formularz, WhatsApp lub e-mail": "Форма, WhatsApp или e-mail",
  "Podstawowa optymalizacja SEO": "Базовая SEO-оптимизация",
  "Publikacja i testy": "Публикация и тестирование",
  "Standardowy termin realizacji: 3–5 dni": "Стандартный срок: 3–5 дней",
  "Wybieram stronę wizytówkę": "Выбираю сайт-визитку",
  "Projekt indywidualny / Sklep": "Индивидуальный проект / Магазин",
  "od 2 500 PLN": "от 2 500 PLN",
  "Rozbudowana struktura strony": "Расширенная структура сайта",
  "Katalog produktów lub usług": "Каталог товаров или услуг",
  "Koszyk i proces zakupowy": "Корзина и процесс покупки",
  "Integracja płatności online": "Интеграция онлайн-оплаты",
  "Konfiguracja metod dostawy": "Настройка способов доставки",
  "Dedykowane formularze i logika": "Индивидуальные формы и логика",
  "Optymalizacja SEO i wydajności": "SEO и оптимизация производительности",
  "Indywidualny harmonogram realizacji": "Индивидуальный график работ",
  "Porozmawiajmy o projekcie": "Обсудим проект",
  "Rozliczenie po prezentacji i pełnej akceptacji uzgodnionej wersji projektu.":
    "Оплата после презентации и полного утверждения согласованной версии проекта.",
  "Hosting bez miesięcznego abonamentu dla standardowej strony firmowej.":
    "Хостинг без ежемесячной платы для стандартного корпоративного сайта.",
  "Cena domeny oraz opłaty pobierane przez zewnętrzne systemy płatności, dostawy, poczty lub bazy danych nie są częścią ceny strony. Zakres i końcowa wycena są zawsze potwierdzane przed rozpoczęciem prac.":
    "Стоимость домена и комиссии внешних платёжных систем, доставки, почты или баз данных не входят в стоимость сайта. Объём и итоговая цена всегда согласуются до начала работ.",
  FIRMA: "КОМПАНИЯ",
  " Cena domeny oraz opłaty pobierane przez zewnętrzne systemy płatności, dostawy, poczty lub bazy danych nie są częścią ceny strony. Zakres i końcowa wycena są zawsze potwierdzane przed rozpoczęciem prac.":
    " Стоимость домена и комиссии внешних платёжных систем, доставки, почты или баз данных не входят в стоимость сайта. Объём и итоговая цена всегда согласуются до начала работ.",
  "JAK PRACUJĘ": "КАК Я РАБОТАЮ",
  "Prosty proces. Jasne zasady. Bez technicznego chaosu.":
    "Простой процесс. Понятные правила. Без технического хаоса.",
  Konsultacja: "Консультация",
  "Krótko omawiamy ofertę, klientów, potrzebne funkcje oraz cel strony.":
    "Кратко обсуждаем предложение, клиентов, нужные функции и цель сайта.",
  "Projekt i wdrożenie": "Дизайн и разработка",
  "Przygotowuję indywidualny projekt, wersję mobilną, treści i wszystkie uzgodnione integracje.":
    "Готовлю индивидуальный дизайн, мобильную версию, контент и все согласованные интеграции.",
  "Domena, testy i rozliczenie": "Домен, тесты и оплата",
  "Po akceptacji podpinam domenę, testuję stronę i przekazuję gotowy projekt wraz z dostępami.":
    "После утверждения подключаю домен, тестирую сайт и передаю готовый проект со всеми доступами.",
  "DLACZEGO WARTO": "ПОЧЕМУ СТОИТ РАБОТАТЬ СО МНОЙ",
  "Strona ma pracować na Twój biznes, nie tylko dobrze wyglądać.":
    "Сайт должен работать на ваш бизнес, а не только хорошо выглядеть.",
  "Projekt dopasowany do branży": "Проект под вашу отрасль",
  "Szybkie działanie na telefonach": "Быстрая работа на телефонах",
  "Czytelna ścieżka do kontaktu lub zakupu":
    "Понятный путь к контакту или покупке",
  "Brak obowiązkowego abonamentu za standardowy hosting":
    "Нет обязательной платы за стандартный хостинг",
  "Dostępy i projekt przekazane właścicielowi":
    "Все доступы и проект передаются владельцу",
  "Pomoc przy domenie i publikacji": "Помощь с доменом и публикацией",
  "Najczęstsze pytania przed startem.": "Частые вопросы перед началом.",
  "Czy naprawdę nie ma miesięcznej opłaty za hosting?":
    "Действительно ли нет ежемесячной платы за хостинг?",
  "Standardową stronę firmową można uruchomić na platformie bez miesięcznego abonamentu, w ramach jej dostępnych limitów. Domena oraz płatne usługi zewnętrzne są rozliczane osobno.":
    "Стандартный корпоративный сайт можно разместить на платформе без ежемесячной платы в пределах её доступных лимитов. Домен и платные внешние услуги оплачиваются отдельно.",
  "Kiedy strona może być gotowa?": "Когда сайт может быть готов?",
  "Prosta strona wizytówka może być gotowa w ciągu 3–5 dni roboczych od ustalenia zakresu i otrzymania potrzebnych materiałów. Większe projekty otrzymują indywidualny harmonogram.":
    "Простой сайт-визитка может быть готов за 3–5 рабочих дней после согласования объёма и получения материалов. Для крупных проектов составляется индивидуальный график.",
  "Kiedy następuje płatność?": "Когда производится оплата?",
  "Rozliczenie następuje po prezentacji i akceptacji uzgodnionej wersji projektu. Szczegółowe warunki są potwierdzane przed rozpoczęciem współpracy.":
    "Оплата производится после презентации и утверждения согласованной версии проекта. Подробные условия подтверждаются до начала сотрудничества.",
  "Czy mogę później zmienić treści i zdjęcia?":
    "Можно ли позже изменить тексты и фотографии?",
  "Tak. Sposób aktualizacji zależy od rodzaju projektu. Możliwy jest prosty panel edycji lub późniejsze zmiany na zlecenie.":
    "Да. Способ обновления зависит от проекта. Возможна простая панель редактирования или последующие изменения по запросу.",
  "Czy pomożesz z domeną?": "Вы поможете с доменом?",
  "Tak. Pomagam wybrać, skonfigurować i podpiąć domenę do gotowej strony.":
    "Да. Я помогу выбрать, настроить и подключить домен к готовому сайту.",
  "Czy tworzysz strony wielojęzyczne?": "Вы создаёте многоязычные сайты?",
  "Tak. Strona może zostać przygotowana w kilku wersjach językowych zależnie od grupy klientów.":
    "Да. Сайт может быть подготовлен на нескольких языках в зависимости от аудитории.",
  "Czy sklep generuje dodatkowe koszty?":
    "Есть ли у интернет-магазина дополнительные расходы?",
  "Operatorzy płatności, systemy dostaw, domeny oraz niektóre zewnętrzne narzędzia mogą pobierać własne opłaty. Wszystkie takie koszty są omawiane przed wdrożeniem.":
    "Платёжные операторы, службы доставки, домены и некоторые внешние инструменты могут взимать свои комиссии. Все такие расходы обсуждаются до запуска.",
  POROZMAWIAJMY: "ДАВАЙТЕ ОБСУДИМ",
  "Opowiedz mi, czym zajmuje się Twoja firma.":
    "Расскажите, чем занимается ваша компания.",
  "Napisz kilka zdań o swojej działalności. Odpowiem, jaki rodzaj strony będzie najlepszy i jaki zakres warto przygotować.":
    "Напишите несколько предложений о своём бизнесе. Я подскажу, какой сайт подойдёт лучше всего и какой объём стоит подготовить.",
  "Napisz na Instagramie": "Написать в Instagram",
  "Warszawa / cała Polska": "Варшава / вся Польша",
  "Współpraca zdalna": "Удалённое сотрудничество",
  "Imię *": "Имя *",
  "Nazwa firmy": "Название компании",
  Branża: "Сфера бизнеса",
  "Telefon lub e-mail *": "Телефон или e-mail *",
  "Jakiej strony potrzebujesz?": "Какой сайт вам нужен?",
  "Wybierz opcję": "Выберите вариант",
  "Krótko opisz projekt *": "Кратко опишите проект *",
  "Skopiuj i wyślij zapytanie": "Скопировать и отправить запрос",
  "Formularz nie wysyła danych na serwer. Skopiuje gotowe zapytanie; następnie możesz wysłać je wybranym kanałem.":
    "Форма не отправляет данные на сервер. Она скопирует готовый запрос, после чего вы сможете отправить его удобным способом.",
  "Podaj imię.": "Укажите имя.",
  "Podaj telefon lub e-mail.": "Укажите телефон или e-mail.",
  "Napisz krótko o projekcie.": "Кратко опишите проект.",
  "Zapytanie o stronę": "Запрос на создание сайта",
  "Imię: ": "Имя: ",
  "Firma: ": "Компания: ",
  "Kontakt: ": "Контакт: ",
  "Typ: ": "Тип: ",
  "Opis: ": "Описание: ",
  "Zapytanie skopiowane — dane pozostają w formularzu.":
    "Запрос скопирован — данные остаются в форме.",
  "Opowiedz o swoim projekcie": "Расскажите о своём проекте",
  "Ten kanał kontaktu jest obecnie konfigurowany. Napisz do mnie na Instagramie lub skorzystaj z formularza.":
    "Этот канал связи сейчас настраивается. Напишите мне в Instagram или воспользуйтесь формой.",
  "Napisz do @ant0niy07 ": "Написать @ant0niy07 ",
  Zamknij: "Закрыть",
  "Szczegóły projektu": "Подробности проекта",
  "Polityka prywatności": "Политика конфиденциальности",
  "Hosting bez miesięcznego abonamentu dla standardowej strony firmowej. Domena i usługi zewnętrzne są płatne osobno.":
    "Хостинг без ежемесячной платы для стандартного корпоративного сайта. Домен и внешние сервисы оплачиваются отдельно.",
  "Designed & Developed by @ant0niy07": "Designed & Developed by @ant0niy07",
  "Strona główna platformy edukacyjnej iLikeLearn":
    "Главная страница образовательной платформы iLikeLearn",
  "Strona główna atelier LenOK Poprawki Krawieckie":
    "Главная страница ателье LenOK Poprawki Krawieckie",
  "Strona główna SPECTRE Detailing House":
    "Главная страница SPECTRE Detailing House",
  "Strona główna restauracji VAZI Kuchnia Gruzińska":
    "Главная страница ресторана VAZI Kuchnia Gruzińska",
  "Strona główna Knight Barbershop": "Главная страница Knight Barbershop",
};
export const translate = (locale: Locale, value: string) =>
  locale === "ru" ? (ru[value] ?? value) : value;
