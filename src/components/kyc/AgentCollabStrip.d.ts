import React from 'react';
interface AgentCollabStripProps {
    bankName: string;
    bankAgentName?: string;
    status: 'idle' | 'connecting' | 'checking' | 'complete' | 'error';
    latencyMs?: number;
}
declare const AgentCollabStrip: React.FC<AgentCollabStripProps>;
export default AgentCollabStrip;
