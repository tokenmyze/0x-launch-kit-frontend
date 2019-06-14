import { defaultThemeDimensions, FigmaThemeInfo, ThemeDimensions, ThemeModalStyle, ThemeProperties } from './commons';
import customThemeJson from './custom_theme.json';
import { DefaultTheme } from './default_theme';

const modalThemeStyle: ThemeModalStyle = {
    content: {
        backgroundColor: '#202123',
        borderColor: '#000',
        bottom: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '0',
        left: 'auto',
        maxHeight: '90%',
        minWidth: '350px',
        overflow: 'hidden',
        padding: '16px',
        position: 'relative',
        right: 'auto',
        top: 'auto',
    },
    overlay: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '12345',
    },
};

const darkThemeColors: ThemeProperties = {
    background: '#000',
    backgroundERC721: '#000',
    borderColor: '#5A5A5A',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
    buttonBuyBackgroundColor: '#3CB34F',
    buttonCollectibleSellBackgroundColor: '#00AE99',
    buttonConvertBackgroundColor: '#343434',
    buttonConvertBorderColor: '#000',
    buttonConvertTextColor: '#fff',
    buttonErrorBackgroundColor: '#FF6534',
    buttonPrimaryBackgroundColor: '#002979',
    buttonQuaternaryBackgroundColor: '#00AE99',
    buttonSecondaryBackgroundColor: '#3CB34F',
    buttonSellBackgroundColor: '#FF6534',
    buttonTertiaryBackgroundColor: '#F6851B',
    buttonTextColor: '#fff',
    cardImageBackgroundColor: '#EBF0F5',
    cardBackgroundColor: '#202123',
    cardBorderColor: '#000',
    cardTitleColor: '#fff',
    cardTitleOwnerColor: '#3CB34F',
    chartColor: '#00AE99',
    darkBlue: '#002979',
    darkGray: '#474747',
    darkerGray: '#666',
    dropdownBackgroundColor: '#202123',
    dropdownBorderColor: '#000',
    dropdownTextColor: '#fff',
    errorButtonBackground: '#FF6534',
    errorCardBackground: '#FAF4EF',
    errorCardBorder: '#F39E4B',
    errorCardText: '#F68C24',
    ethBoxActiveColor: '#00AE99',
    ethBoxBorderColor: '#5A5A5A',
    ethSetMinEthButtonBorderColor: '#999',
    ethSliderThumbBorderColor: '#5A5A5A',
    ethSliderThumbColor: '#202123',
    gray: '#808080',
    green: '#3CB34F',
    iconLockedColor: '#fff',
    iconUnlockedColor: '#5A5A5A',
    inactiveTabBackgroundColor: '#1B1B1B',
    lightGray: '#B9B9B9',
    logoERC20Color: '#fff',
    logoERC20TextColor: '#fff',
    logoERC721Color: '#00AE99',
    logoERC721TextColor: '#fff',
    marketsSearchFieldBackgroundColor: '#404041',
    marketsSearchFieldBorderColor: '#404041',
    marketsSearchFieldTextColor: '#BFBFBF',
    modalSearchFieldBackgroundColor: '#fff',
    modalSearchFieldBorderColor: '#fff',
    modalSearchFieldPlaceholderColor: '#DEDEDE',
    modalSearchFieldTextColor: '#000',
    myWalletLinkColor: '#fff',
    notificationActive: '#F8F8F8',
    notificationIconColor: '#fff',
    notificationsBadgeColor: '#ff6534',
    numberDecimalsColor: '#5A5A5A',
    red: '#FF6534',
    rowActive: '#1B1B1B',
    simplifiedTextBoxColor: '#1B1B1B',
    stepsProgressCheckMarkColor: '#202123',
    stepsProgressStartingDotColor: '#fff',
    stepsProgressStepLineColor: '#5A5A5A',
    stepsProgressStepLineProgressColor: '#fff',
    stepsProgressStepTitleColor: '#5A5A5A',
    stepsProgressStepTitleColorActive: '#fff',
    tableBorderColor: '#000',
    tdColor: '#fff',
    textColorCommon: '#fff',
    textDark: '#666',
    textInputBackgroundColor: '#1B1B1B',
    textInputBorderColor: '#000',
    textInputTextColor: '#fff',
    textLight: '#999',
    textLighter: '#666',
    thColor: '#B9B9B9',
    tooltipBackgroundColor: '#000',
    tooltipTextColor: '#fff',
    topbarBackgroundColor: '#202123',
    topbarBorderColor: '#000',
    topbarSeparatorColor: '#5A5A5A',
};

