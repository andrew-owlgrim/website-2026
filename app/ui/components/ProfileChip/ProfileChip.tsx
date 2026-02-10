import Icon from "../../icons";
import { useMemo, type FC, type HTMLAttributes } from "react";
import s from "./ProfileChip.module.scss";
import clsx from "clsx";

type ProfilePreview = {
  photoURL: string | null;
  displayName: string | null;
};

interface ProfileChipProps extends HTMLAttributes<HTMLButtonElement> {
  profileDetails: ProfilePreview;
}

const ProfileChip: FC<ProfileChipProps> = ({
  profileDetails,
  className,
  ...props
}) => {
  const userpicSrc = useMemo(
    () => profileDetails.photoURL,
    [profileDetails.photoURL],
  );

  return (
    <button className={clsx(s.profileChip, className)} {...props}>
      <img
        src={userpicSrc || ""}
        alt=""
        className={s.userpic}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <span className="username">{profileDetails.displayName}</span>
      <Icon name="chevronDown" className={s.icon} />
    </button>
  );
};

export default ProfileChip;
