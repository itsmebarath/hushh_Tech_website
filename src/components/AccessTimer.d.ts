interface AccessTimerProps {
    expiresAt: string;
    onExpired: () => void;
}
export declare function AccessTimer({ expiresAt, onExpired }: AccessTimerProps): import("react/jsx-runtime").JSX.Element;
export {};
