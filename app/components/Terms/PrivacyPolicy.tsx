import Link from "@/ui/components/Link/Link";
import type { FC } from "react";
import s from "./Terms.module.scss";
import { SUPPORT_EMAIL } from "@/utils/constants";
import { useI18n } from "@/i18n";

const PrivacyPolicy: FC = () => {
  const { t } = useI18n();

  return (
    <main className={s.Terms}>
      <h3>{t["privacy.title"]}</h3>
      <p>{t["privacy.intro"]}</p>

      <section>
        <h5>
          <em>1.</em>
          {t["privacy.section.1.title"]}
        </h5>
        <ul>
          <li>
            <p>
              <strong>{t["privacy.section.1.text.1.1"]}</strong>
              {t["privacy.section.1.text.1.2"]}
            </p>
          </li>
          <li>
            <p>
              <strong>{t["privacy.section.1.text.2.1"]}</strong>
              {t["privacy.section.1.text.2.2"]}
            </p>
          </li>
          <li>
            <p>
              <strong>{t["privacy.section.1.text.3.1"]}</strong>
              {t["privacy.section.1.text.3.2"]}
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>2.</em>
          {t["privacy.section.2.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["privacy.section.2.text.1"]}</p>
          </li>
          <li>
            <p>{t["privacy.section.2.text.2"]}</p>
          </li>
          <li>
            <p>{t["privacy.section.2.text.3"]}</p>
          </li>
          <li>
            <p>{t["privacy.section.2.text.4"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>3.</em>
          {t["privacy.section.3.title"]}
        </h5>
        <ul>
          <li>
            <p>
              {t["privacy.section.3.text.1.1"]}
              <strong>{t["privacy.section.3.text.1.2"]}</strong>
              {t["privacy.section.3.text.1.3"]}
            </p>
          </li>
          <li>
            <p>{t["privacy.section.3.text.2"]}</p>
          </li>
          <li>
            <p>{t["privacy.section.3.text.3"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>4.</em>
          {t["privacy.section.4.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["privacy.section.4.text.1"]}</p>
          </li>
          <li>
            <p>{t["privacy.section.4.text.2"]}</p>
          </li>
          <li>
            <p>{t["privacy.section.4.text.3"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>5.</em>
          {t["privacy.section.5.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["privacy.section.5.text.1"]}</p>
          </li>
          <li>
            <p>{t["privacy.section.5.text.2"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>6.</em>
          {t["privacy.section.6.title"]}
        </h5>
        <ul>
          <li>
            <p>{t["privacy.section.6.text.1"]}</p>
          </li>
          <li>
            <p>{t["privacy.section.6.text.2"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>
          <em>7.</em>
          {t["privacy.section.7.title"]}
        </h5>
        <p>{t["privacy.section.7.text"]}</p>
      </section>
      <section>
        <h5>
          <em>8.</em>
          {t["privacy.section.8.title"]}
        </h5>
        <p>
          {t["privacy.section.8.text"]}
          <Link href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</Link>
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
