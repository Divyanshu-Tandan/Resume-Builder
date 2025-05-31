"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const ReviewSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Star icon component for ratings
  const StarIcon = ({ filled }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 19"
      fill={filled ? "#FF0000" : "none"}
      stroke={filled ? "#FF0000" : "#333333"}
      xmlns="http://www.w3.org/2000/svg"
      className="md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]"
    >
      <path
        d="M10 0L12.2451 6.56434H19.5106L13.6327 10.6213L15.8779 17.1857L10 13.1287L4.12215 17.1857L6.36729 10.6213L0.489435 6.56434H7.75486L10 0Z"
        strokeWidth="1"
      />
    </svg>
  );

  // Render a star rating component
  const StarRating = ({ rating, hovered }) => {
    return (
      <div className="flex gap-1 mt-1 mb-2 md:mt-2 md:mb-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="star-icon">
            <StarIcon filled={i < rating} />
          </div>
        ))}
        <span
          className={`ml-1 md:ml-2 text-xs md:text-sm ${
            hovered ? "text-red-500" : "text-gray-600"
          } transition-colors duration-300`}
        >
          {rating}.0/5.0
        </span>
      </div>
    );
  };

  const reviewsData = [
    {
      id: 1,
      image: "/Review/R1.jpg",
      title: "Transformed Our Business",
      content:
        "The team delivered beyond our expectations. Their innovative design solutions completely transformed our online presence and significantly boosted our customer engagement. The collaborative approach made the entire process smooth and efficient.",
      author: "Sarah Johnson, CMO at TechVision",
      rating: 5,
    },
    {
      id: 2,
      image: "/Review/R2.jpg",
      title: "Exceptional User Experience Design",
      content:
        "Working with this creative team was a game-changer for our product. They deeply understood our users' needs and created an interface that's not only beautiful but incredibly intuitive. Our user satisfaction scores have increased by 37% since launch.",
      author: "Michael Chen, Product Director",
      rating: 5,
    },
    {
      id: 3,
      image: "/Review/R3.jpg",
      title: "Outstanding Creativity & Support",
      content:
        "From concept to delivery, the entire experience was stellar. The team's creativity and attention to detail exceeded our expectations. What impressed me most was their ongoing support and willingness to iterate until everything was perfect.",
      author: "Emma Lopez, Startup Founder",
      rating: 4,
    },
    {
      id: 4,
      image: "/Review/R4.jpg",
      title: "Reliable & Results-Driven Team",
      content:
        "We've partnered with them for three major projects now, and each time they've delivered exceptional results. Their methodical approach to understanding our business challenges and creating tailored solutions has made them our go-to agency.",
      author: "David Williams, Operations Director",
      rating: 5,
    },
    {
      id: 5,
      image: "/Review/R5.jpg",
      title: "Innovative Problem Solvers",
      content:
        "The complex challenges we presented were met with creative solutions that we hadn't even considered. Their strategic thinking and technical expertise combined to create a product that not only solved our immediate needs but prepared us for future growth.",
      author: "Jennifer Patel, CTO of FinTech",
      rating: 4,
    },
    {
      id: 6,
      image: "/Review/R6.jpg",
      title: "Incredible Design Aesthetic",
      content:
        "The visual identity they created for our brand has received countless compliments. Their design team has an unmatched eye for detail and a talent for translating brand values into visual elements. They've completely elevated our market presence.",
      author: "Robert Kim, Brand Director",
      rating: 5,
    },
  ];

  // Determine reviews layout based on screen width
  const getReviewsLayout = () => {
    if (windowWidth < 640) {
      return reviewsData;
    } else if (windowWidth < 1024) {
      return reviewsData;
    } else {
      return reviewsData;
    }
  };

  const reviews = getReviewsLayout();

  const ReviewCard = ({ id, image, title, content, author, rating }) => (
    <div
      className="review-card flex flex-col w-full mx-auto relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Background shape effect */}
      <div className="card-shape absolute -inset-2 rounded-lg bg-gradient-to-br from-red-600/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"></div>

      {/* Card layout changes between vertical and horizontal based on screen size */}
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Image section */}
        <div className="relative w-full md:w-2/5 h-48 xs:h-56 sm:h-64 md:h-full overflow-hidden">
          {isClient && (
            <>
              <Image
                src={image}
                alt="Reviewer"
                width={300}
                height={359}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300"></div>
            </>
          )}
        </div>

        {/* Content section */}
        <div
          className={`relative bg-white p-2 w-full md:w-3/5 flex flex-col justify-between border-2 ${
            hoveredCard === id ? "border-red-500" : "border-gray-200"
          } transition-all duration-300`}
        >
          {/* Floating circles decoration */}
          <div className="floating-circle-1 absolute -right-10 -top-10 w-20 h-20 rounded-full bg-red-500/10 blur-xl"></div>
          <div className="floating-circle-2 absolute -left-5 -bottom-5 w-16 h-16 rounded-full bg-red-500/10 blur-xl"></div>

          <div>
            <div className="title font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-1 md:mb-2 transition-transform duration-300">
              <p>"{title}"</p>
            </div>
            <StarRating rating={rating} hovered={hoveredCard === id} />
            <div className="mb-3 md:mb-4 h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 overflow-hidden">
              <p
                className={`content text-xs xs:text-sm sm:text-base text-gray-600 ${
                  hoveredCard === id ? "text-gray-800" : ""
                } transition-colors duration-300 line-clamp-4 md:line-clamp-5`}
              >
                {content}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <div
              className="w-6 md:w-8 h-0.5 transition-colors duration-300"
              style={{
                backgroundColor: hoveredCard === id ? "#FF0000" : "#333333",
              }}
            />
            <p
              className={`author text-xs xs:text-sm sm:text-base ${
                hoveredCard === id ? "text-red-500" : "text-gray-700"
              } transition-colors duration-300`}
            >
              {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="review-section"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden bg-gray-50"
    >
      {/* Red accent decorations */}
      <div className="absolute top-0 left-0 h-1 bg-red-500 w-1/4" />
      <div className="absolute top-10 sm:top-15 right-0 h-1 bg-red-500 w-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          animation="slideUp"
          duration={800}
          delay={100}
          easing="spring"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 inline-block relative">
              <span className="relative">
                Proof that the right resume changes everything.
                <span className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 right-0 h-1 bg-red-500" />
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Don't just take our word for it - here's what our User's say -
              <br />
              From click to career — they made it happen!
            </p>
          </div>
        </ScrollReveal>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {reviews.map((review, index) => (
            <ScrollReveal
              key={review.id}
              animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
              duration={800}
              delay={100 + index * 100}
              easing="spring"
              index={index}
              stagger={100}
            >
              <div className="review-item">
                <ReviewCard {...review} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Red accent decoration at bottom */}
      <div className="absolute bottom-10 sm:bottom-12 left-0 h-1 bg-red-500 w-2/5" />
      <div className="absolute bottom-0 right-10 sm:right-20 h-1 bg-red-500 w-1/4" />

      <style jsx global>{`
        .grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(220, 38, 38, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(220, 38, 38, 0.05) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }

        .dots-pattern {
          background-image: radial-gradient(
            rgba(220, 38, 38, 0.2) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }

        .review-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .review-card:hover {
          transform: scale(1.02);
        }

        .review-card:hover .card-shape {
          opacity: 1;
        }

        .review-card:hover .floating-circle-1 {
          background: rgba(220, 38, 38, 0.2);
        }

        .review-card:hover .floating-circle-2 {
          background: rgba(220, 38, 38, 0.2);
        }

        .review-card:hover .title {
          transform: translateX(5px);
        }

        .review-card:hover .author {
          transform: translateX(3px);
        }

        .review-card:hover img {
          transform: scale(1.1);
        }

        .review-card:hover .absolute.inset-0 {
          opacity: 1;
        }

        .star-icon {
          transition: transform 0.3s ease;
        }

        .star-icon:hover {
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .review-card:hover {
            transform: scale(1.01);
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewSection;
