import { ReactNode } from 'react';
export interface TooltipProps {
    /** Content to display in the tooltip */
    content: string;
    /** The element that triggers the tooltip */
    children: ReactNode;
    /** Position of the tooltip relative to the trigger */
    position?: 'top' | 'bottom' | 'left' | 'right';
    /** Delay before showing tooltip (in ms) */
    delay?: number;
}
