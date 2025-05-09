'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ data }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
    >
      {data.map((product) => (
        <SwiperSlide key={product.id}>
          <Link href={`/product`} className="text-decoration-none">
            <div className="card text-center position-relative">
              <div className="card-img">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="new-badge">{product.badge}</div>
              <h4 className="chocolate-p my-1 p-0">{product.title}</h4>
              <p className="price text-center mb-2 p-0">{product.price}</p>
              <div>
                <button className="card-btn card-btn-completed" />
              </div>
              <div className="hover-icon position-absolute d-flex flex-column">
                {/* Icons here */}
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
