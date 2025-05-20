import { PixelRatio } from 'react-native';

export function dpToPx(dp: number): number {
  return PixelRatio.roundToNearestPixel(dp * PixelRatio.get());;
}
