import type { ImageMetadata } from 'astro';
import luluIcon from '../assets/lulu/app-icon.webp';
import dalbitIcon from '../assets/dalbitland/app-icon.webp';
import luluCover from '../assets/lulu/hero-wide.webp';
import luluCoverDark from '../assets/lulu/hero-wide-night.webp';
import dalbitCover from '../assets/dalbitland/hero-day.webp';
import dalbitCoverDark from '../assets/dalbitland/hero.webp';

export type Text = { en: string; ko: string };

export type App = {
  id: string;
  path: string;
  name: Text;
  tagline: Text;
  icon: ImageMetadata;
  /** Wide artwork for the card on the Apps home page, per site theme. */
  cover: { light: ImageMetadata; dark: ImageMetadata };
  devices: string;
  /** App Store listing; leave null until the app is live to show "Coming soon". */
  appStoreUrl: string | null;
};

export const apps: App[] = [
  {
    id: 'lulu',
    path: '/lulu/',
    name: { en: 'Lulu’s Little Adventures', ko: '루루 어드벤처' },
    tagline: {
      en: 'Wander a garden, a park, a farm and Dalbit Land with Lulu and her friends.',
      ko: '루루와 친구들과 함께 정원, 공원, 농장, 달빛랜드를 거닐어요.',
    },
    icon: luluIcon,
    cover: { light: luluCover, dark: luluCoverDark },
    devices: 'iPhone · iPad',
    appStoreUrl: null,
  },
  {
    id: 'dalbitland',
    path: '/dalbitland/',
    name: { en: 'dalbitLand', ko: '달빛랜드' },
    tagline: {
      en: 'A moonlit amusement park of little games where toddlers play, learn and grow.',
      ko: '달빛 놀이공원에서 놀며 배우고 자라는 아기 놀이 모음.',
    },
    icon: dalbitIcon,
    cover: { light: dalbitCover, dark: dalbitCoverDark },
    devices: 'iPhone · iPad',
    appStoreUrl: null,
  },
];

export const appById = (id: string) => apps.find(app => app.id === id)!;
