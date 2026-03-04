export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps {
    /** Array of options to display */
    options: SelectOption[];
    /** Placeholder text */
    placeholder?: string;
    /** Whether to take full width */
    fullWidth?: boolean;
    /** Currently selected value */
    value?: string;
    /** Change handler */
    onChange?: (value: string) => void;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** Error state */
    error?: boolean;
}
