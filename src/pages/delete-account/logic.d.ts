export declare function useDeleteAccountLogic(): {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    isLoggedIn: boolean;
    isLoading: boolean;
    userEmail: string;
    handleAccountDeleted: () => void;
    handleLoginRedirect: () => void;
};
