import type { Text } from './apps';

export type DocPage = { file: string } & Text;

/** Support and policy pages for each app, in tab order. */
export const docSites: Record<string, {
  icon: string;
  touchIcon: string;
  themeColor: string;
  themeColorDark: string;
  /** Theme class shared with the app's landing page. */
  theme?: string;
  pages: DocPage[];
}> = {
  lulu: {
    icon: '/lulu/favicon.png',
    touchIcon: '/lulu/apple-touch-icon.png',
    themeColor: '#bfe3f7',
    themeColorDark: '#1a2541',
    pages: [
      { file: 'support.html', en: 'Support', ko: '고객 지원' },
      { file: 'privacy.html', en: 'Privacy', ko: '개인정보 처리방침' },
      { file: 'licenses.html', en: 'Licenses', ko: '라이선스' },
    ],
  },
  dalbitland: {
    icon: '/dalbitland/favicon.png',
    touchIcon: '/dalbitland/apple-touch-icon.png',
    themeColor: '#efe5fb',
    themeColorDark: '#090b24',
    theme: 'theme-dalbit',
    pages: [
      { file: 'support.html', en: 'Support', ko: '고객 지원' },
      { file: 'privacy.html', en: 'Privacy', ko: '개인정보 처리방침' },
    ],
  },
};
