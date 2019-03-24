import { useEffect } from "react";
import ReactDOM from "react-dom";

/**
 * Transform an element using pixels instead of percentages.
 * @param {object} ref
 */
export const usePixelTranslateEffect = ref =>
  useEffect(() => {
    if (!ref.current) return;
    const mainEl = ReactDOM.findDOMNode(ref.current);
    const { width, height } = mainEl.getBoundingClientRect();
    const halfWidthRounded = Math.round(width / 2);
    const halfHeightRounded = Math.round(height / 2);
    const halfWidth = width - halfWidthRounded;
    const halfHeight = height - halfHeightRounded;
    mainEl.style.transform = `translate(-${halfWidth}px, -${halfHeight}px)`;
  });
