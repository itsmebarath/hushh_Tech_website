import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
const HomePage = React.lazy(() => import('./pages/home/ui'));
const Leadership = React.lazy(() => import('./components/Leadership'));
const Philosophy = React.lazy(() => import('./components/Philosophy'));
import Footer from './components/Footer';
const LoginPage = React.lazy(() => import('./pages/login/ui'));
const Contact = React.lazy(() => import('./pages/Contact'));
import ScrollToTop from './components/ScrollToTop';
import OnboardingShellAutoPadding from './components/OnboardingShellAutoPadding';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
const Consumers = React.lazy(() => import('./pages/services/consumers'));
const Business = React.lazy(() => import('./pages/services/business'));
const SignupPage = React.lazy(() => import('./pages/signup/ui'));
const Faq = React.lazy(() => import('./pages/faq'));
const Career = React.lazy(() => import('./pages/career'));
const CommunityPage = React.lazy(() => import('./pages/community/ui'));
const CommunityPostPage = React.lazy(() => import('./pages/community/post-ui'));
const ReportDetailPage = React.lazy(() => import('./pages/reports/reportDetail'));
const BenefitsPage = React.lazy(() => import('./pages/benefits'));
const PrivacyPolicy = React.lazy(() => import('./pages/privacy-policy'));
const TermsOfService = React.lazy(() => import('./pages/terms-of-service'));
const CareersPrivacyPolicy = React.lazy(() => import('./pages/career-privacy-policy'));
const CaliforniaPrivacyPolicy = React.lazy(() => import('./pages/california-privacy-policy'));
const EUUKPrivacyPolicy = React.lazy(() => import('./pages/eu-uk-privacy-policy'));
const DeleteAccountPage = React.lazy(() => import('./pages/delete-account'));
import { useEffect, ReactNode } from 'react';
const AuthCallback = React.lazy(() => import('./pages/AuthCallback'));
const KYCVerificationPage = React.lazy(() => import('./pages/kyc-verification/page'));
import NDARequestModalComponent from './components/NDARequestModal';
const UserProfilePage = React.lazy(() => import('./pages/user-profile/page'));
const InvestorProfilePage = React.lazy(() => import('./pages/investor-profile'));
const KYCFormPage = React.lazy(() => import('./pages/kyc-form/page'));
const DiscoverFundA = React.lazy(() => import('./pages/discover-fund-a'));
const SellTheWallPage = React.lazy(() => import('./pages/sell-the-wall'));
const AIPoweredBerkshirePage = React.lazy(() => import('./pages/ai-powered-berkshire'));
const UserRegistration = React.lazy(() => import('./pages/UserRegistration'));
import ProtectedRoute from './components/ProtectedRoute';
const YourProfilePage = React.lazy(() => import('./pages/your-profile'));
const HushhUserProfilePage = React.lazy(() => import('./pages/hushh-user-profile'));
const ViewPreferencesPage = React.lazy(() => import('./pages/hushh-user-profile/view'));
const PrivacyControlsPage = React.lazy(() => import('./pages/hushh-user-profile/privacy'));
const PublicHushhProfilePage = React.lazy(() => import('./pages/hushhid'));
const PublicInvestorProfilePage = React.lazy(() => import('./pages/investor/PublicInvestorProfile'));
const HushhIDHeroDemo = React.lazy(() => import('./pages/hushhid-hero-demo'));
const FinancialLinkPage = React.lazy(() => import('./pages/onboarding/financial-link/ui'));
const OnboardingStep1 = React.lazy(() => import('./pages/onboarding/step-1/ui'));
const OnboardingStep2 = React.lazy(() => import('./pages/onboarding/step-2/ui'));
const OnboardingStep3 = React.lazy(() => import('./pages/onboarding/step-3/ui'));
const OnboardingStep4 = React.lazy(() => import('./pages/onboarding/step-4/ui'));
const OnboardingStep5 = React.lazy(() => import('./pages/onboarding/step-5/ui'));
const OnboardingStep6 = React.lazy(() => import('./pages/onboarding/step-6/ui'));
const OnboardingStep7 = React.lazy(() => import('./pages/onboarding/step-7/ui'));
const OnboardingReviewStep = React.lazy(() => import('./pages/onboarding/step-8/ui'));
const OnboardingBankDetailsStep = React.lazy(() => import('./pages/onboarding/step-9/ui'));
const VerifyIdentityPage = React.lazy(() => import('./pages/onboarding/verify-identity/ui'));
const VerifyCompletePage = React.lazy(() => import('./pages/onboarding/verify-complete/ui'));
const MeetCeoPage = React.lazy(() => import('./pages/onboarding/meet-ceo/ui'));
import HushhTechHeader from './components/hushh-tech-header/HushhTechHeader';
const InvestorGuidePage = React.lazy(() => import('./pages/onboarding/InvestorGuide'));
const KYCDemoPage = React.lazy(() => import('./pages/kyc-demo'));
const KycFlowPage = React.lazy(() => import('./pages/kyc-flow'));
const A2APlaygroundPage = React.lazy(() => import('./pages/a2a-playground'));
const ReceiptGeneratorPage = React.lazy(() => import('./pages/receipt-generator'));
const DeveloperDocsPage = React.lazy(() => import('./pages/developer-docs'));
import MobileBottomNav from './components/MobileBottomNav';
const HushhAIPage = React.lazy(() => import('./hushh-ai/pages'));
import { LoginPage as HushhAILoginPage, SignupPage as HushhAISignupPage } from './hushh-ai/presentation/pages';
const KaiApp = React.lazy(() => import('./kai/pages'));
const HushhStudioApp = React.lazy(() => import('./hushh-studio/pages'));
import GlobalNDAGate from './components/GlobalNDAGate';
const SignNDAPage = React.lazy(() => import('./pages/sign-nda'));
const DocumentViewerPage = React.lazy(() => import('./pages/document-viewer'));
const NDAAdminPage = React.lazy(() => import('./pages/nda-admin'));
import { AuthSessionProvider, useAuthSession } from './auth/AuthSessionProvider';
import AuthRequiredRoute from './components/AuthRequiredRoute';
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Google Analytics configuration
const GA_TRACKING_ID = 'G-R58S9WWPM0';
const KaiIndiaApp = React.lazy(() => import('./kai-india/pages'));

