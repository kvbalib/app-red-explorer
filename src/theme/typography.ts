import { Typography } from './Variants'

export const typography = {
  htmlFontSize: 16,
  [Typography.h1]: {
    fontSize: 96,
    fontWeight: 300,
    letterSpacing: -1.5,
    lineHeight: 1.25,
  },
  [Typography.h2]: {
    fontSize: 60,
    fontWeight: 300,
    letterSpacing: -0.5,
    lineHeight: 1.2,
  },
  [Typography.h3]: {
    fontSize: 48,
    fontWeight: 400,
    lineHeight: 1.167,
  },
  [Typography.h4]: {
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: 0.25,
    lineHeight: 1.235,
  },
  [Typography.h5]: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.334,
  },
  [Typography.h6]: {
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 0.15,
    lineHeight: 1.6,
  },
  [Typography.subtitle1]: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.15,
    lineHeight: 1.75,
  },
  [Typography.subtitle2]: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.1,
    lineHeight: 1.57,
  },
  [Typography.body]: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.5,
    lineHeight: 1.5,
  },
  [Typography.body2]: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.25,
    lineHeight: 1.43,
  },
  [Typography.button]: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
    lineHeight: 1.3,
  },
  [Typography.caption]: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.4,
    lineHeight: 1.66,
  },
  [Typography.overline]: {
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    lineHeight: 2.66,
  },
}