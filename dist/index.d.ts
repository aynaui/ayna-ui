import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import * as styled_components_dist_types from 'styled-components/dist/types';

interface AlertProps {
    children: React.ReactNode;
    title?: string;
    variant?: 'info' | 'success' | 'warning' | 'danger';
    onClose?: () => void;
}

declare const Alert: React__default.FC<AlertProps>;

interface AvatarProps {
    src?: string;
    alt?: string;
    name?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
}

declare const Avatar: React__default.FC<AvatarProps>;

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
    size?: 'small' | 'medium' | 'large';
}

declare const Badge: React__default.FC<BadgeProps>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
}

declare const Button: React__default.FC<ButtonProps>;

interface CardProps {
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

declare const Card: React__default.FC<CardProps>;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

declare const Checkbox: React__default.FC<CheckboxProps>;

interface DropdownItem {
    /** Unique id for the item */
    id: string;
    /** Label to display */
    label: string;
    /** Icon element (optional) */
    icon?: ReactNode;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Whether to show a divider after this item */
    divider?: boolean;
    /** Click handler for this item */
    onClick?: () => void;
}
interface DropdownProps {
    /** Button text or element to trigger the dropdown */
    trigger: ReactNode;
    /** Array of dropdown items */
    items: DropdownItem[];
    /** Position of the dropdown relative to trigger */
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    /** Whether the dropdown is disabled */
    disabled?: boolean;
}

declare const Dropdown: React__default.FC<DropdownProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    fullWidth?: boolean;
    variant?: 'default' | 'filled' | 'flushed';
}

declare const Input: React__default.FC<InputProps>;

interface ModalProps {
    /** Whether the modal is visible */
    isOpen: boolean;
    /** Callback when the modal should be closed */
    onClose: () => void;
    /** Modal title */
    title?: string;
    /** Modal content */
    children: ReactNode;
    /** Footer content (usually buttons) */
    footer?: ReactNode;
    /** Size variant */
    size?: 'small' | 'medium' | 'large';
    /** Whether clicking the backdrop closes the modal */
    closeOnBackdropClick?: boolean;
    /** Whether to show the close button */
    showCloseButton?: boolean;
}

declare const Modal: React__default.FC<ModalProps>;

interface PageProps {
    title: string;
    children: React.ReactNode;
}

declare const Page: React__default.FC<PageProps>;

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps {
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

declare const Select: React__default.FC<SelectProps>;

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    label?: string;
}

declare const Spinner: React__default.FC<SpinnerProps>;

type ToastVariant = 'success' | 'error' | 'warning' | 'info';
interface ToastProps {
    /** Toast message */
    message: string;
    /** Visual variant */
    variant?: ToastVariant;
    /** Duration in ms before auto-dismiss */
    duration?: number;
    /** Whether the toast is visible */
    isVisible: boolean;
    /** Callback when toast is dismissed */
    onClose: () => void;
}
interface ToastContainerProps {
    /** Position of the toast container */
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    /** Maximum number of visible toasts */
    maxToasts?: number;
}

declare const Toast: React__default.FC<ToastProps & {
    position?: ToastContainerProps['position'];
}>;

declare const ToastContainer: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    position: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
}>> & string;

interface TooltipProps {
    /** Content to display in the tooltip */
    content: string;
    /** The element that triggers the tooltip */
    children: ReactNode;
    /** Position of the tooltip relative to the trigger */
    position?: 'top' | 'bottom' | 'left' | 'right';
    /** Delay before showing tooltip (in ms) */
    delay?: number;
}

declare const Tooltip: React__default.FC<TooltipProps>;

export { Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, Button, type ButtonProps, Card, type CardProps, Checkbox, type CheckboxProps, Dropdown, type DropdownItem, type DropdownProps, Input, type InputProps, Modal, type ModalProps, Page, type PageProps, Select, type SelectOption, type SelectProps, Spinner, type SpinnerProps, Toast, ToastContainer, type ToastContainerProps, type ToastProps, type ToastVariant, Tooltip, type TooltipProps };
