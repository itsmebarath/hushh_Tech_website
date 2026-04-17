import React from 'react';
import { ConnectionState } from '../types';
interface ControlPanelProps {
    state: ConnectionState;
    statusText: string;
    onConnect: () => void;
    onDisconnect: () => void;
    volume: number;
}
declare const ControlPanel: React.FC<ControlPanelProps>;
export default ControlPanel;
