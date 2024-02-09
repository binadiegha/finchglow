// svg imports
import star from "./svg/stars.svg";
import hand_drawn_arrow from "./svg/hand-drawn-arrow.svg";

// icons
import bell from "./svg/icons/bell.svg";
import activity from "./svg/icons/activity.svg";
import cms from "./svg/icons/cms.svg";
import collapse from "./svg/icons/collapse.svg";
import config from "./svg/icons/config.svg";
import currency from "./svg/icons/currency.svg";
import dashboard from "./svg/icons/dashboard.svg";
import history from "./svg/icons/history.svg";
import dispute from "./svg/icons/dispute.svg";
import home from "./svg/icons/home.svg";
import plus from "./svg/icons/plus.svg";
import search from "./svg/icons/search.svg";
import user_management from "./svg/icons/user-management.svg";
import arrow_down from "./svg/icons/arrow-down.svg";

// png imports
import auth_background from "./png/bg-pattern.png";
import avatar_group from "./png/avatar-group.png";
import logo from "./png/FT_logo.png";
// Exported code

export interface Iimage {
  src: string;
  alt: string;
}

// SVG IMAGES
export const STAR: Iimage = { src: star, alt: " star" };
export const HAND_DRAWN_ARROW: Iimage = {
  src: hand_drawn_arrow,
  alt: "hand drawn arrow",
};

// SVG Icons
export const BELL_ICON: Iimage = { src: bell, alt: " bell" };
export const ACTIVITY_ICON: Iimage = {
  src: activity,
  alt: " activity",
};
export const CMS_ICON: Iimage = { src: cms, alt: " cms" };
export const COLLAPSE_ICON: Iimage = {
  src: collapse,
  alt: " collapse",
};
export const CONFIG_ICON: Iimage = { src: config, alt: " config" };
export const CURRENCY_ICON: Iimage = {
  src: currency,
  alt: " currency",
};
export const DASHBOARD_ICON: Iimage = {
  src: dashboard,
  alt: " dashboard",
};
export const HISTORY_ICON: Iimage = { src: history, alt: " history" };
export const DISPUTE_ICON: Iimage = { src: dispute, alt: " dispute" };
export const HOME_ICON: Iimage = { src: home, alt: " home" };
export const PLUS_ICON: Iimage = { src: plus, alt: " plus" };
export const SEARCH_ICON: Iimage = { src: search, alt: " search" };
export const USER_MANAGEMENT_ICON: Iimage = {
  src: user_management,
  alt: " user_management",
};
export const ARROW_DOWN: Iimage = {
  src: arrow_down,
  alt: " user_management",
};

// PNG IMAGES
export const AVATAR_GROUP: Iimage = {
  src: avatar_group,
  alt: "grop of avatar images",
};
export const AUTH_BG: Iimage = {
  src: auth_background,
  alt: "auth page background",
};
export const LOGO: Iimage = {
  src: logo,
  alt: "brand logo",
};

// JPEG IMAGES

// WEBP Images
