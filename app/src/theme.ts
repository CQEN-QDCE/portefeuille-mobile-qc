import { Theme } from 'aries-bifold'
import { StyleSheet } from 'react-native'

import Logo from './assets/img/logo-with-text.svg'

interface FontAttributes {
  fontFamily?: string
  fontStyle?: 'normal' | 'italic'
  fontSize: number
  fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  color: string
}

interface InputAttributes {
  padding?: number
  borderRadius?: number
  fontSize?: number
  backgroundColor?: string
  color?: string
  borderWidth?: number
  borderColor?: string
}

interface Inputs {
  label: FontAttributes
  textInput: InputAttributes
  inputSelected: InputAttributes
  singleSelect: InputAttributes
  singleSelectText: FontAttributes
  singleSelectIcon: InputAttributes
  checkBoxColor: InputAttributes
  checkBoxText: FontAttributes
}

interface TextTheme {
  headingOne: FontAttributes
  headingTwo: FontAttributes
  headingThree: FontAttributes
  headingFour: FontAttributes
  normal: FontAttributes
  label: FontAttributes
  labelTitle: FontAttributes
  labelSubtitle: FontAttributes
  labelText: FontAttributes
  caption: FontAttributes
  title: FontAttributes
}

interface BrandColors {
  primary: string
  primaryDisabled: string
  secondary: string
  secondaryDisabled: string
  highlight: string
  modalPrimaryBackground: string
  modalSecondaryBackground: string
  primaryBackground: string
  secondaryBackground: string
  link: string
}

interface SemanticColors {
  error: string
  success: string
  focus: string
}

interface NotificationColors {
  success: string
  successBorder: string
  successIcon: string
  successText: string
  info: string
  infoBorder: string
  infoIcon: string
  infoText: string
  warn: string
  warnBorder: string
  warnIcon: string
  warnText: string
  error: string
  errorBorder: string
  errorIcon: string
  errorText: string
  popupOverlay: string
}

interface GrayscaleColors {
  black: string
  darkGrey: string
  mediumGrey: string
  grey: string
  lightGrey: string
  veryLightGrey: string
  white: string
}

interface ColorPallet {
  brand: BrandColors
  semantic: SemanticColors
  notification: NotificationColors
  grayscale: GrayscaleColors
}

export const borderRadius = 4
export const heavyOpacity = 0.7
export const mediumOpacity = 0.5
export const lightOpacity = 0.35
export const zeroOpacity = 0.0
export const borderWidth = 2

const BrandColors: BrandColors = {
  primary: '#095797',
  primaryDisabled: `rgba(9, 87, 151, ${lightOpacity})`,
  secondary: '#DAE6F0',
  secondaryDisabled: `rgba(218, 230, 240, ${heavyOpacity})`,
  highlight: '#E58271',
  primaryBackground: '#F1F1F2',
  secondaryBackground: '#FFFFFF',
  modalPrimaryBackground: '#FFFFFF',
  modalSecondaryBackground: '#F1F1F2',
  link: '#095797',
}

const SemanticColors: SemanticColors = {
  error: '#CB381F',
  success: '#4F813D',
  focus: '#DAE6F0',
}

const NotificationColors: NotificationColors = {
  success: '#4F813D',
  successBorder: '#C5CAD2',
  successIcon: '#223654',
  successText: '#223654',
  info: '#DAE6F0',
  infoBorder: '#C5CAD2',
  infoIcon: '#095797',
  infoText: '#223654',
  warn: '#F8E69A',
  warnBorder: '#C5CAD2',
  warnIcon: '#E0AD03',
  warnText: '#E0AD03',
  error: '#FFDBD6',
  errorBorder: '#C5CAD2',
  errorIcon: '#CB381F',
  errorText: '#CB381F',
  popupOverlay: `rgba(0, 0, 0, ${mediumOpacity})`,
}

