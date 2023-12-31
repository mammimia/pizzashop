'use client';

import {
  bannerImage,
  chili1,
  chili2,
  garlic1,
  garlic2,
  garlic3,
  leaves
} from '@/app/data/pizzas';
import Image from 'next/image';
import React from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from 'react-parallax-mouse';

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern lg:min-h-[768] pt-16">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer
          className="w-full flex flex-col lg:flex-row justify-between items-center"
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
        >
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white">
              <div className="flex-1">
                <div className="font-bangers text-[32px] text-white uppercase tracking-[0.03em]">
                  Best pizza in town
                </div>
                <h1 className="text-6xl lg:text-8xl font-bangers drop-shadow-md">
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild className="relative" factorX={0.2} factorY={0.3}>
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6">
              <div className="flex-1 flex justify-end max-w-sm lg:max-w-max">
                <Image
                  src={bannerImage}
                  alt=""
                  width={550}
                  height={550}
                  priority={1}
                />
              </div>
            </div>

            <MouseParallaxChild
              className="absolute top-6 left-4 hidden xl:flex"
              factorX={0.2}
              factorY={0.3}
            >
              <Image src={chili1} alt="" width={160} height={84} priority={1} />
            </MouseParallaxChild>

            <MouseParallaxChild
              className="absolute top-16 -left-4 hidden xl:flex"
              factorX={0.4}
              factorY={0.4}
            >
              <Image src={chili2} alt="" width={130} height={84} priority={1} />
            </MouseParallaxChild>

            <MouseParallaxChild
              className="absolute top-80 -left-24 hidden xl:flex"
              factorX={0.6}
              factorY={0.6}
            >
              <Image src={garlic1} alt="" width={84} height={72} priority={1} />
            </MouseParallaxChild>

            <MouseParallaxChild
              className="absolute top-[22rem] -left-8 hidden xl:flex"
              factorX={0.3}
              factorY={0.6}
            >
              <Image
                src={garlic2}
                alt=""
                width={100}
                height={72}
                priority={1}
              />
            </MouseParallaxChild>

            <MouseParallaxChild
              className="absolute top-96 -left-20 hidden xl:flex"
              factorX={0.4}
              factorY={1}
            >
              <Image
                src={garlic3}
                alt=""
                width={100}
                height={72}
                priority={1}
              />
            </MouseParallaxChild>

            <MouseParallaxChild
              className="absolute top-96 left-12 hidden xl:flex"
              factorX={0.2}
              factorY={0.2}
            >
              <Image src={leaves} alt="" width={180} height={72} priority={1} />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
