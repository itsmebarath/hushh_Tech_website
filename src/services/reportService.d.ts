export declare const STORAGE_BUCKETS: {
    IMAGES: string;
    VIDEOS: string;
};
export interface Report {
    id: string;
    title: string;
    subtitle?: string;
    date: string;
    time?: string;
    description?: string;
    public_image_urls: string[];
    public_video_urls: string[];
    [k: string]: any;
}
/**
 * Fetch a single report by ID, then prepend full bucket URLs
 */
export declare const getReportById: (id: string) => Promise<Report | null>;