const GrayscaleColors: GrayscaleColors = {
  black: '#000000',
  darkGrey: '#4E5662',
  mediumGrey: '#6B778A',
  grey: '#8893A2',
  lightGrey: '#C5CAD2',
  veryLightGrey: '#F1F1F2',
  white: '#FFFFFF',
}

export const ColorPallet: ColorPallet = {
  brand: BrandColors,
  semantic: SemanticColors,
  notification: NotificationColors,
  grayscale: GrayscaleColors,
}

export const TextTheme: TextTheme = {
  headingOne: {
    fontFamily: 'BCSans-Regular',
    fontSize: 38,
    fontWeight: 'bold',
    color: ColorPallet.grayscale.darkGrey,
  },
  headingTwo: {
    fontFamily: 'BCSans-Regular',
    fontSize: 32,
    fontWeight: 'bold',
    color: ColorPallet.grayscale.darkGrey,
  },
  headingThree: {
    fontFamily: 'BCSans-Regular',
    fontSize: 26,
    fontWeight: 'bold',
    color: ColorPallet.grayscale.darkGrey,
  },
  headingFour: {
    fontFamily: 'BCSans-Regular',
    fontSize: 21,
    fontWeight: 'bold',
    color: ColorPallet.grayscale.darkGrey,
  },
  normal: {
    fontFamily: 'BCSans-Regular',
    fontSize: 18,
    fontWeight: 'normal',
    color: ColorPallet.grayscale.darkGrey,
  },
  label: {
    fontFamily: 'BCSans-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    color: ColorPallet.grayscale.darkGrey,
  },
  labelTitle: {
    fontFamily: 'BCSans-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: ColorPallet.grayscale.darkGrey,
  },
  labelSubtitle: {
    fontFamily: 'BCSans-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    color: ColorPallet.grayscale.darkGrey,
  },
  labelText: {
    fontFamily: 'BCSans-Regular',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: ColorPallet.grayscale.darkGrey,
  },
  caption: {
    fontFamily: 'BCSans-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    color: ColorPallet.grayscale.darkGrey,
  },
  title: {
    fontFamily: 'BCSans-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorPallet.notification.infoText,
  },
}

export const Inputs: Inputs = StyleSheet.create({
  label: {
    ...TextTheme.label,
  },
  textInput: {
    padding: 10,
    borderRadius,
    fontFamily: TextTheme.normal.fontFamily,
    fontSize: 16,
    backgroundColor: ColorPallet.brand.primaryBackground,
    color: ColorPallet.notification.infoText,
    borderWidth: 2,
    borderColor: ColorPallet.brand.secondary,
  },
  inputSelected: {
    borderColor: ColorPallet.brand.primary,
  },
  singleSelect: {
    padding: 12,
    borderRadius: borderRadius * 2,
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  singleSelectText: {
    ...TextTheme.normal,
  },
  singleSelectIcon: {
    color: ColorPallet.grayscale.white,
  },
  checkBoxColor: {
    color: ColorPallet.brand.primary,
  },
  checkBoxText: {
    ...TextTheme.normal,
  },
})

export const Buttons = StyleSheet.create({
  critical: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#D8292F',
  },
  primary: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primary,
  },
  primaryDisabled: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPallet.brand.primaryDisabled,
  },
  primaryText: {
    ...TextTheme.normal,
    fontWeight: 'bold',
    color: ColorPallet.grayscale.white,
    textAlign: 'center',
  },
  primaryTextDisabled: {
    ...TextTheme.normal,
    fontWeight: 'bold',
    color: ColorPallet.grayscale.white,
    textAlign: 'center',
  },
  secondary: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPallet.brand.primary,
  },
  secondaryDisabled: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPallet.brand.secondaryDisabled,
  },
  secondaryText: {
    ...TextTheme.normal,
    fontWeight: 'bold',
    color: ColorPallet.brand.primary,
    textAlign: 'center',
  },
  secondaryTextDisabled: {
    ...TextTheme.normal,
    fontWeight: 'bold',
    color: ColorPallet.brand.secondaryDisabled,
    textAlign: 'center',
  },
})

