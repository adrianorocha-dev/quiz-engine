import { Fragment, ReactNode, useEffect, useRef } from "react";

export default function SlideView<T extends unknown>(props: {
  currentSlide: number;
  items: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  introSlide?: ReactNode;
  outroSlide?: ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollToItem = () => {
      const item = scrollRef.current?.querySelector(
        `[data-slide-item="${props.currentSlide}"]`,
      );

      if (!item || !(item instanceof HTMLElement)) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      scrollRef.current?.scrollTo({
        left: item.offsetLeft,
        behavior: reduceMotion ? "instant" : "smooth",
      });
    };

    scrollToItem();

    window.addEventListener("resize", scrollToItem);

    return () => window.removeEventListener("resize", scrollToItem);
  }, [props.currentSlide]);

  return (
    <div ref={scrollRef} className="relative flex flex-1 overflow-x-hidden">
      <div className="flex min-w-full flex-col" data-slide-item="-1">
        {props.introSlide}
      </div>

      {props.items.map((item, index) => (
        <div
          key={props.keyExtractor(item)}
          className="flex min-w-full flex-col"
          data-slide-item={index}
        >
          {props.renderItem(item)}
        </div>
      ))}

      <div
        className="flex min-w-full flex-col"
        data-slide-item={props.items.length}
      >
        {props.outroSlide}
      </div>
    </div>
  );
}
