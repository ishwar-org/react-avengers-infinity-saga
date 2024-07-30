import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { a11yLabelledByProps } from '../../utils';
import styles from './index.module.css';

export type TabPanelProps = {
    className?: string;
    children?: ReactNode;
    index: number;
    activeTab: number;
    "data-testid"?: string;
}

const TabPanel = ({
    className,
    children,
    index,
    activeTab,
    "data-testid": dataTestId
}: TabPanelProps) => {
    return (
        <div
            role="tabpanel"
            hidden={index !== activeTab}
            {...a11yLabelledByProps(index)}
            className={className}
            data-testid={`${dataTestId}-tab-panel`}
        >
            {activeTab === index && (
                <Box className={styles.tabPanel} data-testid={`${dataTestId}-tab-panel-container`}>
                    {children}
                </Box>
            )}
        </div>
    )
};

export default TabPanel;
