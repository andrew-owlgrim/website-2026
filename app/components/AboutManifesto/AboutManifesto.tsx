import s from "./AboutManifesto.module.scss";
import clsx from "clsx";
import { useI18n } from "@/i18n";
import Icon, { icons } from "@/ui/icons";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "@/ui/components/Button/Button";

export default function AboutManifesto() {
  const { t } = useI18n();

  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [current, setCurrent] = useState(1);
  const updateState = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setCurrent(swiper.realIndex + 1);
  };

  return (
    <section id="manifesto" className={clsx("page-block", s.BackgroundBlock)}>
      <div className={s.BlockContent}>
        <h2 className={s.SectionTitle}>{t["manifesto.title"]}</h2>

        <div className={s.Manifesto}>
          <p
            className={s.Pagination}
          >{`${t["manifesto.pagination"]} ${current}/3`}</p>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            allowTouchMove={false}
            spaceBetween={40}
            onSlideChange={(swiper) => updateState(swiper)}
            className={s.Slider}
          >
            <SwiperSlide>
              <div className={s.Chapter}>
                <p>
                  <em>{t["manifesto.chapter.1.1"]}</em>
                  {t["manifesto.chapter.1.2"]}
                </p>
                <p>{t["manifesto.chapter.2.1"]}</p>
                <p>
                  {t["manifesto.chapter.3.1"]}
                  <em>{t["manifesto.chapter.3.2"]}</em>
                  {t["manifesto.chapter.3.3"]}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.Chapter}>
                <p>
                  <em>{t["manifesto.chapter.4.1"]}</em>
                  {t["manifesto.chapter.4.2"]}
                </p>
                <p>
                  <em>{t["manifesto.chapter.5.1"]}</em>
                  {t["manifesto.chapter.5.2"]}
                </p>
                <p>
                  <em>{t["manifesto.chapter.6.1"]}</em>
                  {t["manifesto.chapter.6.2"]}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.Chapter}>
                <p>
                  <em>{t["manifesto.chapter.7.1"]}</em>
                  {t["manifesto.chapter.7.2"]}
                </p>
                <p>
                  {t["manifesto.chapter.7.3"]}
                  <em>{t["manifesto.chapter.7.4"]}</em>
                  {t["manifesto.chapter.7.5"]}
                </p>
                <p>
                  <em>{t["manifesto.chapter.7.6"]}</em>
                  {t["manifesto.chapter.7.7"]}
                </p>
                <p>
                  <em>{t["manifesto.chapter.7.8"]}</em>
                  {t["manifesto.chapter.7.9"]}
                </p>
              </div>
            </SwiperSlide>
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
      </div>
    </section>
  );
}
