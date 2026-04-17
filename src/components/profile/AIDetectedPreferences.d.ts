/**
 * AI-Detected Preferences Component
 * Displays preferences detected from AI-powered web intelligence
 * User can edit and confirm these preferences before they're saved to their profile
 */
import React from 'react';
import { ProfilePreferences } from '../../services/profileSearch/types';
interface AIDetectedPreferencesProps {
    userId: string;
    onSave?: (updatedPreferences: ProfilePreferences) => void;
}
declare const AIDetectedPreferences: React.FC<AIDetectedPreferencesProps>;
export default AIDetectedPreferences;
