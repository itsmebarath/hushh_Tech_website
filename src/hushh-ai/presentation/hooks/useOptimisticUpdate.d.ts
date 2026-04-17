export interface OptimisticItem<T> {
    data: T;
    isOptimistic: boolean;
    isPending: boolean;
}
export declare function useOptimisticUpdate<T extends {
    id: string;
}>(): {
    items: T[];
    optimisticItems: OptimisticItem<T>[];
    serverItems: T[];
    addOptimistic: (optimisticData: T, asyncFn: () => Promise<T>, onSuccess?: (serverData: T) => void, onError?: (error: Error) => void) => Promise<void>;
    updateOptimistic: (id: string, optimisticData: Partial<T>, asyncFn: () => Promise<T>, onSuccess?: (serverData: T) => void, onError?: (error: Error) => void) => Promise<void>;
    removeOptimistic: (id: string, asyncFn: () => Promise<boolean>, onSuccess?: () => void, onError?: (error: Error) => void) => Promise<void>;
    setItems: (items: T[]) => void;
};