// TODO: fill these out to dynamically generate the right stuff given the theme json
const figmaThemeInfoToThemeProperties = (figmaThemeInfo: FigmaThemeInfo): ThemeProperties => {
    const partialThemeProperties: Partial<ThemeProperties> = {
        background: figmaThemeInfo.background.value,
        cardBackgroundColor: figmaThemeInfo.foreground.value,
        dropdownBackgroundColor: figmaThemeInfo.foreground.value,
        ethSliderThumbColor: figmaThemeInfo.foreground.value,
        stepsProgressCheckMarkColor: figmaThemeInfo.foreground.value,
        topbarBackgroundColor: figmaThemeInfo.foreground.value,
        buttonBuyBackgroundColor: figmaThemeInfo.buy.value,
        buttonSecondaryBackgroundColor: figmaThemeInfo.buy.value,
        cardTitleOwnerColor: figmaThemeInfo.buy.value,
        green: figmaThemeInfo.buy.value,
        buttonErrorBackgroundColor: figmaThemeInfo.sell.value,
        buttonSellBackgroundColor: figmaThemeInfo.sell.value,
        errorButtonBackground: figmaThemeInfo.sell.value,
        notificationsBadgeColor: figmaThemeInfo.sell.value,
        red: figmaThemeInfo.sell.value,
        buttonConvertTextColor: figmaThemeInfo.primaryText.value,
        buttonTextColor: figmaThemeInfo.primaryText.value,
        cardTitleColor: figmaThemeInfo.primaryText.value,
        dropdownTextColor: figmaThemeInfo.primaryText.value,
        iconLockedColor: figmaThemeInfo.primaryText.value,
        logoERC20Color: figmaThemeInfo.primaryText.value,
        logoERC20TextColor: figmaThemeInfo.primaryText.value,
        logoERC721TextColor: figmaThemeInfo.primaryText.value,
        modalSearchFieldBackgroundColor: figmaThemeInfo.primaryText.value,
        myWalletLinkColor: figmaThemeInfo.primaryText.value,
        notificationIconColor: figmaThemeInfo.primaryText.value,
        stepsProgressStartingDotColor: figmaThemeInfo.primaryText.value,
        stepsProgressStepLineProgressColor: figmaThemeInfo.primaryText.value,
        stepsProgressStepTitleColorActive: figmaThemeInfo.primaryText.value,
        tdColor: figmaThemeInfo.primaryText.value,
        textColorCommon: figmaThemeInfo.primaryText.value,
        textInputTextColor: figmaThemeInfo.primaryText.value,
        tooltipTextColor: figmaThemeInfo.primaryText.value,
        iconUnlockedColor: figmaThemeInfo.supplementaryText.value,
        numberDecimalsColor: figmaThemeInfo.supplementaryText.value,
        stepsProgressStepLineColor: figmaThemeInfo.supplementaryText.value,
        stepsProgressStepTitleColor: figmaThemeInfo.supplementaryText.value,
        topbarSeparatorColor: figmaThemeInfo.supplementaryText.value,
        ethSliderThumbBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        ethBoxBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        borderColor: figmaThemeInfo.defaultCard.value.borderColor,
        modalSearchFieldBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        buttonConvertBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        cardBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        dropdownBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        ethSetMinEthButtonBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        marketsSearchFieldBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        tableBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        textInputBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
        topbarBorderColor: figmaThemeInfo.defaultCard.value.borderColor,
    };
    return { ...darkThemeColors, ...partialThemeProperties };
};
const figmaThemeInfoToThemeModalStyle = (figmaThemeInfo: FigmaThemeInfo): ThemeModalStyle => {
    return modalThemeStyle;
};
const figmaThemeInfoToThemeDimensions = (figmaThemeInfo: FigmaThemeInfo): ThemeDimensions => {
    const figmaBorderRadius = figmaThemeInfo.defaultCard.value.borderRadius;
    const figmaBorderWidth = figmaThemeInfo.defaultCard.value.borderWidth;
    const figmaBoxShadow = figmaThemeInfo.defaultCard.value.boxShadow;
    const borderRadiusString = figmaBorderRadius ? `${figmaBorderRadius}px` : undefined;
    const borderWidthString = figmaBorderWidth ? `${figmaBorderWidth}px` : undefined;
    const partialThemeDimensions: Partial<ThemeDimensions> = {
        borderRadius: borderRadiusString,
        borderWidth: borderWidthString,
        boxShadow: figmaBoxShadow,
    };
    return { ...defaultThemeDimensions, ...partialThemeDimensions };
};

export class CustomTheme extends DefaultTheme {
    constructor() {
        super();
        const figmaThemeInfo: FigmaThemeInfo = customThemeJson as any;
        console.log('Figma Theme Info', figmaThemeInfo);
        this.componentsTheme = figmaThemeInfoToThemeProperties(figmaThemeInfo);
        this.modalTheme = figmaThemeInfoToThemeModalStyle(figmaThemeInfo);
        this.dimensions = figmaThemeInfoToThemeDimensions(figmaThemeInfo);
    }
}
