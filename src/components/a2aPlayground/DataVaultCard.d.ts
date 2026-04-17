import React from 'react';
type FieldStatus = 'locked' | 'unlocking' | 'unlocked' | 'protected';
interface DataField {
    name: string;
    label: string;
    value: string | null;
    status: FieldStatus;
    isSensitive?: boolean;
}
interface DataVaultCardProps {
    fields: DataField[];
    title?: string;
}
/**
 * DataVaultCard - Visualizes data fields as locked/unlocked cards
 * Shows the data vault with encryption status for each field
 */
export declare const DataVaultCard: React.FC<DataVaultCardProps>;
/**
 * DataVaultProgress - Shows overall vault unlock progress
 */
export declare const DataVaultProgress: React.FC<{
    totalFields: number;
    unlockedFields: number;
}>;
/**
 * EncryptionBadge - Shows encryption status
 */
export declare const EncryptionBadge: React.FC<{
    algorithm?: string;
    isActive?: boolean;
}>;
export default DataVaultCard;
