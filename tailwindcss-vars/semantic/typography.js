"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyRelaxed2Regular = exports.bodyRelaxed1Regular = exports.bodySnug2Bold = exports.bodySnug1Bold = exports.bodyNormal2Bold = exports.bodyNormal1Bold = exports.bodyRelaxed2Bold = exports.bodyRelaxed1Bold = exports.subtitle2Regular = exports.subtitle1Regular = exports.subtitle2Bold = exports.subtitle1Bold = exports.title3Regular = exports.title2Regular = exports.title1Regular = exports.title3Bold = exports.title2Bold = exports.title1Bold = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.text9XLarge = exports.text8XLarge = exports.text7XLarge = exports.text6XLarge = exports.text5XLarge = exports.text4XLarge = exports.text3XLarge = exports.text2XLarge = exports.textXLarge = exports.textLarge = exports.textBase = exports.textSmall = exports.textXSmall = exports.letterSpacingWidest = exports.letterSpacingWider = exports.letterSpacingWide = exports.letterSpacingNormal = exports.letterSpacingTight = exports.letterSpacingTighter = exports.letterSpacingTightest = exports.weightBold = exports.weightSemiBold = exports.weightMedium = exports.weightRegular = exports.weightLight = exports.fontFamilySans = void 0;
exports.label6Regular = exports.label5Regular = exports.label4Regular = exports.label3Regular = exports.label2Regular = exports.label1Regular = exports.label6Bold = exports.label5Bold = exports.label4Bold = exports.label3Bold = exports.label2Bold = exports.label1Bold = exports.caption2Regular = exports.caption1Regular = exports.caption2Bold = exports.caption1Bold = exports.bodySnug2Regular = exports.bodySnug1Regular = exports.bodyNormal2Regular = exports.bodyNormal1Regular = void 0;
const __1 = require("..");
// font family
exports.fontFamilySans = __1.$scale.typography.fontFamilyNotoSansKR;
//
// weight
//
exports.weightLight = 300;
exports.weightRegular = 400;
exports.weightMedium = 500;
exports.weightSemiBold = 600;
exports.weightBold = 700;
//
// letterSpacing
//
exports.letterSpacingTightest = '-0.05em';
exports.letterSpacingTighter = '-0.03em';
exports.letterSpacingTight = '-0.02em';
exports.letterSpacingNormal = '0';
exports.letterSpacingWide = '0.02em';
exports.letterSpacingWider = '0.03em';
exports.letterSpacingWidest = '0.05em';
//
// text
//
exports.textXSmall = Object.freeze({
    /**
     * 12px
     */
    fontSize: __1.$scale.typography.fontSize1,
    /**
     * 16px
     */
    lineHeight: __1.$scale.typography.lineHeight4,
});
exports.textSmall = Object.freeze({
    /**
     * 14px
     */
    fontSize: __1.$scale.typography.fontSize2,
    /**
     * 20px
     */
    lineHeight: __1.$scale.typography.lineHeight5,
});
exports.textBase = Object.freeze({
    /**
     * 16px
     */
    fontSize: __1.$scale.typography.fontSize3,
    /**
     * 24px
     */
    lineHeight: __1.$scale.typography.lineHeight6,
});
exports.textLarge = Object.freeze({
    /**
     * 18px
     */
    fontSize: __1.$scale.typography.fontSize4,
    /**
     * 28px
     */
    lineHeight: __1.$scale.typography.lineHeight7,
});
exports.textXLarge = Object.freeze({
    /**
     * 20px
     */
    fontSize: __1.$scale.typography.fontSize5,
    /**
     * 28px
     */
    lineHeight: __1.$scale.typography.lineHeight7,
});
exports.text2XLarge = Object.freeze({
    /**
     * 24px
     */
    fontSize: __1.$scale.typography.fontSize6,
    /**
     * 32px
     */
    lineHeight: __1.$scale.typography.lineHeight8,
});
exports.text3XLarge = Object.freeze({
    /**
     * 30px
     */
    fontSize: __1.$scale.typography.fontSize7,
    /**
     * 36px
     */
    lineHeight: __1.$scale.typography.lineHeightTight,
});
exports.text4XLarge = Object.freeze({
    /**
     * 36px
     */
    fontSize: __1.$scale.typography.fontSize8,
    /**
     * 40px
     */
    lineHeight: __1.$scale.typography.lineHeightTight,
});
exports.text5XLarge = Object.freeze({
    /**
     * 48px
     */
    fontSize: __1.$scale.typography.fontSize9,
    /**
     * 1.25
     */
    lineHeight: __1.$scale.typography.lineHeightTight,
});
exports.text6XLarge = Object.freeze({
    /**
     * 60px
     */
    fontSize: __1.$scale.typography.fontSize10,
    /**
     * 1.25
     */
    lineHeight: __1.$scale.typography.lineHeightTight,
});
exports.text7XLarge = Object.freeze({
    /**
     * 72px
     */
    fontSize: __1.$scale.typography.fontSize11,
    /**
     * 1.25
     */
    lineHeight: __1.$scale.typography.lineHeightTight,
});
exports.text8XLarge = Object.freeze({
    /**
     * 96px
     */
    fontSize: __1.$scale.typography.fontSize12,
    /**
     * 1.25
     */
    lineHeight: __1.$scale.typography.lineHeightTight,
});
exports.text9XLarge = Object.freeze({
    /**
     * 128px
     */
    fontSize: __1.$scale.typography.fontSize13,
    /**
     * 1.25
     */
    lineHeight: __1.$scale.typography.lineHeightTight,
});
//
// heading
//
exports.h1 = Object.freeze({
    ...exports.text5XLarge,
    fontWeight: exports.weightBold,
});
exports.h2 = Object.freeze({
    ...exports.text4XLarge,
    fontWeight: exports.weightBold,
});
exports.h3 = Object.freeze({
    ...exports.text3XLarge,
    fontWeight: exports.weightBold,
});
exports.h4 = Object.freeze({
    ...exports.text2XLarge,
    fontWeight: exports.weightBold,
});
exports.h5 = Object.freeze({
    ...exports.textXLarge,
    fontWeight: exports.weightBold,
});
exports.h6 = Object.freeze({
    ...exports.textLarge,
    fontWeight: exports.weightBold,
});
//
// title
//
exports.title1Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize6,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.title2Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize5,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.title3Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize4,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.title1Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize6,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.title2Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize5,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.title3Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize4,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
//
// subtitle
//
exports.subtitle1Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.subtitle2Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.subtitle1Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.subtitle2Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
//
// body
//
exports.bodyRelaxed1Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightRelaxed,
    fontWeight: exports.weightBold,
});
exports.bodyRelaxed2Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightRelaxed,
    fontWeight: exports.weightBold,
});
exports.bodyNormal1Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightNormal,
    fontWeight: exports.weightBold,
});
exports.bodyNormal2Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightNormal,
    fontWeight: exports.weightBold,
});
exports.bodySnug1Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.bodySnug2Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.bodyRelaxed1Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightRelaxed,
    fontWeight: exports.weightRegular,
});
exports.bodyRelaxed2Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightRelaxed,
    fontWeight: exports.weightRegular,
});
exports.bodyNormal1Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightNormal,
    fontWeight: exports.weightRegular,
});
exports.bodyNormal2Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightNormal,
    fontWeight: exports.weightRegular,
});
exports.bodySnug1Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.bodySnug2Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
//
// caption
//
exports.caption1Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize1,
    lineHeight: __1.$scale.typography.lineHeightNormal,
    fontWeight: exports.weightBold,
});
exports.caption2Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize05,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.caption1Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize1,
    lineHeight: __1.$scale.typography.lineHeightNormal,
    fontWeight: exports.weightRegular,
});
exports.caption2Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize05,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
//
// label
//
exports.label1Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize5,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.label2Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize4,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.label3Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.label4Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.label5Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize1,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.label6Bold = Object.freeze({
    fontSize: __1.$scale.typography.fontSize05,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightBold,
});
exports.label1Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize5,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.label2Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize4,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.label3Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize3,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.label4Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize2,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.label5Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize1,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
exports.label6Regular = Object.freeze({
    fontSize: __1.$scale.typography.fontSize05,
    lineHeight: __1.$scale.typography.lineHeightSnug,
    fontWeight: exports.weightRegular,
});
