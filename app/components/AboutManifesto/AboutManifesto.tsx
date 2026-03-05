import s from "./AboutManifesto.module.scss";
import clsx from "clsx";
import { useI18n } from "@/i18n";
import Icon, { icons } from "@/ui/icons";
import {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "@/ui/components/Button/Button";
import { useUI } from "@/ui/provider/UIProvider";

export default function AboutManifesto() {
  const { t } = useI18n();
  const { screen } = useUI();

  // swiper setup

  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [current, setCurrent] = useState(1);
  const updateState = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setCurrent(swiper.realIndex + 1);
  };

  // define chapters

  const p = useMemo<Record<number, ReactNode>>(() => {
    return {
      1: (
        <p>
          <em>{t["manifesto.chapter.1.1"]}</em>
          {t["manifesto.chapter.1.2"]}
        </p>
      ),
      2: <p>{t["manifesto.chapter.2.1"]}</p>,
      3: (
        <p>
          {t["manifesto.chapter.3.1"]}
          <em>{t["manifesto.chapter.3.2"]}</em>
          {t["manifesto.chapter.3.3"]}
        </p>
      ),
      4: (
        <p>
          <em>{t["manifesto.chapter.4.1"]}</em>
          {t["manifesto.chapter.4.2"]}
        </p>
      ),
      5: (
        <p>
          <em>{t["manifesto.chapter.5.1"]}</em>
          {t["manifesto.chapter.5.2"]}
        </p>
      ),
      6: (
        <p>
          <em>{t["manifesto.chapter.6.1"]}</em>
          {t["manifesto.chapter.6.2"]}
        </p>
      ),
      7: (
        <p>
          <em>{t["manifesto.chapter.7.1"]}</em>
          {t["manifesto.chapter.7.2"]}
        </p>
      ),
      8: (
        <p>
          {t["manifesto.chapter.7.3"]}
          <em>{t["manifesto.chapter.7.4"]}</em>
          {t["manifesto.chapter.7.5"]}
        </p>
      ),
      9: (
        <p>
          <em>{t["manifesto.chapter.7.6"]}</em>
          {t["manifesto.chapter.7.7"]}
        </p>
      ),
      10: (
        <p>
          <em>{t["manifesto.chapter.7.8"]}</em>
          {t["manifesto.chapter.7.9"]}
        </p>
      ),
    };
  }, [t]);

  // distribute paragraphs into chapters

  const slides = useMemo<number[][]>(() => {
    return screen === "mobile"
      ? [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8, 9, 10],
        ]
      : [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9, 10],
        ];
  }, [screen, t]);

  // force update if slides length changes

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    swiper.update();
    updateState(swiper);
  }, [slides.length]);

  //

  return (
    <section id="manifesto" className={clsx("page-block", s.BackgroundBlock)}>
      <div className={s.BlockContent}>
        <h2 className={s.SectionTitle}>{t["manifesto.title"]}</h2>

        <div className={s.Citation}>
          <icons.quote className={s.OpenQuote} />
          <div className={s.Citation_TextBlock}>
            <p className="lead">{t["manifesto.citation.text"]}</p>
            <p className={s.Citation_Source}>
              {t["manifesto.citation.source"]}
            </p>
          </div>
          <icons.quote className={s.CloseQuote} />
        </div>

        <div className={s.Manifesto}>
          <p
            className={s.Pagination}
          >{`${t["manifesto.pagination"]} ${current}/${slides.length}`}</p>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            allowTouchMove={false}
            spaceBetween={40}
            onSlideChange={(swiper) => updateState(swiper)}
            className={s.Slider}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className={s.Chapter}>
                  {slide.map((id) => (
                    <Fragment key={id}>{p[id]}</Fragment>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={s.SliderControls}>
            <Button
              variant="surface"
              shape="round"
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Icon name="chevron-left" />
            </Button>
            <Button
              variant="surface"
              shape="round"
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Icon name="chevron-right" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
