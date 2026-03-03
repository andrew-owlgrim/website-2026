import s from "./SiteSettings.module.scss";
import Button from "@/ui/components/Button/Button";
import Icon from "@/ui/icons";
import {
  DropdownMenu,
  DropdownMenuItem,
} from "@/ui/components/DropdownMenu/DropdownMenu";
import { useI18n } from "@/i18n";
import { useUI } from "@/ui/provider/UIProvider";
import { Select, SelectItem } from "@/ui/components/Select/Select";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import {
  ToggleSwitch,
  ToggleSwitchItem,
} from "@/ui/components/ToggleSwitch/ToggleSwitch";
import clsx from "clsx";

export function SiteSettings({
  size,
  className,
}: {
  size: "sm" | "lg";
  className?: string;
}) {
  const { locale, setLocale } = useI18n();
  const { theme, setTheme } = useUI();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [language, setLanguage] = useState<string>(locale);

  useEffect(() => {
    if (language !== locale) setLocale(language as Locale);
  }, [language]);

  if (size === "sm")
    return (
      <div className={clsx(s.SettingsSmall, className)}>
        <DropdownMenu
          trigger={
            <Button size="sm" variant="ghost">
              <Icon name="globe" />
            </Button>
          }
        >
          <DropdownMenuItem text="Eng" onClick={() => setLocale("en")} />
          <DropdownMenuItem text="Укр" onClick={() => setLocale("uk")} />
          <DropdownMenuItem text="Рус" onClick={() => setLocale("ru")} />
        </DropdownMenu>

        <Button size="sm" variant="ghost" onClick={switchTheme}>
          <Icon name={theme === "light" ? "moon" : "sun"} />
        </Button>
      </div>
    );

  return (
    <div className={clsx(s.SettingsLarge, className)}>
      <Select
        value={language}
        onValueChange={setLanguage}
        placeholder="Language"
        shape="round"
      >
        <SelectItem value="en" text="Eng" />
        <SelectItem value="uk" text="Укр" />
        <SelectItem value="ru" text="Рус" />
      </Select>

      <ToggleSwitch
        value={theme}
        onValueChange={setTheme}
        shape="round"
        onClick={switchTheme}
      >
        <ToggleSwitchItem value="light">
          <Icon name="sun" />
        </ToggleSwitchItem>

        <ToggleSwitchItem value="dark">
          <Icon name="moon" />
        </ToggleSwitchItem>
      </ToggleSwitch>
    </div>
  );
}
