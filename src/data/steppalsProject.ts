import { steppalslogo } from "@/assets/Steppals logo svg/Steppals";

import store1 from "@/assets/Project-Main/store assets/460x996bb.webp";
import store2 from "@/assets/Project-Main/store assets/460x996bb (1).webp";
import store3 from "@/assets/Project-Main/store assets/460x996bb (2).webp";
import store4 from "@/assets/Project-Main/store assets/460x996bb (3).webp";
import store5 from "@/assets/Project-Main/store assets/460x996bb (4).webp";

import watch1 from "@/assets/Project-Main/Watch app assets/314x392bb.webp";
import watch2 from "@/assets/Project-Main/Watch app assets/314x392bb (1).webp";
import watch3 from "@/assets/Project-Main/Watch app assets/314x392bb (2).webp";
import watch4 from "@/assets/Project-Main/Watch app assets/314x392bb (3).webp";
import watch5 from "@/assets/Project-Main/Watch app assets/314x392bb (4).webp";
import watch6 from "@/assets/Project-Main/Watch app assets/314x392bb (5).webp";

import widget1 from "@/assets/Project-Main/wigdets/1774531052935.jpeg";

import appUiStep1 from "@/assets/Project-Main/Step 1.png";
import appUiNoInternet from "@/assets/Project-Main/No Internet Connection V2.png";

const screenshotModules = import.meta.glob(
  "../assets/Project-Main/Screenshot_*.jpg",
  { eager: true, import: "default" }
) as Record<string, string>;

const appScreens = [
  appUiStep1,
  ...Object.keys(screenshotModules)
    .sort()
    .map((key) => screenshotModules[key]),
  appUiNoInternet,
];

export type SteppalsPlatform =
  | "iOS"
  | "Android"
  | "Apple Watch"
  | "Watch Widget"
  | "iPhone Widget";

export interface AssetSection {
  label: string;
  variant: "phone" | "watch" | "widget" | "screen";
  images: string[];
}

export const steppalsProject = {
  title: "StepPals — Walking App",
  logo: steppalslogo,
  links: {
    website: "https://steppals.co/",
    appStore: "https://apps.apple.com/gb/app/steppals-walking-app/id6747041627",
    playStore: "https://play.google.com/store/apps/details?id=com.benleavitt.steppals",
  },
  platforms: [
    "iOS",
    "Android",
    "Apple Watch",
    "Watch Widget",
    "iPhone Widget",
  ] as SteppalsPlatform[],
  featureTags: [
    "HealthKit",
    "Apple Watch",
    "Widgets",
    "Subscriptions",
    "Gamification",
  ],
  tagline:
    "Struggle to hit your step goals? StepPals makes you care. It's a step tracker — with stakes.",
  description: {
    intro:
      "Your digital companion survives only if you hit your daily steps. It's nostalgic, emotional, and weirdly motivating.",
    whyTitle: "Why StepPals Works",
    whyText:
      "StepPals gives you a reason to walk — every single day. It's not just about fitness data. It's about accountability, habit-building, and keeping your tiny friend alive.",
    whyPoints: [
      "Track daily steps easily",
      "Set goals that challenge you",
      "Build healthy routines that stick",
      "Feel emotionally attached to the outcome",
    ],
    howTitle: "How It Works",
    howPoints: [
      "Set your daily step goal",
      "Walk to keep your StepPal alive",
      "Miss a day? Their health drops",
      "Miss too many? They're gone",
      "Start again with a new Pal — and a new streak",
    ],
    results:
      "StepPals turns basic movement into something you actually look forward to. Whether you're walking for weight loss, energy, or mental clarity — your Pal is counting on you. No login required. No ads. No complicated dashboards.",
    downloadTitle: "Download StepPals if You",
    downloadPoints: [
      "Want to walk more consistently",
      "Need real accountability to move",
      "Are motivated by goals and guilt trips",
      "Miss the fun of old-school digital pets",
      "Are tired of boring health apps",
    ],
    subscription:
      "All subscriptions include a 3-day free trial. StepPals Yearly – $29.99/year · Monthly – $9.99/month · Weekly – $2.99/week.",
  },
  assetSections: [
    {
      label: "Apple Watch",
      variant: "watch",
      images: [watch1, watch2, watch3, watch4, watch5, watch6],
    },
    {
      label: "App Store",
      variant: "phone",
      images: [store1, store2, store3, store4, store5],
    },
    {
      label: "Widgets",
      variant: "widget",
      images: [widget1],
    },
    {
      label: "App Screens",
      variant: "screen",
      images: appScreens,
    },
  ] as AssetSection[],
};
