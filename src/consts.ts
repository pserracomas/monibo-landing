export const SITE_URL = 'https://monibo.app';

/** Contact for support, privacy requests and App Review. */
export const CONTACT_EMAIL = 'pserracomas@gmail.com';
export const OWNER = 'Pedro Serra Comas';

/**
 * App Store page. Leave null until Monibo is live: the buttons then read
 * "Coming soon to the App Store". Once approved, paste the link, e.g.
 * 'https://apps.apple.com/app/monibo/id0000000000'.
 */
export const APP_STORE_URL: string | null = null;

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
