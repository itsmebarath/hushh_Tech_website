export interface ShareClassRow {
    shareClass: string;
    minInvestment: string;
    managementFee: string;
    performanceFee: string;
    hurdleRate: string;
}
export interface AlphaStackRow {
    label: string;
    value: string;
    isTotalRow?: boolean;
}
export interface PhilosophyCard {
    title: string;
    description: string;
}
export interface EdgeCard {
    title: string;
    description: string;
}
export interface AssetPillar {
    title: string;
    description: string;
}
export interface RiskCard {
    title: string;
    description: string;
}
export interface KeyTerm {
    title: string;
    content: string;
}
export interface UseDiscoverFundALogicReturn {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    targetIRRLabel: string;
    targetIRRValue: string;
    targetIRRPeriod: string;
    targetIRRDisclaimer: string;
    philosophySectionTitle: string;
    philosophyCards: PhilosophyCard[];
    edgeSectionTitle: string;
    sellTheWallHref: string;
    edgeCards: EdgeCard[];
    assetFocusSectionTitle: string;
    assetFocusDescription: string;
    assetPillars: AssetPillar[];
    alphaStackSectionTitle: string;
    alphaStackSubtitle: string;
    alphaStackRows: AlphaStackRow[];
    riskSectionTitle: string;
    riskCards: RiskCard[];
    keyTermsSectionTitle: string;
    keyTermsSubtitle: string;
    keyTerms: KeyTerm[];
    shareClasses: ShareClassRow[];
    joinSectionTitle: string;
    joinSectionDescription: string;
    joinButtonLabel: string;
    handleCompleteProfile: () => void;
}
export declare const useDiscoverFundALogic: () => UseDiscoverFundALogicReturn;
