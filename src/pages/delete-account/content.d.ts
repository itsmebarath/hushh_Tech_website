export declare const DELETE_ACCOUNT_ACCORDION_SECTIONS: readonly [{
    readonly id: "how-to";
    readonly icon: "delete_forever";
    readonly iconColor: "text-red-500";
    readonly title: "How to Delete Your Account";
    readonly subtitle: "Step-by-step process";
    readonly content: readonly [{
        readonly step: "1";
        readonly text: "Click the 'Permanently Delete Account' button above.";
    }, {
        readonly step: "2";
        readonly text: "Type DELETE in the confirmation field.";
    }, {
        readonly step: "3";
        readonly text: "Confirm your decision — this cannot be undone.";
    }, {
        readonly step: "4";
        readonly text: "Your product data is erased immediately, and only a minimal de-identified payment audit may remain.";
    }];
}, {
    readonly id: "data-deleted";
    readonly icon: "folder_off";
    readonly iconColor: "text-hushh-blue";
    readonly title: "Data That Will Be Permanently Deleted";
    readonly subtitle: "Profile, history & preferences";
    readonly content: readonly [{
        readonly step: "•";
        readonly text: "Account credentials & profile information";
    }, {
        readonly step: "•";
        readonly text: "Investor profile & preferences";
    }, {
        readonly step: "•";
        readonly text: "Onboarding data & responses";
    }, {
        readonly step: "•";
        readonly text: "Plaid-linked financial connection data";
    }, {
        readonly step: "•";
        readonly text: "KYC verification data";
    }, {
        readonly step: "•";
        readonly text: "Signed NDA records & uploaded PDFs";
    }, {
        readonly step: "•";
        readonly text: "Chat history with AI assistant";
    }, {
        readonly step: "•";
        readonly text: "Uploaded documents & files";
    }, {
        readonly step: "•";
        readonly text: "Privacy settings & data vault";
    }];
}, {
    readonly id: "retention";
    readonly icon: "history_toggle_off";
    readonly iconColor: "text-ios-yellow";
    readonly title: "Data Retention Policy";
    readonly subtitle: "What we keep for compliance";
    readonly content: readonly [{
        readonly step: "→";
        readonly text: "Profile, onboarding, Plaid, NDA, KYC, chat, and file data are deleted immediately.";
    }, {
        readonly step: "→";
        readonly text: "Only a minimal de-identified payment audit is retained for compliance.";
    }, {
        readonly step: "→";
        readonly text: "We do not keep your onboarding, profile, or financial aggregation history after deletion.";
    }, {
        readonly step: "→";
        readonly text: "If you sign in again later, you will start with a brand-new empty account.";
    }];
}, {
    readonly id: "notice";
    readonly icon: "warning";
    readonly iconColor: "text-ios-red";
    readonly title: "Important Notice";
    readonly subtitle: "Read before proceeding";
    readonly content: readonly [{
        readonly step: "!";
        readonly text: "This action is permanent and cannot be undone.";
    }, {
        readonly step: "!";
        readonly text: "You will lose access to all Hushh services immediately.";
    }, {
        readonly step: "!";
        readonly text: "Resolve any active investments or pending transactions before deleting.";
    }, {
        readonly step: "!";
        readonly text: "Signing in again later does not restore the deleted account or its data.";
    }, {
        readonly step: "!";
        readonly text: "Contact support@hushh.ai if you need help before deleting.";
    }];
}];
