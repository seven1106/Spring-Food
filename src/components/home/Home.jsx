import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div className="">
      <section className="banner -z-50 relative  flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
            Welcome to Spring Food
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            We are the best food delivery service in the city
          </p>
              </div>
              <div className="cover absolute top-0 left-0 right-0"></div>
              <div className="fadout"></div>
      </section>
    </div>
  );
}
