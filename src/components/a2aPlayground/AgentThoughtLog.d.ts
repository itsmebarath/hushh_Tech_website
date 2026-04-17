import React from 'react';
interface AgentThoughtLogProps {
    thoughts: string[];
    decisionSummary?: string;
    isActive?: boolean;
    agentName?: string;
}
/**
 * AgentThoughtLog - Displays the AI agent's internal reasoning process
 * Styled as a cyber-terminal with green-on-black aesthetic
 */
export declare const AgentThoughtLog: React.FC<AgentThoughtLogProps>;
/**
 * Mini thought indicator - Shows brief processing status
 */
export declare const ThoughtIndicator: React.FC<{
    text: string;
    isActive?: boolean;
}>;
export default AgentThoughtLog;
