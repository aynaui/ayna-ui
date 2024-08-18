import React$1 from 'react';

interface PageProps {
    title: string;
    children: React.ReactNode;
}

declare const Page: React$1.FC<PageProps>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
}

declare const Button: React$1.FC<ButtonProps>;

export { Button, Page };
