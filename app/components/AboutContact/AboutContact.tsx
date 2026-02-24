import Button from "@/ui/components/Button/Button";
import s from "./AboutContact.module.scss";
import Icon from "@/ui/icons";
import Illustation from "@/assets/img/about-page/about-contact-illustration.svg?react";
import clsx from "clsx";
import { useLocale } from "@/i18n";

export default function AboutContact() {
  const { t } = useLocale();

  return (
    <section id="contact" className={clsx("page-block", s.ContactBlock)}>
      <div className={s.BlockContent}>
        <div className={s.CTA}>
          <div className={s.TextBlock}>
            <h3>{t["contact.title"]}</h3>
            <p className="lead">{t["contact.lead"]}</p>
          </div>
          <div className={s.Actions}>
            <Button>
              <Icon name="email" />
              <span>{t["contact.email"]}</span>
            </Button>
            <Button>
              <Icon name="telegram" />
              <span>{t["contact.telegram"]}</span>
            </Button>
          </div>
        </div>
        <Illustation className={s.Illustration} />
      </div>
    </section>
  );
}
