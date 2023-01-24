import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// TODO: programatically generate this
const fontSizes = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'title1Bold',
  'title2Bold',
  'title3Bold',
  'title1Regular',
  'title2Regular',
  'title3Regular',
  'subtitle1Bold',
  'subtitle2Bold',
  'subtitle1Regular',
  'subtitle2Regular',
  'bodyRelaxed1Bold',
  'bodyRelaxed2Bold',
  'bodyNormal1Bold',
  'bodyNormal2Bold',
  'bodySnug1Bold',
  'bodySnug2Bold',
  'bodyRelaxed1Regular',
  'bodyRelaxed2Regular',
  'bodyNormal1Regular',
  'bodyNormal2Regular',
  'bodySnug1Regular',
  'bodySnug2Regular',
  'caption1Bold',
  'caption2Bold',
  'caption1Regular',
  'caption2Regular',
  'label1Bold',
  'label2Bold',
  'label3Bold',
  'label4Bold',
  'label5Bold',
  'label6Bold',
  'label1Regular',
  'label2Regular',
  'label3Regular',
  'label4Regular',
  'label5Regular',
  'label6Regular',
];

const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: fontSizes }],
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
