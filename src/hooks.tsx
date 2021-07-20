import { RefObject, useMemo, WheelEvent } from "react";

export const useScrollHorizontal = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
) => {
  const onScrollerWheel = (e: WheelEvent<typeof elementRef.current>) => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += e.deltaY;
    }
  };

  return onScrollerWheel;
};
