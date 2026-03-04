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
        variant: {
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
export declare const Primary: {
    args: {
        children: string;
        variant: string;
        size: string;
    };
};
export declare const Secondary: {
    args: {
        children: string;
        variant: string;
        size: string;
    };
};
export declare const Outline: {
    args: {
        children: string;
        variant: string;
        size: string;
    };
};
export declare const Danger: {
    args: {
        children: string;
        variant: string;
        size: string;
    };
};
export declare const Success: {
    args: {
        children: string;
        variant: string;
        size: string;
    };
};
export declare const SmallButton: {
    args: {
        children: string;
        size: string;
        variant: string;
    };
};
export declare const LargeButton: {
    args: {
        children: string;
        size: string;
        variant: string;
    };
};
export declare const Disabled: {
    args: {
        children: string;
        disabled: boolean;
        variant: string;
    };
};
