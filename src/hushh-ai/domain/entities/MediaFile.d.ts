/**
 * MediaFile Entity
 * Pure business object with NO dependencies on React or Supabase
 */
export declare class MediaFile {
    readonly id: string;
    readonly fileName: string;
    readonly fileType: string;
    readonly fileSize: number;
    readonly url: string;
    readonly thumbnailUrl?: string;
    constructor(id: string, fileName: string, fileType: string, fileSize: number, url: string, thumbnailUrl?: string);
    isImage(): boolean;
    isPDF(): boolean;
    isVideo(): boolean;
    getSizeInMB(): number;
    getFileExtension(): string;
}