// Content wrapper component that applies a consistent top padding
const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-20">
      {children}
    </div>
  );
};

// Consolidated visibility logic - determines which components to show based on route
const useLayoutVisibility = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  
  // Routes where we should NEVER show global footer/mobile nav
  const isSpecialApp = path.startsWith('/hushh-ai') || 
                       path.startsWith('/kai') || 
                       path.startsWith('/studio') || 
                       path.startsWith('/auth/callback');

  // Mobile nav only shows on core app pages
  const isCoreAppPage = path === '/' || 
                        path === '/discover-fund-a' || 
                        path === '/community' || 
                        path.startsWith('/hushh-user-profile');

  return {
    showNavbar: false, // Unified premium header used instead
    showFooter: !isSpecialApp,
    showMobileNav: !isSpecialApp && isCoreAppPage,
  };
};

// Google Analytics setup function
const initializeGoogleAnalytics = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID);
  }
};

import { PageSkeleton } from './components/ui/Skeleton';

// (keeping existing imports above)

const AppLayout = () => {
  const { showNavbar, showFooter, showMobileNav } = useLayoutVisibility();
  const { session } = useAuthSession();
  
  return (
    <div className="min-h-screen flex flex-col">
      <HushhTechHeader />
      <ContentWrapper>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/philosophy" element={<Philosophy />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path='/services/consumers' element={<Consumers />} />
          <Route path='/services/business' element={<Business />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/profile' element={
            <AuthRequiredRoute>
              <HushhUserProfilePage />
            </AuthRequiredRoute>
          } />
          <Route path="/career" element={<Career />} />
          <Route path="/career/*" element={<Career />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/terms' element={<TermsOfService />} />
          <Route path='/career-privacy-policy' element={<CareersPrivacyPolicy />} />
          <Route path="/community" element={
            <CommunityPage />
          } />
          <Route path='/california-privacy-policy' element={<CaliforniaPrivacyPolicy />} />
          <Route path='/eu-uk-jobs-privacy-policy' element={<EUUKPrivacyPolicy />} />
          <Route path='/delete-account' element={
            <AuthRequiredRoute>
              <DeleteAccountPage />
            </AuthRequiredRoute>
          } />
          <Route path="/community/*" element={
            <CommunityPostPage />
          } />
          <Route path="/reports/:id" element={

            <ReportDetailPage />

          } />
          <Route path="/auth/callback" element={<AuthCallback />} />
          {/* Investor Onboarding Guide - Public landing page */}
          <Route path="/investor-guide" element={<InvestorGuidePage />} />
          {/* Financial Link — mandatory pre-step before onboarding */}
          <Route path="/onboarding/financial-link" element={
            <ProtectedRoute>
              <FinancialLinkPage />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-1" element={
            <ProtectedRoute>
              <OnboardingStep1 />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-2" element={
            <ProtectedRoute>
              <OnboardingStep2 />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-3" element={
            <ProtectedRoute>
              <OnboardingStep3 />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-4" element={
            <ProtectedRoute>
              <OnboardingStep4 />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-5" element={
            <ProtectedRoute>
              <OnboardingStep5 />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-6" element={
            <ProtectedRoute>
              <OnboardingStep6 />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-7" element={
            <ProtectedRoute>
              <OnboardingStep7 />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-8" element={
            <ProtectedRoute>
              <OnboardingReviewStep />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/step-9" element={
            <ProtectedRoute>
              <OnboardingBankDetailsStep />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/verify" element={
            <ProtectedRoute>
              <VerifyIdentityPage />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/verify-complete" element={
            <ProtectedRoute>
              <VerifyCompletePage />
            </ProtectedRoute>
          } />
          <Route path="/onboarding/meet-ceo" element={
            <ProtectedRoute>
              <MeetCeoPage />
            </ProtectedRoute>
          } />
          <Route path="/hushh-user-profile" element={
            <ProtectedRoute>
              <HushhUserProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/hushh-user-profile/view" element={
            <ProtectedRoute>
              <ViewPreferencesPage />
            </ProtectedRoute>
          } />
          <Route path="/hushh-user-profile/privacy" element={
            <ProtectedRoute>
              <PrivacyControlsPage />
            </ProtectedRoute>
          } />
          <Route path="/profile/:id" element={
            <AuthRequiredRoute>
              <ViewPreferencesPage />
            </AuthRequiredRoute>
          } />
          <Route path="/hushhid/:id" element={<PublicHushhProfilePage />} />
          <Route path="/hushhid-hero-demo" element={<HushhIDHeroDemo />} />
          {/* <Route path="/solutions" element={<SolutionsPage />} /> */}
          <Route path='/kyc-verification' element={

            <KYCVerificationPage />

          } />
          <Route path='/kyc-form' element={

            <KYCFormPage />

          } />
          <Route path='/discover-fund-a' element={

            <DiscoverFundA />

          } />
          <Route path='/sell-the-wall' element={

            <SellTheWallPage />

          } />
          <Route path='/ai-powered-berkshire' element={

            <AIPoweredBerkshirePage />

          } />
          <Route path='/user-registration' element={
            <ProtectedRoute>
              <UserRegistration />
            </ProtectedRoute>
          } />
          <Route path='/nda-form' element={
            <AuthRequiredRoute>
              <NDARequestModalComponent
                session={session}
                onSubmit={(result: string) => {
                  const resLower = (result || "").toLowerCase();
                  // Handle post-submission actions here (case-insensitive)
                  if (resLower === "approved" || resLower === "pending" || resLower === "requested permission") {
                    // Redirect to appropriate page on success
                    window.location.href = "/";
                  }
                }}
              />
            </AuthRequiredRoute>

          } />
          <Route path='/investor-profile' element={
            <ProtectedRoute>
              <InvestorProfilePage />
            </ProtectedRoute>
          } />
          <Route path='/investor/:slug' element={<PublicInvestorProfilePage />} />
          <Route path='/user-profile' element={
            <AuthRequiredRoute>
              <UserProfilePage />
            </AuthRequiredRoute>
          } />
          <Route path='/your-profile' element={
            <AuthRequiredRoute>
              <YourProfilePage />
            </AuthRequiredRoute>
          } />
          <Route path='/kyc-demo' element={<KYCDemoPage />} />
          <Route path='/kyc-flow' element={<KycFlowPage />} />
          <Route path='/a2a-playground' element={<A2APlaygroundPage />} />
          <Route path='/receipt-generator' element={<ReceiptGeneratorPage />} />
          <Route path='/developer-docs' element={<DeveloperDocsPage />} />
          <Route path='/hushh-ai' element={<HushhAIPage />} />
          <Route path='/hushh-ai/login' element={<HushhAILoginPage />} />
          <Route path='/hushh-ai/signup' element={<HushhAISignupPage />} />
          {/* Kai - Financial Intelligence Agent */}
          {/* Real-time AI voice/video financial advisor powered by Gemini 2.0 Flash */}
          <Route path='/kai' element={<KaiApp />} />
          {/* Kai India - Indian Market Intelligence Dashboard */}
          {/* Real-time NSE/BSE market data powered by Gemini 2.5 Flash with Google Search */}
          <Route
            path='/kai-india'
            element={
              <Suspense fallback={<div className="min-h-screen bg-black" />}>
                <KaiIndiaApp />
              </Suspense>
            }
          />
          {/* Hushh Studio - FREE AI Video Generation */}
          {/* Powered by Google Veo 3.1 - No login required, free for Indian audience */}
          <Route path='/studio' element={<HushhStudioApp />} />
          {/* Global NDA Signing Page */}
          <Route path='/sign-nda' element={<SignNDAPage />} />
          <Route path='/document-viewer' element={<DocumentViewerPage />} />
          {/* NDA Admin Page - Password protected view of all NDA agreements */}
          <Route path='/nda-admin' element={<NDAAdminPage />} />
          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </ContentWrapper>
      {showFooter && <Footer />}
      {showMobileNav && <MobileBottomNav />}
    </div>
  );
};

function App() {
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <AuthSessionProvider>
        <Router>
          <ScrollToTop />
          <OnboardingShellAutoPadding />
          <GlobalNDAGate>
            <AppLayout />
          </GlobalNDAGate>
        </Router>
      </AuthSessionProvider>
    </ChakraProvider>
  );
}


export default App;
