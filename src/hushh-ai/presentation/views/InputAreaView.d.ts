/**
 * Input Area View Component
 * Message input with file upload
 */
import React from 'react';
import { MediaLimits } from '../../domain/repositories';
interface InputAreaViewProps {
    inputValue: string;
    selectedFiles: File[];
    isSending: boolean;
    mediaLimits: MediaLimits | null;
    onInputChange: (value: string) => void;
    onFileSelect: (files: File[]) => void;
    onRemoveFile: (index: number) => void;
    onSendMessage: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
}
export declare const InputAreaView: React.FC<InputAreaViewProps>;
export {};
