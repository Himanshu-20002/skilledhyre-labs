import React from 'react';
import styles from './ReviewsSection.module.css';

const GoogleIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    style={className ? undefined : { marginRight: '4px', display: 'block' }}
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.86-4.53-6.16-4.53z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const DEFAULT_REVIEWS = [
  {
    id: '1',
    initial: 'A',
    name: 'Alex Rivera',
    role: 'CTO, FinTech Scaleup',
    date: '2 months ago',
    avatarClass: styles.avatarBlue,
    rating: '⭐⭐⭐⭐⭐',
    text: '"SkilledHyre transformed our legacy web app into a high-performance Next.js platform. Their AI engineering team built custom analytics that boosted our conversion by 34%."',
  },
  {
    id: '2',
    initial: 'S',
    name: 'Sarah Chen',
    role: 'Head of Product, SaaS',
    date: '3 months ago',
    avatarClass: styles.avatarGreen,
    rating: '⭐⭐⭐⭐⭐',
    text: '"Outstanding AI integration and web development work! Delivered complex machine learning pipelines ahead of schedule. Truly an end-to-end tech partner."',
  },
  {
    id: '3',
    initial: 'M',
    name: 'Michael Vance',
    role: 'Founder, E-Commerce Growth',
    date: '1 month ago',
    avatarClass: styles.avatarPurple,
    rating: '⭐⭐⭐⭐⭐',
    text: '"Their technical SEO and performance optimization took our site page load from 4.2s down to 0.8s. Organic search traffic doubled within 60 days."',
  },
  {
    id: '4',
    initial: 'D',
    name: 'David K.',
    role: 'VP of Engineering, HealthTech',
    date: '4 months ago',
    avatarClass: styles.avatarOrange,
    rating: '⭐⭐⭐⭐⭐',
    text: '"Top-tier custom software development. SkilledHyre provided senior full-stack & AI talent that seamlessly plugged into our sprint cycles."',
  },
  {
    id: '5',
    initial: 'E',
    name: 'Elena Rostova',
    role: 'Director of Marketing',
    date: '3 weeks ago',
    avatarClass: styles.avatarBlue,
    rating: '⭐⭐⭐⭐⭐',
    text: '"From custom web design to AI-driven SEO automation, the team delivered pixel-perfect execution with exceptional communication throughout."',
  },
];

const DEFAULT_BRANDS = [
  { name: 'Next.js', style: { color: '#ffffff', fontWeight: '800' } },
  { name: 'OpenAI', style: { color: '#10A37F', fontWeight: '800' } },
  { name: 'AWS Cloud', style: { color: '#FF9900', fontWeight: '800' } },
  { name: 'Python AI', style: { color: '#3776AB', fontWeight: '800' } },
  { name: 'TypeScript', style: { color: '#3178C6', fontWeight: '800' } },
  { name: 'Google Cloud', style: { color: '#4285F4', fontWeight: '800' } },
  { name: 'Tailwind CSS', style: { color: '#38BDF8', fontWeight: '800' } },
  { name: 'React Native', style: { color: '#61DAFB', fontWeight: '800' } },
  { name: 'PostgreSQL', style: { color: '#4169E1', fontWeight: '800' } },
];

export default function ReviewsSection({
  title = "What Our Clients Say...",
  subtitle = "Good work asks better questions",
  rating = "4.9",
  stars = "⭐⭐⭐⭐⭐",
  reviewCount = "(148 Verified Client Reviews)",
  reviews = DEFAULT_REVIEWS,
  brandsTitle = "Technologies & Ecosystems We Specialize In",
  brands = DEFAULT_BRANDS,
}) {
  // Duplicate for seamless 360 marquee loop
  const marqueeReviews = [...reviews, ...reviews];
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className={styles.reviewsSectionContainer}>
      {/* Reviews Section */}
      <div className={styles.reviewsMarqueeWrapper}>
        <div className={styles.reviewsHeaderContainer}>
          <div className={styles.reviewsHeaderInspiration}>
            <div className={styles.reviewsHeaderLeft}>
              <h2 className={styles.reviewsMainTitle}>{title}</h2>
              <p className={styles.reviewsMainSubtitle}>{subtitle}</p>
            </div>
            <div className={styles.reviewsHeaderRight}>
              <div className={styles.reviewsSummaryBadge}>
                <GoogleIcon />
                <span className={styles.summaryRating}>{rating}</span>
                <span className={styles.summaryStars}>{stars}</span>
                <span className={styles.summaryCount}>{reviewCount}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.reviewsMarqueeContent}>
          <div className={styles.reviewsMarqueeTrack}>
            {marqueeReviews.map((rev, index) => (
              <div key={`${rev.id}-${index}`} className={styles.reviewCardInspiration}>
                <div className={styles.cardHeaderRow}>
                  <div className={`${styles.authorAvatar} ${rev.avatarClass || styles.avatarBlue}`}>
                    {rev.initial}
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{rev.name}</span>
                    {rev.role && <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginTop: '-2px' }}>{rev.role}</span>}
                    <span className={styles.reviewDate}>{rev.date}</span>
                  </div>
                  <GoogleIcon className={styles.googleIconTop} />
                </div>
                <div className={styles.cardRatingRow}>{rev.rating}</div>
                <p className={styles.cardReviewText}>{rev.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Marquee */}
        <div className={styles.brandsMarqueeWrapper}>
          <div className={styles.brandsMarqueeContainer}>
            <h3 className={styles.brandsMarqueeTitle}>{brandsTitle}</h3>
          </div>
          <div className={styles.brandsMarqueeContent}>
            <div className={styles.brandsMarqueeTrack}>
              {marqueeBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className={styles.brandPill}
                  style={brand.style}
                >
                  {brand.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
