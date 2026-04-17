/**
 * NWS Score Badge — Circular progress indicator for Network Worth Score
 * Shows score 0–100 with grade and color coding
 */
import { NWSResult } from '../../services/networkScore/calculateNWS';
interface NWSScoreBadgeProps {
    result: NWSResult | null;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
    showBreakdown?: boolean;
}
declare const NWSScoreBadge: ({ result, loading, size, showBreakdown }: NWSScoreBadgeProps) => import("react/jsx-runtime").JSX.Element;
export default NWSScoreBadge;
