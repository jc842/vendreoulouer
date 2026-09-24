export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Vendre ou Louer — Portail des Décisions Immobilières aux Antilles : Vente, Location & Stratégie Patrimoniale",
  siteName: "vendreoulouer.com",
  domain: "vendreoulouer.com",
  url: "https://vendreoulouer.com",
  siteUrl: "https://vendreoulouer.com",
  description: "Portail d'aide à la décision patrimoniale aux Antilles : arbitrage entre vente immédiate et mise en location, estimation vénale, rentabilité locative, fiscalité des plus-values et mandats notariés.",
  siteDescription: "Portail d'aide à la décision patrimoniale aux Antilles : arbitrage entre vente immédiate et mise en location, estimation vénale, rentabilité locative, fiscalité des plus-values et mandats notariés.",
  defaultAuthor: "L'Équipe Vendre ou Louer",
  repo: "jc842/vendreoulouer",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-dusk",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    colorScheme: "amber",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "111",
    containerId: "tTcIeZGX",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      sidebar: { zoneId: 1, format: "300x250" },
      inContent: { zoneId: 2, format: "728x90" },
      stickyMobile: { zoneId: 3, format: "320x100" },
    },
  },

  legal: {
    editor: "Vendre ou Louer Médias",
    address: "Zone d'Activité Immobilière, Jarry, 97122 Baie-Mahault, Guadeloupe",
    contactEmail: "contact@vendreoulouer.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "arbitrage-patrimonial", label: "Arbitrage Vente vs Location" },
    { id: "estimation-venale", label: "Estimation & Prix au M²" },
    { id: "fiscalite-plus-value", label: "Fiscalité & Régimes Notariés" },
    { id: "gestion-locative", label: "Gestion & Rentabilité Nette" },
  ],
};
