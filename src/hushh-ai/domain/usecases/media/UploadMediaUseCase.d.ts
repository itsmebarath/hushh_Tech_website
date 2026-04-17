/**
 * Upload Media Use Case
 * Uploads a media file and optionally compresses it
 */
import { IMediaRepository } from '../../repositories';
export declare class UploadMediaUseCase {
    private mediaRepository;
    constructor(mediaRepository: IMediaRepository);
    execute(file: File, userId: string, compress?: boolean): Promise<string>;
}
