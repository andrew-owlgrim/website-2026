import Link from "@/ui/components/Link/Link";
import type { FC, MouseEventHandler } from "react";
import s from "./Terms.module.scss";
import { useUI } from "@/ui/provider/UIProvider";
import { SUPPORT_EMAIL } from "@/utils/constants";
import { useI18n } from "@/i18n";

const TermsOfUse: FC = () => {
  const { openModal } = useUI();
  const { t } = useI18n();

  const handlePrivacyLinkClick: MouseEventHandler = (e) => {
    e.preventDefault();
    openModal("privacy");
  };

  return (
    <main className={s.Terms}>
      <section>
        <h3>{t["terms.title"]}</h3>
        <p>{t["terms.intro"]}</p>
      </section>

      <section>
        <h5>
          <em>1.</em>
          {t["terms.section.1.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["terms.section.1.text.1"]}</p>
          </li>
          <li>
            <p>{t["terms.section.1.text.2"]}</p>
          </li>
          <li>
            <p>{t["terms.section.1.text.3"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>2.</em>
          {t["terms.section.2.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["terms.section.2.text.1"]}</p>
          </li>
          <li>
            <p>{t["terms.section.2.text.2"]}</p>
          </li>
          <li>
            <p>{t["terms.section.2.text.3"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>3.</em>
          {t["terms.section.3.title"]}
        </h5>
        <p>
          {t["terms.section.3.text"]}
          <Link href="" onClick={handlePrivacyLinkClick}>
            {t["terms.section.3.privacy"]}
          </Link>
          .
        </p>
      </section>
      <section>
        <h5>
          <em>4.</em>
          {t["terms.section.4.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["terms.section.4.text.1"]}</p>
          </li>
          <li>
            <p>{t["terms.section.4.text.2"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>5.</em>
          {t["terms.section.5.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["terms.section.5.text.1"]}</p>
          </li>
          <li>
            <p>{t["terms.section.5.text.2"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>6.</em>
          {t["terms.section.6.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["terms.section.6.text.1"]}</p>
          </li>
          <li>
            <p>{t["terms.section.6.text.2"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>7.</em>
          {t["terms.section.7.title"]}
        </h5>
        <p>{t["terms.section.7.text"]}</p>
      </section>
      <section>
        <h5>
          <em>8.</em>
          {t["terms.section.8.title"]}
        </h5>
        <p>
          {t["terms.section.8.text"]}
          <Link href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</Link>
        </p>
      </section>
    </main>
  );
};

export default TermsOfUse;
