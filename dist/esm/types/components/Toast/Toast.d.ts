import React from 'react';
import { ToastProps, ToastContainerProps } from './interface';
declare const Toast: React.FC<ToastProps & {
    position?: ToastContainerProps['position'];
}>;
export default Toast;