export const ListItems = StyleSheet.create({
  credentialBackground: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  credentialTitle: {
    ...TextTheme.headingFour,
  },
  credentialDetails: {
    ...TextTheme.caption,
  },
  credentialOfferBackground: {
    backgroundColor: ColorPallet.brand.primaryBackground,
  },
  credentialOfferTitle: {
    ...TextTheme.headingThree,
  },
  credentialOfferDetails: {
    ...TextTheme.normal,
  },
  revoked: {
    backgroundColor: ColorPallet.notification.error,
    borderColor: ColorPallet.notification.errorBorder,
  },
  contactBackground: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  credentialIconColor: {
    color: ColorPallet.notification.infoText,
  },
  contactTitle: {
    fontFamily: TextTheme.title.fontFamily,
    color: ColorPallet.grayscale.darkGrey,
  },
  contactDate: {
    fontFamily: TextTheme.normal.fontFamily,
    color: ColorPallet.grayscale.darkGrey,
    marginTop: 10,
  },
  contactIconBackground: {
    backgroundColor: ColorPallet.brand.primary,
  },
  contactIcon: {
    color: ColorPallet.grayscale.white,
  },
  recordAttributeLabel: {
    ...TextTheme.normal,
  },
  recordContainer: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
  },
  recordBorder: {
    borderBottomColor: ColorPallet.brand.primaryBackground,
  },
  recordLink: {
    color: ColorPallet.brand.link,
  },
  recordAttributeText: {
    ...TextTheme.normal,
  },
  proofIcon: {
    ...TextTheme.headingOne,
  },
  proofError: {
    color: ColorPallet.semantic.error,
  },
  proofListItem: {
    paddingHorizontal: 25,
    paddingTop: 16,
    backgroundColor: ColorPallet.brand.primaryBackground,
    borderTopColor: ColorPallet.brand.secondaryBackground,
    borderBottomColor: ColorPallet.brand.secondaryBackground,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  avatarText: {
    ...TextTheme.headingTwo,
    fontWeight: 'normal',
  },
  avatarCircle: {
    borderRadius: TextTheme.headingTwo.fontSize,
    borderColor: TextTheme.headingTwo.color,
    width: TextTheme.headingTwo.fontSize * 2,
    height: TextTheme.headingTwo.fontSize * 2,
  },
  emptyList: {
    ...TextTheme.normal,
  },
})

