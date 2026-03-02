import Button from "@/ui/components/Button/Button";
import s from "./AboutContact.module.scss";
import Icon from "@/ui/icons";
import Illustation from "@/assets/img/about-page/about-contact-illustration.svg?react";
import clsx from "clsx";
import { useI18n } from "@/i18n";

export default function AboutContact() {
  const { t } = useI18n();

  return (
    <section id="contact" className={clsx("page-block", s.ContactBlock)}>
      <div className={s.BlockContent}>
        <div className={s.CTA}>
          <div className={s.TextBlock}>
            <h3>{t["contact.title"]}</h3>
            <p className="lead">{t["contact.lead"]}</p>
          </div>
          <div className={s.Actions}>
            <Button asChild>
              <a href="mailto:andrey.trokhlebov@gmail.com">
                <Icon name="email" />
                <span>{t["contact.email"]}</span>
              </a>
            </Button>
            <Button asChild>
              <a
                href="https://t.me/AndrewOwlgrim"
                target="_blank"
                rel="nofollow norefferer"
              >
                <Icon name="telegram" />
                <span>{t["contact.telegram"]}</span>
              </a>
            </Button>
          </div>
        </div>
        <Illustation className={s.Illustration} />
      </div>
    </section>
  );
}
