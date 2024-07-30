import { Chip as ChipMUI } from '@mui/material';
import classNames from 'classnames';
import { ChangeEvent, EventHandler, KeyboardEvent, MouseEvent, ReactNode, ReactElement } from 'react';
import Avatar, { AvatarProps } from '../Avatar';
import styles from './index.module.css';

export type ChipProps = {
	className?: string;
	"data-testid"?: string;
	label?: ReactNode;
	size?: "small" | "medium";
	color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
	variant?: "filled" | "outlined";
	withRound?: boolean; 
	onClick?: EventHandler<MouseEvent>;
	onDelete?: EventHandler<MouseEvent | ChangeEvent | KeyboardEvent>;
	withAvatar?: boolean;
	avatar?: AvatarProps,
	withIcon?: boolean;
	icon?: ReactElement;
}

const Chip = ({
	className,
	"data-testid": dataTestId,
	label,
	size = "medium",
	color = "primary",
	variant = "outlined",
	withRound = false,
	onClick,
	onDelete,
	withAvatar = false,
	withIcon = false,
	icon
}: ChipProps) => {

	if(withAvatar){
		return (
			<ChipMUI
				className={classNames(
					styles.chipMui,
					styles[`chip-${variant}`],
					styles[`chip-${color}`],
					styles[`chip-${size}`],
					!withRound &&  styles[`chip-normal`],
					styles[`chip-${variant}-${color}`],
					className
				)}
				data-testid={dataTestId}
				size={size}
				onClick={onClick}
				onDelete={onDelete}
				avatar={<Avatar size="xxs" fullName="I" src={"https://mui.com/static/images/avatar/2.jpg"} />}
				label={label}
			/>
		)
	}

	return (
		<ChipMUI
			className={classNames(
				styles.chipMui,
				styles[`chip-${variant}`],
				styles[`chip-${color}`],
				styles[`chip-${size}`],
				!withRound &&  styles[`chip-normal`],
				withIcon && styles[`chip-icon`],
				styles[`chip-${variant}-${color}`],
				className
			)}
			data-testid={dataTestId}
			size={size}
			onClick={onClick}
			onDelete={onDelete}
			icon={withIcon ? <>{icon}</> : <></>}
			label={label}
		/>
	);
};

export default Chip;
