// svg imports
import star from "./svg/stars.svg";
import hand_drawn_arrow from "./svg/hand-drawn-arrow.svg";

// png imports
import auth_background from "./png/bg-pattern.png";
import avatar_group from "./png/avatar-group.png";
// Exported code

export interface Iimage {
  src: string;
  alt: string;
}

// SVG IMAGES
export const STAR: Iimage = { src: star, alt: "image of star" };
export const HAND_DRAWN_ARROW: Iimage = {
  src: hand_drawn_arrow,
  alt: "hand drawn arrow",
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

// JPEG IMAGES

// WEBP Images
