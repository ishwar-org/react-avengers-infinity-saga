import classNames from 'classnames';
import { forwardRef, ReactElement } from 'react';

export type TooltipContentProps = {
    children: ReactElement;
    className?: string;
    "data-testid"?: string;
}

const TooltipContent = forwardRef<HTMLSpanElement, TooltipContentProps>(function TooltipContent(
    props,
    ref
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
