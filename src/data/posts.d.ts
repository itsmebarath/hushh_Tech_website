export interface PostData {
    slug: string;
    title: string;
    publishedAt: string;
    count: number;
    description: string;
    category: string;
    Component: React.ComponentType;
    image: string;
    accessLevel: string;
    pdfUrl?: string;
}
export declare const posts: PostData[];
export declare function getPosts(): PostData[];
export declare function getPostBySlug(slug: string): PostData | undefined;
