import { Box, Tab as TabMUI, Tabs as TabsMUI } from '@mui/material';
import classNames from 'classnames';
import { ReactElement, SyntheticEvent } from 'react';
import TabPanel from './TabPanel';
import { a11yControlsProps } from '../../utils';
import styles from './index.module.css';

type TabsOptions = {
    label: string;
    disabled?: boolean;
    component: null |  ReactElement;
    icon?: ReactElement; 
}

export type TabsProps = {
    className?: string;
    activeTab: number;
    onChange: (tab: number) => void;
    tabOptions: TabsOptions[];
    orientation?: "horizontal" | "vertical";
    centered?: boolean;
    variant?: "standard" | "scrollable" | "fullWidth";
    disableRipple?: boolean,
    "data-testid"?: string;
}

const Tabs = ({
    className,
    activeTab,
    onChange,
    tabOptions,
    orientation = 'horizontal',
    variant = 'scrollable',
    centered = false,
    disableRipple = false,
    "data-testid": dataTestId
}: TabsProps) => {

    return (
        <Box className={classNames(styles[`tabs-${orientation}`])}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <TabsMUI
                    className={classNames(className)}
                    value={activeTab}
                    onChange={(_: SyntheticEvent, newValue: number) =>
                        onChange(newValue)
                    }
                    variant={variant}
                    orientation={orientation}
                    data-testid={dataTestId}
                    centered={centered}
                >
                    {tabOptions.map((tab, index) => (
                        <TabMUI
                            key={tab?.label}
                            label={<span>{tab?.label}</span>}
                            {...a11yControlsProps(index)}
                            disableRipple={disableRipple}
                        />
                    ))}
                </TabsMUI>
            </Box>
            {tabOptions.map((tab, index) => (
                <TabPanel
                    activeTab={activeTab}
                    index={index}
                    key={tab?.label}
                    data-testid={dataTestId}
                >
                    {tab?.component}
                </TabPanel>
            ))}
        </Box>
    )
};

export default Tabs;
