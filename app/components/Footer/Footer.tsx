import clsx from "clsx";
import s from "./Footer.module.scss";
import { useI18n } from "@/i18n";
import Modal from "@/ui/components/Modal/Modal";
import PrivacyPolicy from "../Terms/PrivacyPolicy";
import TermsOfUse from "../Terms/TermsOfUse";
import { useUI } from "@/ui/provider/UIProvider";

const Footer = () => {
  const { t } = useI18n();
  const { openModal } = useUI();

  return (
    <footer className={clsx("page-block", s.Footer)}>
      <div className={s.Content}>
        <div className={s.Links}>
          <button onClick={() => openModal("terms")}>{t.terms}</button>
          <button onClick={() => openModal("privacy")}>{t.privacy}</button>
          <button>{t.cookies}</button>
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
