declare const _default: {
    title: string;
    component: import("react").FC<import("./interface").ButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        size: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        onClick: {
            action: string;
        };
    };
};
export default _default;
export declare const PrimaryButton: {
    args: {
        children: string;
        size: string;
    };
};
export declare const SmallButton: {
    args: {
        children: string;
        size: string;
    };
};
export declare const LargeButton: {
    args: {
        children: string;
        size: string;
    };
};