export const TabTheme = {
  tabBarStyle: {
    height: 60,
    backgroundColor: ColorPallet.brand.secondaryBackground,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 6,
    shadowColor: ColorPallet.grayscale.black,
    shadowOpacity: 0.1,
    borderTopWidth: 0,
    paddingBottom: 0,
  },
  tabBarActiveTintColor: ColorPallet.brand.primary,
  tabBarInactiveTintColor: ColorPallet.notification.infoText,
  tabBarTextStyle: {
    ...TextTheme.label,
    fontWeight: 'normal',
    paddingBottom: 5,
  },
  tabBarButtonIconStyle: {
    color: ColorPallet.grayscale.white,
  },
  focusTabIconStyle: {
    height: 60,
    width: 60,
    backgroundColor: ColorPallet.brand.primary,
    top: -20,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusTabActiveTintColor: {
    backgroundColor: ColorPallet.brand.secondary,
  },
}

export const NavigationTheme = {
  dark: true,
  colors: {
    primary: ColorPallet.brand.primary,
    background: ColorPallet.brand.primaryBackground,
    card: ColorPallet.brand.primary,
    text: ColorPallet.grayscale.white,
    border: ColorPallet.grayscale.white,
    notification: ColorPallet.grayscale.white,
  },
}

export const HomeTheme = StyleSheet.create({
  welcomeHeader: {
    ...TextTheme.headingOne,
  },
  credentialMsg: {
    ...TextTheme.normal,
  },
  notificationsHeader: {
    ...TextTheme.headingThree,
  },
  noNewUpdatesText: {
    ...TextTheme.normal,
    color: ColorPallet.notification.infoText,
  },
  link: {
    ...TextTheme.normal,
    color: ColorPallet.brand.link,
  },
})

export const SettingsTheme = {
  groupHeader: {
    ...TextTheme.normal,
    marginBottom: 8,
  },
  groupBackground: ColorPallet.brand.secondaryBackground,
  iconColor: ColorPallet.grayscale.white,
  text: {
    ...TextTheme.caption,
    color: ColorPallet.grayscale.darkGrey,
  },
}

export const ChatTheme = {
  leftBubble: {
    backgroundColor: ColorPallet.brand.secondaryBackground,
    borderRadius: 20,
    padding: 4,
    marginLeft: -4,
  },
  rightBubble: {
    backgroundColor: ColorPallet.brand.primary,
    borderRadius: 20,
    padding: 4,
    marginRight: 4,
  },
  leftText: {
    color: ColorPallet.brand.primary,
    fontSize: TextTheme.normal.fontSize,
  },
  rightText: {
    color: ColorPallet.brand.secondary,
    fontSize: TextTheme.normal.fontSize,
  },
  inputToolbar: {
    backgroundColor: ColorPallet.brand.secondary,
    shadowColor: ColorPallet.brand.primaryDisabled,
    borderRadius: 10,
  },
  inputText: {
    lineHeight: undefined,
    fontWeight: '500',
    fontSize: TextTheme.normal.fontSize,
    color: ColorPallet.brand.primary,
  },
  placeholderText: ColorPallet.grayscale.lightGrey,
  sendContainer: {
    marginBottom: 4,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  sendEnabled: ColorPallet.brand.primary,
  sendDisabled: ColorPallet.brand.primaryDisabled,
}

export const OnboardingTheme = {
  container: {
    backgroundColor: ColorPallet.brand.primaryBackground,
  },
  carouselContainer: {
    backgroundColor: ColorPallet.brand.primaryBackground,
  },
  pagerDot: {
    borderColor: ColorPallet.brand.primary,
  },
  pagerDotActive: {
    color: ColorPallet.brand.primary,
  },
  pagerDotInactive: {
    color: ColorPallet.brand.secondary,
  },
  pagerNavigationButton: {
    color: ColorPallet.brand.primary,
  },
  headerTintColor: ColorPallet.grayscale.white,
  headerText: {
    ...TextTheme.headingTwo,
    color: ColorPallet.notification.infoText,
  },
  bodyText: {
    ...TextTheme.normal,
    color: ColorPallet.notification.infoText,
  },
  imageDisplayOptions: {
    fill: ColorPallet.notification.infoText,
  },
}

const LoadingTheme = {
  backgroundColor: ColorPallet.brand.primary,
}

const PINInputTheme = {
  cell: {
    backgroundColor: ColorPallet.grayscale.lightGrey,
    borderColor: ColorPallet.grayscale.lightGrey,
  },
  focussedCell: {
    borderColor: '#3399FF',
  },
  cellText: {
    color: ColorPallet.grayscale.darkGrey,
  },
  icon: {
    color: ColorPallet.grayscale.darkGrey,
  },
}

export const Assets = {
  svg: {
    logo: Logo,
  },
  img: {
    logoSecondary: {
      src: require('./assets/img/logo-large.png'),
      aspectRatio: 1,
      height: '33%',
      width: '33%',
      resizeMode: 'contain',
    },
    logoPrimary: {
      src: require('./assets/img/logo-large-white.png'),
      height: 170,
      width: 170,
    },
  },
} as Theme['Assets']

export const defaultTheme: Theme = {
  ColorPallet,
  TextTheme,
  Buttons,
  heavyOpacity,
  borderRadius,
  borderWidth,
  Inputs,
  ListItems,
  TabTheme,
  NavigationTheme,
  HomeTheme,
  SettingsTheme,
  ChatTheme,
  OnboardingTheme,
  LoadingTheme,
  PINInputTheme,
  Assets,
}
