import React from 'react';
import { UserPersona } from '../types';
interface OnboardingScreenProps {
    onSelect: (persona: UserPersona) => void;
}
declare const OnboardingScreen: React.FC<OnboardingScreenProps>;
export default OnboardingScreen;
