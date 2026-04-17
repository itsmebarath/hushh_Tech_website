export interface ParsedAddress {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}
export interface ParsedPhone {
    countryCode: string;
    number: string;
}
export interface EnrichedProfileData {
    age?: number;
    dob?: string;
    address?: ParsedAddress;
    phone?: ParsedPhone;
    occupation?: string;
    nationality?: string;
    maritalStatus?: string;
    preferences: ProfilePreferences;
    confidence: number;
    netWorthScore: number;
    netWorthContext?: string;
    sources: GroundingSource[];
    searchQuery: string;
    createdAt: string;
}
export interface ProfilePreferences {
    diet?: string;
    foods?: string[];
    coffeePreferences?: string[];
    chaiPreferences?: string[];
    drinkPreferences?: string[];
    spiciness?: string;
    diningStyle?: string;
    restaurantTypes?: string[];
    deliveryApps?: string[];
    hobbies?: string[];
    colors?: string[];
    likes?: string[];
    dislikes?: string[];
    smokePreferences?: string;
    fashionStyle?: string;
    fashionBrands?: string[];
    hotelPreferences?: string[];
    travelStyle?: string;
    travelDestinations?: string[];
    travelFrequency?: string;
    musicGenres?: string[];
    musicArtists?: string[];
    musicPlatform?: string;
    streamingServices?: string[];
    movieGenres?: string[];
    showsWatching?: string[];
    gamingPlatform?: string;
    fitnessRoutine?: string[];
    healthApps?: string[];
    sleepPattern?: string;
    allergies?: string[];
    healthInsurance?: string[];
    meditationPractice?: string;
    workEnvironment?: string;
    productivityTools?: string[];
    workHours?: string;
    communicationPreference?: string;
    learningStyle?: string;
    brands?: string[];
    techEcosystem?: string;
    smartDevices?: string[];
    aiPreferences?: string[];
    investmentStyle?: string;
    shoppingBehavior?: string;
    paymentPreference?: string;
    socialPersonality?: string;
    socialMediaUsage?: string;
    contentCreation?: string;
    petPreference?: string;
    pets?: string[];
    bookGenres?: string[];
    newsSources?: string[];
    podcasts?: string[];
    vehiclePreference?: string;
    transportMode?: string;
    spiritualBeliefs?: string;
}
export interface GroundingSource {
    title: string;
    uri: string;
}
export declare const PREFERENCE_CATEGORIES: Record<string, {
    label: string;
    icon: string;
    fields: (keyof ProfilePreferences)[];
}>;
export declare const PREFERENCE_FIELD_LABELS: Record<keyof ProfilePreferences, string>;
