import {
  Avatar as AvatarMUI,
	Badge as AvatarBadge,
	SxProps,
  Theme,
} from '@mui/material';
import classNames from 'classnames';
import { useCallback, useMemo, ReactNode } from 'react';
import { ApproverBadge } from './ApproverBadge';
import { AVATAR_COLCORS } from '../../utils';
import styles from './index.module.css';

export type AvatarProps = {
	className?: string;
	"data-testid"?: string;
	alt?: string;
	src?: string;
	sx?: SxProps<Theme>;
  fullName?: string;
  withBadge?: boolean;
	badgeContent?: ReactNode;
  variant?: "circular" | "rounded" | "square";
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

const Avatar = ({
	className,
	"data-testid": dataTestId,
	alt,
	src,
	sx,
	fullName,
	withBadge = false,
	badgeContent = <ApproverBadge fill={"#177245"} />,
	variant = "circular",
	size = "md"
}: AvatarProps) => {
	const hashCode = (fullName: string) => {
    let hash = 0;
    if (fullName.length === 0) {
      return hash;
    }
    for (let i = 0; i < fullName.length; i++) {
      hash += fullName.charCodeAt(i) * (i + 1);
    }
    return hash;
  };

	const stringBgColor = useCallback((fullName?: string) => {
    if (!fullName) {
      return;
    }
    const getColorIndex = hashCode(fullName) % AVATAR_COLCORS.length;
    return AVATAR_COLCORS[getColorIndex];
  }, []);

  const stringAvatar = useMemo(() => {
    if (!fullName) {
      return;
    }
    const [firstName, lastName] = fullName.split(" ");
    return {
      sx: {
        bgcolor: stringBgColor(fullName),
        ...sx,
      },
      children: `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`,
    };
  }, [fullName, stringBgColor, sx]);

	if(withBadge){
		return (
			<AvatarBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        className={classNames(
					styles.avatarBadge,
					styles[`avatarBadge-${size}`],
				)}
        badgeContent={
					badgeContent
        }
      >
        <AvatarMUI
          data-testid={dataTestId}
          className={classNames(
						styles.avatarMui,
						styles[`avatar-${size}`],
						className
					)}
          alt={alt}
          src={src}
          variant={variant}
          {...stringAvatar}
        />
      </AvatarBadge>
		)
	}

	return (
		<AvatarMUI
			className={classNames(
				styles.avatarMui,
				styles[`avatar-${size}`],
				className
			)}
			data-testid={dataTestId}
			alt={alt}
			src={src}
			variant={variant}
			{...stringAvatar}
		/>
	);
};

export default Avatar;
