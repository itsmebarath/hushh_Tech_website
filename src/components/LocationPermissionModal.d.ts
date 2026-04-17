interface LocationPermissionModalProps {
    isOpen: boolean;
    onRequestLocation: () => void;
    onSkip: () => void;
    isDetecting: boolean;
}
export default function LocationPermissionModal({ isOpen, onRequestLocation, onSkip, isDetecting, }: LocationPermissionModalProps): import("react/jsx-runtime").JSX.Element;
export {};
