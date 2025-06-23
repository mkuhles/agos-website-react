import { useEffect, useState } from 'react';
import arrangeCircleElements from './arrangeCircleElements';

const STEP_NUMBER = 50;
const MAX_ANGLE = 2 * Math.PI;
const ANGLE_STEP = (2 * Math.PI) / STEP_NUMBER;
const MAX_OPACITY = 1;
const OPACITY_STEP = 1 / STEP_NUMBER;
// const MAX_RADIUS = 300;
// const RADIUS_STEP = MAX_RADIUS / STEP_NUMBER;

export default function useCircleAnimation() {
  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [windowsize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  const [width, height] = windowsize;
  const vmin = width < height ? width : height;
  console.log('vmin', vmin, 'width', width, 'height', height);
  const maxRadius = vmin * 0.3; // 50px padding
  const radiusStep = maxRadius / STEP_NUMBER;
  console.log('maxRadius', maxRadius, 'radiusStep', radiusStep);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => calculateNextState(prevAngle, MAX_ANGLE, ANGLE_STEP));
      setRadius((prevRadius) => calculateNextState(prevRadius, maxRadius, radiusStep));
      setOpacity((prevOpacity) => calculateNextState(prevOpacity, MAX_OPACITY, OPACITY_STEP));
    }, 25);

    return () => clearInterval(interval);
  }, [ANGLE_STEP, MAX_ANGLE, radiusStep, maxRadius, OPACITY_STEP, MAX_OPACITY]);

  arrangeCircleElements(angle, radius, opacity);

  return;
}

function calculateNextState(previous, max, step) {
  if (previous >= max - step) {
    return max;
  }
  return previous + step;
}