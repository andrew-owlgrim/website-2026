import Button from "@/ui/components/Button/Button";
import s from "./AboutContact.module.scss";
import Icon from "@/ui/icons";
import Illustation from "@/assets/img/about-page/about-contact-illustration.svg?react";
import clsx from "clsx";

export default function AboutContact() {
  return (
    <section id="contact" className={clsx("page-block", s.ContactBlock)}>
      <div className={s.BlockContent}>
        <div className={s.CTA}>
          <div className={s.TextBlock}>
            <h3>Wanna work together?</h3>
            <p className="lead">
              If you vibe with my mindset, and want to team-up or need my
              skills, just hit me up!
            </p>
          </div>
          <div className={s.Actions}>
            <Button>
              <Icon name="email" />
              <span>Email</span>
            </Button>
            <Button>
              <Icon name="telegram" />
              <span>Telegram</span>
            </Button>
          </div>
        </div>
        <Illustation className={s.Illustration} />
      </div>
    </section>
  );
}
