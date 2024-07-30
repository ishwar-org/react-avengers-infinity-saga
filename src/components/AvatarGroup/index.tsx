import { AvatarGroup as AvatarGroupMUI } from '@mui/material';
import classNames from 'classnames';
import Avatar, { AvatarProps } from '../Avatar';
import styles from './index.module.css';

export type AvatarGroupProps = {
	className?: string;
	"data-testid"?: string;
	avatarList: AvatarProps[];
	max?: number;
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

const AvatarGroup = ({
	className,
	"data-testid": dataTestId,
	avatarList,
	max = 4,
    size = "md",
}:AvatarGroupProps) => {
	return (
		<AvatarGroupMUI
			className={classNames(
				styles.avatarGroupMUI,
                styles[`avatar-group-${size}`],
				className
			)}
            data-testid={dataTestId}
            max={max}
            spacing="medium"
		>
            {avatarList.map((avatar: AvatarProps, index: number) => (
                <Avatar
                    key={index}
                    {...avatar}
                    size={size}
                />
            ))}
		</AvatarGroupMUI>
	);
};

export default AvatarGroup;