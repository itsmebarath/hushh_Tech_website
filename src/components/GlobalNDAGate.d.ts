/**
 * GlobalNDAGate Component
 *
 * GLOBAL NDA ENFORCEMENT - Acts as a universal key for the entire website.
 *
 * How it works:
 * - If user is NOT authenticated → Allow access (they'll see public marketing pages)
 * - If user IS authenticated → Check NDA status
 *   - If NDA signed → Allow access to all routes
 *   - If NDA NOT signed → Redirect to /sign-nda (only allow minimal auth routes)
 *
 * This ensures NO authenticated user can access ANY content without signing the NDA first.
 */
import React, { ReactNode } from 'react';
interface GlobalNDAGateProps {
    children: ReactNode;
}
declare const GlobalNDAGate: React.FC<GlobalNDAGateProps>;
export default GlobalNDAGate;
