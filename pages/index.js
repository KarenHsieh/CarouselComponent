import React, { useState, useEffect } from "react";
import IconArrowRight from "../components/Icons/IconArrowRight";
import IconArrowLeft from "../components/Icons/IconArrowLeft";
import IconPlay from "../components/Icons/IconPlay";
import styles from "./index.module.scss";

const mediaList = [
  {
    url:
      "http://res.klook.com/video/upload/c_scale,h_540,vc_h264/c_scale,g_north_west,h_20,l_whitelogo_hz5dq1,o_30,x_70,y_480/c_scale,f_mp4,fl_splice,h_540,l_video:ending_trgtvv/v1499225738/activities/jks1fsdlysazglldbu0n.mp4",
    media_type: "video",
    width: 280,
    height: 210,
    seq: 1
  },
  {
    url: "https://www.youtube.com/embed/Rb7NKWFqOhc",
    media_type: "video",
    width: 280,
    height: 210,
    seq: 1
  },
  {
    url:
      "https://res.klook.com/images/fl_progressive.lossy,q_65,c_fill,w_280,h_210/w_80,x_15,y_15,g_south_east,l_klook_water/activities/nqi6apk26zhs9di705jx/忘憂島,澎湖忘憂島,忘憂島一日遊.jpg",
    media_type: "image",
    width: 280,
    height: 210,
    seq: 1
  },
  {
    url:
      "https://res.klook.com/images/fl_progressive.lossy,q_65,c_fill,w_1290,h_968/w_80,x_15,y_15,g_south_east,l_klook_water/activities/zv7cb8lpojq4lbvc2fbe/忘憂島,澎湖忘憂島,忘憂島一日遊.jpg",
    media_type: "image",
    width: 1290,
    height: 968,
    seq: 2
  }
];

export default function IndexPage() {
  console.log(mediaList);
  return (
    <div>
      <Carousel medias={mediaList} startIndex={0} />
    </div>
  );
}

const Carousel = ({ medias, startIndex }) => {
  const [activeIndex, setActiveIndex] = useState(startIndex);

  const mediaLength = medias.length;

  const handlePrevBtn = () => {
    if (activeIndex === 0) {
      setActiveIndex(mediaLength - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextBtn = () => {
    if (activeIndex === mediaLength - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    setActiveIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div className={styles.wrapper}>
      <MainCarousel
        medias={medias}
        activeIndex={activeIndex}
        handlePrevBtn={handlePrevBtn}
        handleNextBtn={handleNextBtn}
        mediaLength={mediaLength}
      />
    </div>
  );
};

const MainCarousel = (props) => {
  const {
    medias,
    activeIndex,
    handlePrevBtn,
    handleNextBtn,
    mediaLength
  } = props;
  const list = medias.map((media, index) => {
    const { url, media_type } = media;

    const sliderStyle = {
      animation: `round ${parseInt(mediaLength * 5, 10)}s linear infinite`
    };

    const itemClass = [styles.item];
    if (index === activeIndex) {
      itemClass.push(styles.active);
    }

    if (media_type === "image") {
      return (
        <li className={itemClass.join(" ")} key={index} style={sliderStyle}>
          <div
            className={styles.cover}
            style={{ backgroundImage: `url(${url})` }}
          ></div>
          <div className={styles.filters}></div>
          <img className={styles.mainImage} src={url} alt={""} />
        </li>
      );
    } else {
      let domain = new URL(url).hostname;
      // console.log(domain);
      let source = "klook";
      if (domain.indexOf("youtube") >= 0) {
        source = "youtube";
      }
      // console.log(source);
      if (source === "klook") {
        return (
          <li className={itemClass.join(" ")} key={index} style={sliderStyle}>
            <div className={styles.videoContainer}>
              <video
                className={styles.video}
                src={url}
                controls="controls"
                controlsList="nodownload"
                preload="metadata"
                width="800"
                height="450"
              ></video>
            </div>
          </li>
        );
      } else {
        const youtubeIframe = `
        <iframe id="ytplayer" width="800" height="450"
          title="YouTube video player" 
          src="${url}"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;

        return (
          <li className={itemClass.join(" ")} key={index} style={sliderStyle}>
            <div className={styles.videoContainer}>
              <div dangerouslySetInnerHTML={{ __html: youtubeIframe }} />
            </div>
          </li>
        );
      }
    }
  });

  console.log(list);
  return (
    <div className={styles.mainCarousel}>
      <ul>{list}</ul>
      <div
        className={`${styles.arrowButton} ${styles.leftArrow}`}
        onClick={handlePrevBtn}
      >
        <IconArrowLeft />
      </div>
      <div
        className={`${styles.arrowButton} ${styles.rightArrow}`}
        onClick={handleNextBtn}
      >
        <IconArrowRight />
      </div>
    </div>
  );
};
