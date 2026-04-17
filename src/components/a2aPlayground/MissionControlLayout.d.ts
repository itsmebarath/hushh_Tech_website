import React from 'react';
import type { ConversationMessage } from '../../types/a2aPlayground';
type RiskBand = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
interface MissionControlLayoutProps {
    agents: {
        requester: {
            name: string;
            status: 'connected' | 'negotiating' | 'idle';
        };
        oracle: {
            name: string;
            status: 'connected' | 'processing' | 'idle';
        };
    };
    messages: ConversationMessage[];
    isProcessing?: boolean;
    trustScore: number;
    riskBand?: RiskBand;
    dataFields: Array<{
        name: string;
        label: string;
        value: string | null;
        status: 'locked' | 'unlocking' | 'unlocked' | 'protected';
        isSensitive?: boolean;
    }>;
    thoughts: string[];
    decisionSummary?: string;
    children?: React.ReactNode;
}
/**
 * MissionControlLayout - 3-pane layout for the A2A Playground
 * Left: Agent Network | Center: Terminal | Right: Live State
 */
export declare const MissionControlLayout: React.FC<MissionControlLayoutProps>;
export default MissionControlLayout;
