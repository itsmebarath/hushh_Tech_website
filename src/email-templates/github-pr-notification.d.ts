/**
 * GitHub PR Notification Email Template
 *
 * This template generates HTML for PR merge notification emails.
 * Uses inline styles for email client compatibility.
 *
 * Location: Main codebase (not in Edge Function)
 * Called by: Vercel API endpoint → Supabase Edge Function
 */
export interface PRData {
    prNumber: number;
    prTitle: string;
    prUrl: string;
    prDescription: string;
    author: {
        login: string;
        avatarUrl: string;
        profileUrl: string;
    };
    mergedBy: {
        login: string;
        avatarUrl: string;
        profileUrl: string;
    };
    createdAt: string;
    mergedAt: string;
    baseBranch: string;
    headBranch: string;
    filesChanged: number;
    additions: number;
    deletions: number;
    labels: string[];
    repoName: string;
    repoUrl: string;
}
/**
 * Generate email subject line
 */
export declare function generateEmailSubject(pr: PRData): string;
/**
 * Generate the full HTML email content with new UI design
 * Uses inline styles for email client compatibility
 */
export declare function generateEmailHtml(pr: PRData): string;
declare const _default: {
    generateEmailHtml: typeof generateEmailHtml;
    generateEmailSubject: typeof generateEmailSubject;
};
export default _default;
