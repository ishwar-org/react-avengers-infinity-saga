const a11yControlsProps = (index: number) => {
    return {
        id: `avengers-control-${index}`,
        "aria-controls": `avengers-controls-${index}`,
    }
};

const a11yLabelledByProps = (index: number) => {
    return {
        id: `avengers-labelled-${index}`,
        "aria-labelledby": `avengers-labelledby-${index}`,
    }
};

export { a11yControlsProps, a11yLabelledByProps };
