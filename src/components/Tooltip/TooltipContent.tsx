import classNames from 'classnames';
import { forwardRef, ReactElement } from 'react';

export type TooltipContentProps = {
    children: ReactElement;
    className?: string;
    "data-testid"?: string;
}

const TooltipContent = forwardRef(function TooltipContent(
    props: TooltipContentProps,
    ref: any
) {
    const { children, className, "data-testid": dataTestId } = props;
    return (
        <span
            {...props}
            ref={ref}
            className={classNames(className)}
            data-testid={dataTestId}
        >
            {children}
        </span>
    )
});

export default TooltipContent;
