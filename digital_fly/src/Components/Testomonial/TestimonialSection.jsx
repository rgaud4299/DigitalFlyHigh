// TestimonialSection.jsx
import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?auto=format&fit=crop&h=153&q=80",
    name: "Furkan Giray",
    role: "Web Developer",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?auto=format&fit=crop&h=153&q=80",
    name: "Furkan Giray",
    role: "Web Developer",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?auto=format&fit=crop&h=153&q=80",
    name: "Jane Doe",
    role: "UI/UX Designer",
    rating: 5,
    text:
      "Doloremque aliquam repellat illum vel, corporis inventore voluptas laborum. Dolorum asperiores magni minus quia incidunt.",
  },
    {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?auto=format&fit=crop&h=153&q=80",
    name: "Furkan Giray",
    role: "Web Developer",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?auto=format&fit=crop&h=153&q=80",
    name: "Furkan Giray",
    role: "Web Developer",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?auto=format&fit=crop&h=153&q=80",
    name: "Jane Doe",
    role: "UI/UX Designer",
    rating: 5,
    text:
      "Doloremque aliquam repellat illum vel, corporis inventore voluptas laborum. Dolorum asperiores magni minus quia incidunt.",
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="relative w-full bg-page-bg"
    >

        <div
        className="absolute inset-0  bg-center opacity-0 z-0"
        style={{
          backgroundImage: `url('https://digitalflyhigh.in/images/background/laew%20(3).jpg')`,
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 py-20 z-10">
        {/* Title */}
        <div className="text-center mb-10">
           <p className="text-sky-400 font-medium text-sm">
            [ <span className="text-white"> Testomonial </span> ]
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mt-1">
            What our clients say
          </h2>
         
         
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 3 }, // 2 cards on tablet+
          }}
        >
          {testimonials.map((t,idx) => (
            <SwiperSlide key={idx}>
              <article
                className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden mx-auto"
                style={{ minHeight: 260,maxHeight: 300, maxWidth: 400 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* avatar */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-yellow-200"
                  />

                  <div>
                    {/* stars */}
                    <div className="flex items-center gap-1 mb-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>

                    {/* name & role */}
                    <h3 className="text-xl font-bold text-[#3b2a26]">{t.name}</h3>
                    <p className="text-sm text-amber-600 font-semibold">{t.role}</p>
                  </div>
                </div>

                {/* body */}
                <p className="text-center italic text-gray-700 leading-relaxed mb-8">
                  {t.text}
                </p>

                {/* quote icon */}
                <div className="flex justify-center">
                  <span className="text-4xl text-yellow-400">
                    <FaQuoteRight />
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
