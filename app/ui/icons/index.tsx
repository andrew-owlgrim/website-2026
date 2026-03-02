import clsx from "clsx";

import IconGoogle from "./icon-google.svg?react";
import IconArrowRight from "./icon-arrow-right.svg?react";
import IconX from "./icon-x.svg?react";
import IconChevronDown from "./icon-chevron-down.svg?react";
import IconProfile from "./icon-profile.svg?react";
import IconLogout from "./icon-logout.svg?react";
import IconAdd from "./icon-add.svg?react";
import IconArrowLeft from "./icon-arrow-left.svg?react";
import IconDelete from "./icon-delete.svg?react";
import IconEmail from "./icon-email.svg?react";
import IconMoreVert from "./icon-more-vert.svg?react";
import IconMoon from "./icon-moon.svg?react";
import IconSun from "./icon-sun.svg?react";
import IconInstagram from "./icon-instagram.svg?react";
import IconTelegram from "./icon-telegram.svg?react";
import IconYoutube from "./icon-youtube.svg?react";
import IconTiktok from "./icon-tiktok.svg?react";
import ChevronLeft from "./chevron-left.svg?react";
import ChevronRight from "./chevron-right.svg?react";
import Globe from "./globe.svg?react";
import MailFilled from "./mail-filled.svg?react";
import Dribbble from "./dribbble.svg?react";
import Behance from "./behance.svg?react";
import Github from "./github.svg?react";
import Quote from "./quote.svg?react";

// Library

export const icons = {
  arrowRight: IconArrowRight,
  arrowLeft: IconArrowLeft,
  chevronDown: IconChevronDown,
  x: IconX,
  profile: IconProfile,
  logout: IconLogout,
  delete: IconDelete,
  add: IconAdd,
  email: IconEmail,
  google: IconGoogle,
  moreVert: IconMoreVert,
  sun: IconSun,
  moon: IconMoon,
  instagram: IconInstagram,
  telegram: IconTelegram,
  youtube: IconYoutube,
  tiktok: IconTiktok,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  globe: Globe,
  "mail-filled": MailFilled,
  dribbble: Dribbble,
  behance: Behance,
  github: Github,
  quote: Quote,
} as const;

export type IconName = keyof typeof icons;

// Component

type IconProps = React.ComponentProps<"div"> & {
  name: IconName;
  className?: string;
};

const Icon = ({ name, className, ...props }: IconProps) => {
  const Svg = icons[name];

  return (
    <div className={clsx("icon-wrapper", className)} {...props}>
      <Svg className="icon" aria-hidden="true" />
    </div>
  );
};

export default Icon;
