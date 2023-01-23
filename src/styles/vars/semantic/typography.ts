import { $scale } from '..';

// font family
export const fontFamilySans = $scale.typography.fontFamilyNotoSansKR;

//
// weight
//

export const weightLight = 300;
export const weightRegular = 400;
export const weightMedium = 500;
export const weightSemiBold = 600;
export const weightBold = 700;

//
// letterSpacing
//

export const letterSpacingTightest = '-0.05em';
export const letterSpacingTighter = '-0.03em';
export const letterSpacingTight = '-0.02em';
export const letterSpacingNormal = '0';
export const letterSpacingWide = '0.02em';
export const letterSpacingWider = '0.03em';
export const letterSpacingWidest = '0.05em';

//
// text
//

export const textXSmall = Object.freeze({
  /**
   * 12px
   */
  fontSize: $scale.typography.fontSize1,
  /**
   * 16px
   */
  lineHeight: $scale.typography.lineHeight4,
});

export const textSmall = Object.freeze({
  /**
   * 14px
   */
  fontSize: $scale.typography.fontSize2,
  /**
   * 20px
   */
  lineHeight: $scale.typography.lineHeight5,
});

export const textBase = Object.freeze({
  /**
   * 16px
   */
  fontSize: $scale.typography.fontSize3,
  /**
   * 24px
   */
  lineHeight: $scale.typography.lineHeight6,
});

export const textLarge = Object.freeze({
  /**
   * 18px
   */
  fontSize: $scale.typography.fontSize4,
  /**
   * 28px
   */
  lineHeight: $scale.typography.lineHeight7,
});

export const textXLarge = Object.freeze({
  /**
   * 20px
   */
  fontSize: $scale.typography.fontSize5,
  /**
   * 28px
   */
  lineHeight: $scale.typography.lineHeight7,
});

export const text2XLarge = Object.freeze({
  /**
   * 24px
   */
  fontSize: $scale.typography.fontSize6,
  /**
   * 32px
   */
  lineHeight: $scale.typography.lineHeight8,
});

export const text3XLarge = Object.freeze({
  /**
   * 30px
   */
  fontSize: $scale.typography.fontSize7,
  /**
   * 36px
   */
  lineHeight: $scale.typography.lineHeightTight,
});

export const text4XLarge = Object.freeze({
  /**
   * 36px
   */
  fontSize: $scale.typography.fontSize8,
  /**
   * 40px
   */
  lineHeight: $scale.typography.lineHeightTight,
});

export const text5XLarge = Object.freeze({
  /**
   * 48px
   */
  fontSize: $scale.typography.fontSize9,
  /**
   * 1.25
   */
  lineHeight: $scale.typography.lineHeightTight,
});

export const text6XLarge = Object.freeze({
  /**
   * 60px
   */
  fontSize: $scale.typography.fontSize10,
  /**
   * 1.25
   */
  lineHeight: $scale.typography.lineHeightTight,
});

export const text7XLarge = Object.freeze({
  /**
   * 72px
   */
  fontSize: $scale.typography.fontSize11,
  /**
   * 1.25
   */
  lineHeight: $scale.typography.lineHeightTight,
});

export const text8XLarge = Object.freeze({
  /**
   * 96px
   */
  fontSize: $scale.typography.fontSize12,
  /**
   * 1.25
   */
  lineHeight: $scale.typography.lineHeightTight,
});

export const text9XLarge = Object.freeze({
  /**
   * 128px
   */
  fontSize: $scale.typography.fontSize13,
  /**
   * 1.25
   */
  lineHeight: $scale.typography.lineHeightTight,
});

//
// heading
//

export const h1 = Object.freeze({
  ...text5XLarge,
  fontWeight: weightBold,
});
export const h2 = Object.freeze({
  ...text4XLarge,
  fontWeight: weightBold,
});
export const h3 = Object.freeze({
  ...text3XLarge,
  fontWeight: weightBold,
});
export const h4 = Object.freeze({
  ...text2XLarge,
  fontWeight: weightBold,
});
export const h5 = Object.freeze({
  ...textXLarge,
  fontWeight: weightBold,
});
export const h6 = Object.freeze({
  ...textLarge,
  fontWeight: weightBold,
});

//
// title
//

export const title1Bold = Object.freeze({
  fontSize: $scale.typography.fontSize6,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const title2Bold = Object.freeze({
  fontSize: $scale.typography.fontSize5,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const title3Bold = Object.freeze({
  fontSize: $scale.typography.fontSize4,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const title1Regular = Object.freeze({
  fontSize: $scale.typography.fontSize6,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const title2Regular = Object.freeze({
  fontSize: $scale.typography.fontSize5,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const title3Regular = Object.freeze({
  fontSize: $scale.typography.fontSize4,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});

//
// subtitle
//

export const subtitle1Bold = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const subtitle2Bold = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const subtitle1Regular = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const subtitle2Regular = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});

//
// body
//

export const bodyRelaxed1Bold = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightRelaxed,
  fontWeight: weightBold,
});
export const bodyRelaxed2Bold = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightRelaxed,
  fontWeight: weightBold,
});
export const bodyNormal1Bold = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightNormal,
  fontWeight: weightBold,
});
export const bodyNormal2Bold = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightNormal,
  fontWeight: weightBold,
});
export const bodySnug1Bold = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const bodySnug2Bold = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const bodyRelaxed1Regular = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightRelaxed,
  fontWeight: weightRegular,
});
export const bodyRelaxed2Regular = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightRelaxed,
  fontWeight: weightRegular,
});
export const bodyNormal1Regular = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightNormal,
  fontWeight: weightRegular,
});
export const bodyNormal2Regular = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightNormal,
  fontWeight: weightRegular,
});
export const bodySnug1Regular = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const bodySnug2Regular = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});

//
// caption
//

export const caption1Bold = Object.freeze({
  fontSize: $scale.typography.fontSize1,
  lineHeight: $scale.typography.lineHeightNormal,
  fontWeight: weightBold,
});
export const caption2Bold = Object.freeze({
  fontSize: $scale.typography.fontSize05,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const caption1Regular = Object.freeze({
  fontSize: $scale.typography.fontSize1,
  lineHeight: $scale.typography.lineHeightNormal,
  fontWeight: weightRegular,
});
export const caption2Regular = Object.freeze({
  fontSize: $scale.typography.fontSize05,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});

//
// label
//

export const label1Bold = Object.freeze({
  fontSize: $scale.typography.fontSize5,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const label2Bold = Object.freeze({
  fontSize: $scale.typography.fontSize4,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const label3Bold = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const label4Bold = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const label5Bold = Object.freeze({
  fontSize: $scale.typography.fontSize1,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const label6Bold = Object.freeze({
  fontSize: $scale.typography.fontSize05,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightBold,
});
export const label1Regular = Object.freeze({
  fontSize: $scale.typography.fontSize5,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const label2Regular = Object.freeze({
  fontSize: $scale.typography.fontSize4,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const label3Regular = Object.freeze({
  fontSize: $scale.typography.fontSize3,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const label4Regular = Object.freeze({
  fontSize: $scale.typography.fontSize2,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const label5Regular = Object.freeze({
  fontSize: $scale.typography.fontSize1,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
export const label6Regular = Object.freeze({
  fontSize: $scale.typography.fontSize05,
  lineHeight: $scale.typography.lineHeightSnug,
  fontWeight: weightRegular,
});
