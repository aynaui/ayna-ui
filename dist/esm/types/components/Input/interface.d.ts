export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    fullWidth?: boolean;
    variant?: 'default' | 'filled' | 'flushed';
}
