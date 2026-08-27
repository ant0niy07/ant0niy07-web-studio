import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import PortfolioSite, { platformSlotLabel } from "./PortfolioSite";
import { contactHref } from "@/config/contact";
import { clampPlatformSlots, platformPortfolioOffer } from "@/config/pricing";
beforeEach(() => {
  vi.clearAllMocks();
});
describe("portfolio", () => {
  it("renders hero and pricing content", () => {
    render(<PortfolioSite />);
    expect(
      screen.getByRole("heading", { name: /Nowoczesna strona/ }),
    ).toBeInTheDocument();
    expect(screen.getByText("1 000 PLN")).toBeInTheDocument();
    expect(screen.getByText("od 2 500 PLN")).toBeInTheDocument();
  });
  it("navigation points to real sections and external links are safe", () => {
    render(<PortfolioSite />);
    expect(
      screen.getAllByRole("link", { name: "Realizacje" })[0],
    ).toHaveAttribute("href", "#portfolio");
    for (const link of screen
      .getAllByRole("link")
      .filter((x) => x.getAttribute("target") === "_blank"))
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
  it("filters portfolio", async () => {
    render(<PortfolioSite />);
    await userEvent.click(
      screen.getAllByRole("button", { name: "Motoryzacja" })[0],
    );
    expect(screen.getByText("SPECTRE Detailing House")).toBeInTheDocument();
    expect(
      screen.queryByText("Vazi — kuchnia gruzińska"),
    ).not.toBeInTheDocument();
  });
  it("opens and closes project modal with Escape", async () => {
    render(<PortfolioSite />);
    await userEvent.click(
      screen.getAllByRole("button", { name: /Zobacz zakres/ })[0],
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  });
  it("selector supports multi-select and recommends custom", async () => {
    render(<PortfolioSite />);
    await userEvent.click(screen.getByRole("button", { name: "Kalkulator" }));
    await userEvent.click(screen.getByRole("button", { name: "Galeria" }));
    expect(screen.getByText("Projekt indywidualny")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Kalkulator" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
  it("copies structured brief", async () => {
    render(<PortfolioSite />);
    await userEvent.click(
      screen.getByRole("button", { name: /Skopiuj brief/ }),
    );
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("Brief projektu strony"),
    );
    expect(await screen.findByRole("status")).toHaveTextContent(
      "Brief został skopiowany",
    );
  });
  it("missing contact opens fallback modal", async () => {
    render(<PortfolioSite />);
    await userEvent.click(
      screen.getAllByRole("button", { name: /Wyślij zapytanie/ })[0],
    );
    expect(screen.getByRole("dialog")).toHaveTextContent(
      "Ten kanał kontaktu jest obecnie konfigurowany",
    );
    expect(
      within(screen.getByRole("dialog")).getByRole("link", {
        name: /@ant0niy07/,
      }),
    ).toHaveAttribute("href", "https://instagram.com/ant0niy07");
  });
  it("validates contact form without discarding data", async () => {
    render(<PortfolioSite />);
    const form = screen.getAllByRole("button", { name: /Skopiuj i wyślij/ })[0];
    await userEvent.click(form);
    expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);
    const name = screen.getAllByRole("textbox", { name: /Imię/ })[0];
    await userEvent.type(name, "Anna");
    await userEvent.click(form);
    expect(name).toHaveValue("Anna");
  });
  it("FAQ accordion toggles accessibly", async () => {
    render(<PortfolioSite />);
    const q = screen.getByRole("button", { name: /Czy naprawdę/ });
    expect(q).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(q);
    expect(q).toHaveAttribute("aria-expanded", "false");
  });
  it("renders complete Russian navigation and active switcher", () => {
    render(<PortfolioSite locale="ru" />);
    expect(
      screen.getAllByRole("link", { name: "Проекты" })[0],
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /Выбрать русский язык/ })[0],
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("heading", { name: /Современный сайт/ }),
    ).toBeInTheDocument();
  });
  it("uses five unique real portfolio previews", () => {
    render(<PortfolioSite />);
    const previews = screen
      .getAllByRole("img")
      .filter((image) => image.classList.contains("project-image"));
    expect(previews).toHaveLength(5);
    expect(
      new Set(previews.map((image) => image.getAttribute("src"))).size,
    ).toBe(5);
  });
  it("uses local SVG flags before language codes", () => {
    render(<PortfolioSite />);
    const pl = screen.getAllByRole("button", { name: /Wybierz język polski/ })[0];
    const ru = screen.getAllByRole("button", { name: /Выбрать русский язык/ })[0];
    expect(pl.querySelector("img")?.getAttribute("src")).toBe("/flags/pl.svg");
    expect(ru.querySelector("img")?.getAttribute("src")).toBe("/flags/ru.svg");
    expect(pl.textContent?.trim()).toBe("PL");
    expect(ru.textContent?.trim()).toBe("RU");
  });
  it("shows dedicated platform prices separately", () => {
    render(<PortfolioSite />);
    expect(screen.getByText("5 000–25 000 EUR")).toBeInTheDocument();
    expect(screen.getByText("2 500–7 000 EUR")).toBeInTheDocument();
    expect(
      screen.getByText(
        platformSlotLabel("pl", clampPlatformSlots(platformPortfolioOffer.remainingSlots)),
      ),
    ).toBeInTheDocument();
  });
  it("renders fixed locale-specific prices without mixing currencies", () => {
    const { unmount } = render(<PortfolioSite locale="pl" />);
    const polishPricing = document.querySelector("#cennik");
    expect(polishPricing).toHaveTextContent("1 000 PLN");
    expect(polishPricing).toHaveTextContent("od 2 500 PLN");
    expect(polishPricing).toHaveTextContent("5 000–25 000 EUR");
    expect(polishPricing).toHaveTextContent("2 500–7 000 EUR");
    expect(polishPricing?.textContent).not.toMatch(/руб\.|грн/);
    unmount();

    render(<PortfolioSite locale="ru" />);
    const russianPricing = document.querySelector("#cennik");
    expect(russianPricing).toHaveTextContent("20 тыс. руб. / 10 тыс. грн");
    expect(russianPricing).toHaveTextContent("от 50 тыс. руб. / 25 тыс. грн");
    expect(russianPricing).toHaveTextContent(
      "500 тыс.–2,5 млн руб. / 200 тыс.–1,2 млн грн",
    );
    expect(russianPricing).toHaveTextContent(
      "250–700 тыс. руб. / 100–340 тыс. грн",
    );
    expect(russianPricing?.textContent).not.toMatch(/PLN|EUR/);
  });
  it("handles platform slot grammar and safe bounds", () => {
    expect(platformSlotLabel("pl", 3)).toBe("Pozostały 3 miejsca");
    expect(platformSlotLabel("pl", 2)).toBe("Pozostały 2 miejsca");
    expect(platformSlotLabel("pl", 1)).toBe("Pozostało 1 miejsce");
    expect(platformSlotLabel("pl", 0)).toContain("pozostało 0 miejsc");
    expect(platformSlotLabel("ru", 3)).toBe("Осталось 3 места");
    expect(platformSlotLabel("ru", 1)).toBe("Осталось 1 место");
    expect(platformSlotLabel("ru", 0)).toContain("осталось 0 мест");
    expect(clampPlatformSlots(-4)).toBe(0);
    expect(clampPlatformSlots(99)).toBe(3);
  });
});
describe("configured destinations", () => {
  it("builds WhatsApp, tel and email links", () => {
    expect(contactHref("whatsapp", "+48 500 600 700", "Dzień dobry")).toContain(
      "https://wa.me/48500600700?text=",
    );
    expect(contactHref("phone", "+48 500")).toBe("tel:+48500");
    expect(contactHref("email", "a@b.pl", "Brief")).toContain("mailto:a@b.pl");
  });
  it("returns null for missing contact", () =>
    expect(contactHref("telegram", null)).toBeNull());
});
