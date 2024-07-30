import { Tooltip as TooltipMUI } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import TooltipContent from './TooltipContent';

export type TooltipProps = {
    className?: string;
    title: ReactNode;
    placement?: 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end';
    arrow?: boolean;
    open?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    followCursor?: boolean;
    disableInteractive?: boolean;
    "data-testid"?: string;
    children: ReactElement;
}

const Tooltip = ({
    className,
    title,
    placement = 'right',
    arrow = false,
    open,
    onClose,
    onOpen,
    followCursor,
    disableInteractive, 
    "data-testid": dataTestId,
    children
}: TooltipProps) => {
    return (
        <TooltipMUI
            className={className}
            title={title}
            placement={placement}
            arrow={arrow}
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            followCursor={followCursor}
            disableInteractive={disableInteractive}
            data-testid={dataTestId}
        >
            <TooltipContent data-testid={`${dataTestId}-tab-content`}>{children}</TooltipContent>
        </TooltipMUI>
    )
};

export default Tooltip;
