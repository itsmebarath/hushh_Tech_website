export declare const upsertOnboardingData: (userId: string, payload: Record<string, unknown>) => Promise<{
    error: {
        message: string;
    } | null;
}>;
