import { Drawer as DrawerMUI } from '@mui/material';
import classNames from 'classnames';
import { ReactNode } from 'react';
import IconButton from '../Buttons/IconButton';
import { ArrowLeft, X as Close} from '../Icons';
import styles from './index.module.css';

export type DrawerProps = {
    className?: string;
    actionIcons?: ReactNode;
    anchor: 'bottom' | 'left' | 'right' | 'top';
    open?: boolean;
    onClose: () => void;
    onBackClick?: () => void;
    children: ReactNode;
    "data-testid"?: string;
};

const Drawer = ({
    className,
    actionIcons,
    anchor = "right",
    open = false,
    onClose,
    onBackClick,
    children,
    "data-testid": dataTestId
}: DrawerProps) => {
    return (
        <DrawerMUI
            className={classNames(className, styles.drawer)}
            anchor={anchor}
            open={open}
            onClose={onClose}
            data-testid={dataTestId}
        >
            <div className={styles.drawerTitle}>
                { onBackClick ? (
                    <ArrowLeft className={styles.backArrow} onClick={onBackClick} />
                ):(
                    <IconButton 
                        variant='filled'
                        color="secondary"
                        size="sm"
                        onClick={onClose}
                    >
                        <Close />
                    </IconButton>
                )}
                <div className={styles.actionIconHeader}>{actionIcons}</div>
            </div>
            <div className={classNames(styles.drawerContent, styles[`drawercontent-position-${anchor}`])}>
                {children}
            </div>
        </DrawerMUI>
    )
};

export default Drawer;
