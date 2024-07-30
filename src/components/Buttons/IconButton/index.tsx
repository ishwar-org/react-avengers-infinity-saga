import { IconButton as IconButtonMUI } from '@mui/material';
import classNames from 'classnames';
import { ComponentProps, MouseEvent, ReactNode } from 'react';
import styles from './index.module.css';

type MuiProps = Partial<
  Omit<ComponentProps<typeof IconButtonMUI>,  "size" | "color" | "variant">
>;

export type IconButtonProps = MuiProps &{
	className?: string;
	"data-testid"?: string;
	size?: "sm" | "md" | "lg";
	color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
	variant?: "filled" | "outlined";
	disabled?: boolean;
	"aria-label"?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	children?: ReactNode
}

const IconButton = ({
	className,
	"data-testid": dataTestId,
	size = "md",
	color = "primary",
	variant = "filled",
	disabled = false,
	"aria-label": ariaLabel,
	onClick,
	children,
	...rest
}: IconButtonProps) => {
	return (
		<IconButtonMUI
			{...rest}
			className={classNames(
				styles.iconButtonMui,
				styles[`iconbutton-${size}`],
				styles[`iconbutton-${variant}`],
				styles[`iconbutton-${variant}-${color}`],
				disabled && styles[`iconbutton-disabled`],
				className
			)}
			data-testId={dataTestId}
			disabled={disabled}
			aria-label={ariaLabel}
			onClick={onClick}
		>
			{children}
		</IconButtonMUI>
	);
};

export default IconButton;
