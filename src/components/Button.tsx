'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'hand-drawn';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: 'paper-airplane' | 'arrow-right' | null;
};

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
  text: 'bg-transparent text-primary hover:text-primary-dark hover:underline font-medium',
  'hand-drawn': 'bg-white text-accent border-2 border-primary hover:bg-primary/10 hand-drawn-box font-medium',
};

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-6 py-3',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon = null,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium rounded-md transition-all ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const iconElement = icon ? (
    <span className="ml-2">
      {icon === 'paper-airplane' && (
        <Image src="/paper-airplane.svg" alt="" width={20} height={20} className="inline" />
      )}
      {icon === 'arrow-right' && (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" /></svg>
      )}
    </span>
  ) : null;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {iconElement}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
      {iconElement}
    </button>
  );
} 