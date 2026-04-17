import React from 'react';
export interface ConversationEntry {
    id: string;
    timestamp: string;
    direction: 'request' | 'response';
    from: string;
    to: string;
    method?: string;
    status?: 'pending' | 'success' | 'error';
    summary: string;
    payload?: object;
    latencyMs?: number;
}
interface AgentConversationLogProps {
    entries: ConversationEntry[];
    maxHeight?: string;
}
declare const AgentConversationLog: React.FC<AgentConversationLogProps>;
export default AgentConversationLog;
