/**
 * kai - Financial Intelligence Agent
 * KaiAvatar - 3D/4D animated avatar component with audio visualization
 */
import React from 'react';
interface KaiAvatarProps {
    volume: number;
    audioData: Uint8Array;
    active: boolean;
}
declare const KaiAvatar: React.FC<KaiAvatarProps>;
export default KaiAvatar;
