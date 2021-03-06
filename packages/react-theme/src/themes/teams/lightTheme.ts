import {
  createBrandColorTokens,
  createNeutralColorTokens,
  sharedColorTokens,
  transparentColorTokens,
  subtleColorTokens,
} from '../../utils/light/index';
import { Theme } from '../../types';
import { brandColors } from '../../global/index';
import { globalTheme } from './globalTheme';
import { createShadowLevelTokens } from '../../utils/shadows';

const neutralColorTokens = createNeutralColorTokens(brandColors.teams);
export const teamsLightTheme: Theme = {
  global: globalTheme,
  alias: {
    color: {
      ...sharedColorTokens,
      neutral: neutralColorTokens,
      subtle: subtleColorTokens,
      transparent: transparentColorTokens,
      brand: createBrandColorTokens(brandColors.teams),
    },
    shadow: createShadowLevelTokens(neutralColorTokens.neutralShadowAmbient, neutralColorTokens.neutralShadowKey),
  },
};
