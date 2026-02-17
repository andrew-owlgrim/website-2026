import { useLocation, useNavigate, Link } from "react-router";
import clsx from "clsx";
import s from "./Error.module.scss";
import Button from "@/ui/components/Button/Button";

type ErrorProps = {
  message: string;
  details: string;
};

export default function Error(props: ErrorProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const canGoBack = location.key !== "default";

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
            <p>Back</p>
          </Button>
        ) : (
          <Button className={s.Action} variant="fill" shape="capsule" asChild>
            <Link to="/">
              <p>Go to home page</p>
            </Link>
          </Button>
        )}
      </div>
    </main>
  );
}
