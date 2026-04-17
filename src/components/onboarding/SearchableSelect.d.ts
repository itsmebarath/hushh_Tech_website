import type { ReactNode } from 'react';
interface Option {
    value: string;
    label: string;
}
interface SearchableSelectProps {
    id: string;
    label: string;
    labelIcon?: ReactNode;
    value: string;
    options: Option[];
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    loadError?: boolean;
    onRetry?: () => void;
    required?: boolean;
    autoComplete?: string;
}
export declare function SearchableSelect({ id, label, labelIcon, value, options, onChange, placeholder, disabled, loading, loadError, onRetry, required, autoComplete, }: SearchableSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
