import { useWindowDimensions } from 'react-native';

export function useFullScreenCameraStyle(ratio = 3 / 4) {
  const window = useWindowDimensions();
  const isPortrait = window.height >= window.width;
  let cameraStyle, contentStyle;

  if (isPortrait) {
    const widthByRatio = window.height * ratio;
    const widthOffsetByRatio = -((widthByRatio - window.width) / 2);

    cameraStyle = { left: widthOffsetByRatio, right: widthOffsetByRatio };
    contentStyle = { left: -widthOffsetByRatio, right: -widthOffsetByRatio };
  } else {
    const heightByRatio = window.width * ratio;
    const heightOffsetByRatio = -((heightByRatio - window.height) / 2);
    cameraStyle = { top: heightOffsetByRatio, bottom: heightOffsetByRatio };
    contentStyle = { top: -heightOffsetByRatio, bottom: -heightOffsetByRatio };
  }

  return { cameraStyle, contentStyle };
}
