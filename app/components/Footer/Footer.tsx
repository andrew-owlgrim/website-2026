import clsx from "clsx";
import s from "./Footer.module.scss";
import { useLocale } from "@/i18n";

const Footer = () => {
  const { t } = useLocale();

  return (
    <footer className={clsx("page-block", s.Footer)}>
      <div className={s.Content}>
        <div className={s.Links}>
          <button>{t.terms}</button>
          <button>{t.cookies}</button>
        </div>
        <p className="copyright">{t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
