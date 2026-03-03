import clsx from "clsx";
import s from "./Footer.module.scss";
import { useI18n } from "@/i18n";
import Modal from "@/ui/components/Modal/Modal";
import PrivacyPolicy from "../Terms/PrivacyPolicy";
import TermsOfUse from "../Terms/TermsOfUse";
import { useUI } from "@/ui/provider/UIProvider";
import Link from "@/ui/components/Link/Link";

const Footer = () => {
  const { t } = useI18n();
  const { openModal } = useUI();

  return (
    <footer className={clsx("page-block", s.Footer)}>
      <div className={s.Content}>
        <div className={s.Links}>
          <Link asChild>
            <button onClick={() => openModal("terms")}>{t.terms}</button>
          </Link>
          <Link asChild>
            <button onClick={() => openModal("privacy")}>{t.privacy}</button>
          </Link>
          <Link asChild>
            <button>{t.cookies}</button>
          </Link>
        </div>
        <p className="copyright">{t.copyright}</p>
      </div>
      <Modal id="privacy" closer title="Privacy policy">
        <PrivacyPolicy />
      </Modal>
      <Modal id="terms" closer title="Terms of use">
        <TermsOfUse />
      </Modal>
    </footer>
  );
};

export default Footer;
