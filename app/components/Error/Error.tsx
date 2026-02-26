import { useLocation, useNavigate, Link } from "react-router";
import clsx from "clsx";
import s from "./Error.module.scss";
import Button from "@/ui/components/Button/Button";
import { useI18n } from "@/i18n";

type ErrorProps = {
  message: string;
  details: string;
};

export default function Error(props: ErrorProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const canGoBack = location.key !== "default";

  const { t } = useI18n();

  return (
    <main className={clsx("page-block", "full-height-block", s.ErrorBlock)}>
      <div className={s.ErrorContent}>
        <p className={s.Kaomoji}>¯\_(ツ)_/¯</p>

        <div className={s.TextBlock}>
          <h2>{props.message}</h2>
          <p className="lead">{props.details}</p>
        </div>

        {canGoBack ? (
          <Button
            className={s.Action}
            variant="fill"
            shape="capsule"
            onClick={() => navigate(-1)}
          >
            <p>{t.error_back}</p>
          </Button>
        ) : (
          <Button className={s.Action} variant="fill" shape="capsule" asChild>
            <Link to="/">
              <p>{t.error_home}</p>
            </Link>
          </Button>
        )}
      </div>
    </main>
  );
}
