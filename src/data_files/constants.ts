import ogImageSrc from "@images/social.png";
import nutriwattLogo from "@images/nutriwatt-logo.png";



export const SITE = {
  title: "Nutriwatt",
  tagline: "Health & Nutrition Tracking Apps",
  description: "Nutriwatt offers mobile health and nutrition tracking apps to help you achieve your fitness and wellness goals. Track your meals, monitor your progress, and get personalized recommendations.",
  description_short: "Nutriwatt offers mobile health and nutrition tracking apps to help you achieve your fitness and wellness goals.",
  url: "https://screwfast.uk",
  author: "Raphael Levy",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Health & Nutrition Tracking Apps`,
  description: "Achieve your health and fitness goals with Nutriwatt's mobile nutrition tracking apps. Track meals, calculate nutrients automatically, and get personalized recommendations. Perfect for athletes with Strava integration or anyone starting their health journey.",
  image: ogImageSrc,
  logo: nutriwattLogo, // Logo simple pour meta tags
};

export const partnersData = [
    {
        icon: `<img src="/partners/strava-logo.png" alt="Strava" class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5 object-contain" style="background: transparent;" />`,
        name: "Strava",
        href: "https://www.strava.com",
    },
    {
        icon: `<img src="/partners/garmin-logo.svg" alt="Garmin" class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5 object-contain opacity-80 hover:opacity-100 transition-opacity" style="background: transparent;" />`,
        name: "Garmin",
        href: "https://www.garmin.com",
    },
]