import type { ImageMetadata } from 'astro';
import luluIcon from '../assets/lulu/app-icon.webp';
import dalbitIcon from '../assets/dalbitland/app-icon.webp';
import luluCover from '../assets/lulu/hero-wide.webp';
import dalbitCover from '../assets/dalbitland/hero.webp';

export type Text = { en: string; ko: string };

export type App = {
  id: string;
  path: string;
  name: Text;
  tagline: Text;
  icon: ImageMetadata;
  /** Wide artwork for the card on the Apps home page. */
  cover: ImageMetadata;
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
    cover: luluCover,
    devices: 'iPhone · iPad',
    appStoreUrl: null,
  },
  {
    id: 'dalbitland',
    path: '/dalbitland/',
    name: { en: 'dalbitLand', ko: '달빛랜드' },
    tagline: {
      en: 'A moonlit amusement park of little games for toddlers.',
      ko: '달빛 놀이공원에서 즐기는 아기 놀이 모음.',
    },
    icon: dalbitIcon,
    cover: dalbitCover,
    devices: 'iPhone · iPad',
    appStoreUrl: null,
  },
];

export const appById = (id: string) => apps.find(app => app.id === id)!;
