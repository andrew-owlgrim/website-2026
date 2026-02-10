import clsx from "clsx";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={clsx("page-block", s.FooterBlock)}>
      <div className={s.FooterContent}>
        <div className={s.Links}>
          <button>Privacy policy & Terms of use</button>
          <button>Cookies settins</button>
        </div>
        <p className="copyright">Andrew Owlgrim © 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
