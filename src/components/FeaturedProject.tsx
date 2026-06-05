import { useEffect, useRef, useState } from "react";
import { ExternalLink, Globe, Smartphone, Watch } from "lucide-react";
import {
  steppalsProject,
  type AssetSection,
  type SteppalsPlatform,
} from "@/data/steppalsProject";
import "@/styles/FeaturedProject.css";

const platformIcon = (platform: SteppalsPlatform) => {
  if (platform === "Apple Watch" || platform === "Watch Widget") {
    return <Watch size={11} />;
  }
  if (platform === "iOS" || platform === "Android" || platform === "iPhone Widget") {
    return <Smartphone size={11} />;
  }
  return <Globe size={11} />;
};

const SCREEN_PER_ROW = 16;
const SCREEN_ASSET_WIDTH = 216;
const SCREEN_GAP = 14;

const chunkImages = (images: string[], size: number) => {
  if (!images.length) return [];

  const rows: string[][] = [];
  for (let i = 0; i < images.length; i += size) {
    const row = [...images.slice(i, i + size)];
    let pad = 0;
    while (row.length < size) {
      row.push(images[pad % images.length]);
      pad += 1;
    }
    rows.push(row);
  }
  return rows;
};

function ScreenScrollRow({ images, rowIndex }: { images: string[]; rowIndex: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);
  const animFrameRef = useRef(0);
  const loopedImages = [...images, ...images, ...images];
  const singleSetWidth = images.length * (SCREEN_ASSET_WIDTH + SCREEN_GAP);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.35 + (rowIndex % 3) * 0.08;

    const animate = () => {
      if (!isPaused) {
        positionRef.current += speed;
        if (positionRef.current >= singleSetWidth) {
          positionRef.current -= singleSetWidth;
        }
        track.style.transform = `translateX(-${positionRef.current}px)`;
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPaused, singleSetWidth, rowIndex]);

  return (
    <div
      className="featured-project__screen-row"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="featured-project__screen-track-wrap">
        <div ref={trackRef} className="featured-project__screen-track">
          {loopedImages.map((src, i) => (
            <div key={`${rowIndex}-${i}`} className="featured-project__asset featured-project__asset--screen">
              <img src={src} alt={`StepPals App Screen ${rowIndex * SCREEN_PER_ROW + (i % images.length) + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const reorderScreenRows = (rows: string[][]) => {
  if (rows.length < 2) return rows;

  const result = [...rows];
  const last = result.pop()!;
  result.splice(1, 0, last);

  if (result.length >= 5) {
    const fifth = result.splice(4, 1)[0];
    result.push(fifth);
  }

  return result;
};

function ScreenGallery({ images, label }: { images: string[]; label: string }) {
  const rows = reorderScreenRows(chunkImages(images, SCREEN_PER_ROW));

  return (
    <div className="featured-project__gallery-row reveal" data-delay="200">
      <p className="featured-project__gallery-label">{label}</p>
      <div className="featured-project__screen-rows">
        {rows.map((row, i) => (
          <ScreenScrollRow key={i} images={row} rowIndex={i} />
        ))}
      </div>
    </div>
  );
}

function AssetRow({ section }: { section: AssetSection }) {
  if (section.variant === "screen") {
    return <ScreenGallery images={section.images} label={section.label} />;
  }

  return (
    <div className="featured-project__gallery-row reveal" data-delay="200">
      <p className="featured-project__gallery-label">{section.label}</p>
      <div
        className={`featured-project__gallery-scroll${
          section.images.length <= 8 ? " featured-project__gallery-scroll--center" : ""
        }`}
      >
        {section.images.map((src, i) => (
          <div
            key={`${section.label}-${i}`}
            className={`featured-project__asset featured-project__asset--${section.variant}`}
          >
            <img
              src={src}
              alt={`StepPals ${section.label} ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedProject() {
  const { title, logo, links, platforms, featureTags, tagline, description, assetSections } =
    steppalsProject;

  return (
    <div className="featured-project">
      <div className="container px-4 md:px-8 mb-10">
        <div className="text-center reveal" data-delay="0">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase">
            Featured Project
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8">
        <div className="featured-project__card reveal-scale" data-delay="100">
          <div className="featured-project__display">
            <div
              className="featured-project__logo"
              dangerouslySetInnerHTML={{ __html: logo }}
            />
            <h2 className="featured-project__title">
              {title.split(" — ")[0]}{" "}
              <span className="text-gradient">{title.split(" — ")[1]}</span>
            </h2>

            <div className="featured-project__platforms">
              {platforms.map((p) => (
                <span key={p} className="featured-project__platform">
                  {platformIcon(p)}
                  {p}
                </span>
              ))}
            </div>

            <div className="featured-project__ctas">
              <a
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-project__cta featured-project__cta--primary"
              >
                <Globe size={14} />
                Visit Website
              </a>
              <a
                href={links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-project__cta"
              >
                <ExternalLink size={14} />
                App Store
              </a>
              <a
                href={links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-project__cta"
              >
                <ExternalLink size={14} />
                Google Play
              </a>
            </div>

            <div className="featured-project__tags">
              {featureTags.map((tag) => (
                <span key={tag} className="featured-project__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="featured-project__inner">
            <div className="featured-project__description">
              <p className="featured-project__lead">
                {tagline} {description.intro}
              </p>

              <div className="featured-project__desc-grid">
                <div className="featured-project__desc-col">
                  <h3 className="featured-project__section-title">{description.whyTitle}</h3>
                  <ul className="featured-project__list">
                    {description.whyPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="featured-project__desc-col">
                  <h3 className="featured-project__section-title">{description.howTitle}</h3>
                  <ul className="featured-project__list">
                    {description.howPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="featured-project__summary">{description.results}</p>

              <div className="featured-project__chips">
                {description.downloadPoints.map((point) => (
                  <span key={point} className="featured-project__chip">
                    {point}
                  </span>
                ))}
              </div>

              <p className="featured-project__subscription">{description.subscription}</p>
            </div>

            <div className="featured-project__gallery">
              {assetSections.map((section) => (
                <AssetRow key={section.label} section={section} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="featured-project__divider container px-4 md:px-8 mt-16" />
    </div>
  );
}
