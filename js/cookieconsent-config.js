/**
 * McBroue Resto-Pub — Configuration CookieConsent v3
 * Conforme à la Loi 25 du Québec
 *
 * GA4 se charge toujours et respecte le Google Consent Mode v2.
 *   - Sans consentement : pings cookieless anonymes (conformes Loi 25)
 *   - Avec consentement : tracking complet
 *
 * Inclusion sur CHAQUE page HTML :
 *   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css">
 *   <script type="module" src="/js/cookieconsent-config.js"></script>
 */

import * as CookieConsent from 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.esm.js';

const CAT_NECESSARY = "necessary";
const CAT_ANALYTICS = "analytics";

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

function updateGtagConsent() {
    const analyticsGranted = CookieConsent.acceptedCategory(CAT_ANALYTICS);
    gtag('consent', 'update', {
        'analytics_storage': analyticsGranted ? 'granted' : 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
    });
}

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: 'box inline',
            position: 'bottom left',
            equalWeightButtons: true,
            flipButtons: false,
        },
        preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false,
        },
    },

    categories: {
        [CAT_NECESSARY]: {
            enabled: true,
            readOnly: true,
        },
        [CAT_ANALYTICS]: {
            enabled: false,
            readOnly: false,
            autoClear: {
                cookies: [
                    { name: /^_ga/ },
                    { name: '_gid' },
                ],
            },
        },
    },

    onFirstConsent: () => updateGtagConsent(),
    onConsent: () => updateGtagConsent(),
    onChange: () => updateGtagConsent(),

    language: {
        default: 'fr',
        translations: {
            fr: {
                consentModal: {
                    title: 'Une p\'tite gorgée de témoins?',
                    description: 'Au McBroue, on respecte ta vie privée comme on respecte une bière froide — sans compromis. On utilise des témoins de navigation pour mesurer la fréquentation du site et améliorer ton expérience. Conformément à la Loi 25 du Québec, ton consentement est requis. Tu peux changer d\'idée en tout temps.',
                    acceptAllBtn: 'Tout accepter',
                    acceptNecessaryBtn: 'Refuser',
                    showPreferencesBtn: 'Gérer mes préférences',
                    footer: '<a href="/politique-de-confidentialite">Politique de confidentialité</a>',
                },
                preferencesModal: {
                    title: 'Préférences de confidentialité',
                    acceptAllBtn: 'Tout accepter',
                    acceptNecessaryBtn: 'Refuser',
                    savePreferencesBtn: 'Enregistrer mes choix',
                    closeIconLabel: 'Fermer',
                    sections: [
                        {
                            title: 'Utilisation des témoins',
                            description: 'On utilise des témoins de navigation pour assurer le bon fonctionnement du site et, avec ton consentement, pour mesurer son utilisation. Tu peux accepter, refuser ou personnaliser ton choix ci-dessous.',
                        },
                        {
                            title: 'Témoins strictement nécessaires',
                            description: 'Ces témoins sont indispensables au bon fonctionnement du site (navigation, sécurité, mémorisation de tes préférences de consentement). Ils ne collectent aucune donnée personnelle à des fins de suivi.',
                            linkedCategory: CAT_NECESSARY,
                        },
                        {
                            title: 'Témoins d\'analyse (Google Analytics)',
                            description: 'Ces témoins nous permettent de mesurer la fréquentation du site et de comprendre comment les visiteurs l\'utilisent afin d\'améliorer ton expérience. Sans ton consentement, seules des données anonymes et agrégées sont transmises (sans identifiant ni cookie persistant).',
                            linkedCategory: CAT_ANALYTICS,
                            cookieTable: {
                                caption: 'Liste des témoins d\'analyse',
                                headers: {
                                    name: 'Nom',
                                    domain: 'Service',
                                    description: 'Description',
                                    expiration: 'Expiration',
                                },
                                body: [
                                    { name: '_ga', domain: 'Google Analytics', description: 'Identifiant unique anonyme pour distinguer les visiteurs.', expiration: '2 ans' },
                                    { name: '_ga_*', domain: 'Google Analytics', description: 'Conserve l\'état de la session pour GA4.', expiration: '2 ans' },
                                ],
                            },
                        },
                        {
                            title: 'Plus d\'informations',
                            description: 'Pour toute question relative à notre utilisation des témoins ou à tes droits, contacte-nous : <a href="mailto:info@mcbroue.com">info@mcbroue.com</a>.',
                        },
                    ],
                },
            },
        },
    },
});

// ─── Thème McBroue : palette doré patiné (Option C) ───
const mcbroueCss = `
:root {
  --cc-bg: #141514;
  --cc-primary-color: #EDEEEC;
  --cc-secondary-color: #A9AFA9;
  --cc-btn-primary-bg: #C9A06E;
  --cc-btn-primary-color: #0A0A0A;
  --cc-btn-primary-border-color: #C9A06E;
  --cc-btn-primary-hover-bg: #DDB984;
  --cc-btn-primary-hover-color: #0A0A0A;
  --cc-btn-primary-hover-border-color: #DDB984;
  --cc-btn-secondary-bg: transparent;
  --cc-btn-secondary-color: #EDEEEC;
  --cc-btn-secondary-border-color: rgba(142,150,152,0.3);
  --cc-btn-secondary-hover-bg: rgba(201,160,110,0.08);
  --cc-btn-secondary-hover-color: #C9A06E;
  --cc-btn-secondary-hover-border-color: #C9A06E;
  --cc-toggle-bg-off: #4A4E4D;
  --cc-toggle-bg-on: #C9A06E;
  --cc-toggle-bg-readonly: #5E6B6B;
  --cc-toggle-knob-bg: #EDEEEC;
  --cc-toggle-knob-icon-color: #0A0A0A;
  --cc-cookie-category-block-bg: #1C1E1D;
  --cc-cookie-category-block-bg-hover: #222423;
  --cc-cookie-category-block-border: rgba(142,150,152,0.13);
  --cc-cookie-table-border: rgba(142,150,152,0.13);
  --cc-overlay-bg: rgba(0, 0, 0, 0.75);
  --cc-overlay-color: #EDEEEC;
  --cc-webkit-scrollbar-bg: #1C1E1D;
  --cc-webkit-scrollbar-bg-hover: #C9A06E;
  --cc-modal-border-radius: 4px;
  --cc-btn-border-radius: 0;
  --cc-pm-section-border-radius: 2px;
  --cc-font-family: 'Libre Franklin', system-ui, -apple-system, sans-serif;
}
#cc-main .cm__title,
#cc-main .pm__title,
#cc-main .pm__section-title {
  font-family: 'Anton', Impact, sans-serif !important;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 1.05;
}
#cc-main .cm__btn,
#cc-main .pm__btn {
  font-family: 'Oswald', sans-serif !important;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  font-size: 0.78rem;
}
#cc-main .cm,
#cc-main .pm {
  border: 1px solid rgba(201,160,110,0.30);
  box-shadow: 0 24px 60px rgba(0,0,0,0.55);
}
#cc-main .cm__desc,
#cc-main .pm__section-desc {
  font-family: 'Libre Franklin', sans-serif !important;
  line-height: 1.65;
}
`;
const style = document.createElement('style');
style.textContent = mcbroueCss;
document.head.appendChild(style);
