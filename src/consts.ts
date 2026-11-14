export const SITE_URL = 'https://monibo.app';

/** Contact for support, privacy requests and App Review. */
export const CONTACT_EMAIL = 'hola@monibo.app';
export const OWNER = 'Pedro Serra Comas';

/** Monibo's App Store id. Set it to null to show "Coming soon" instead of the download buttons. */
export const APP_STORE_ID: string | null = '6832778503';

/** Country-neutral App Store link: Apple opens the visitor's own storefront. */
export const APP_STORE_URL: string | null = APP_STORE_ID ? `https://apps.apple.com/app/id${APP_STORE_ID}` : null;

/** Apple's Standard Licensed Application End User License Agreement. */
export const APPLE_EULA_URL = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

/** Monibo Pro prices in euros, as set in App Store Connect. */
export const PRICES = {
	monthly: 1.99,
	yearly: 14.99,
	lifetime: 39.99,
	trialDays: 14,
};

/** Date shown on the privacy policy and terms (update it when they change). */
export const LEGAL_UPDATED = '2026-11-14';
