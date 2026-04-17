import React from 'react';
import type { A2APlaygroundContainerProps } from '../../types/a2aPlayground';
/**
 * A2APlaygroundContainer
 *
 * State machine that manages the 3-screen A2A Playground demo:
 * 1. SETUP - Configure scenario (bank, user, operations)
 * 2. CONVERSATION - Watch agents collaborate in real-time
 * 3. RESULT - View KYC decision and export summary
 */
declare const A2APlaygroundContainer: React.FC<A2APlaygroundContainerProps>;
export default A2APlaygroundContainer;
