import React from 'react';

export default function YourComponent({ bgGradientFrom, bgGradientTo, imageSrc, content }) {
  return (
    <div className={`bg-gradient-to-r from-regal-blue-ad to-light-blue-ad xl:h-[355px] h-[300px] rounded-md relative my-6 mx-4 sm:mx-auto max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl overflow-hidden shadow-lg`}>
      <div className='relative h-full flex flex-col justify-center'>
        <div className='space-y-4 p-8 z-10 text-sandel'>
          {content && (
            <>
              <p className="text-xl md:text-2xl lg:text-3xl">{content.subtitle}</p>
              <h1 className='w-full text-xl md:text-3xl lg:text-4xl font-bold'>{content.title}</h1>
              <button className="text-black bg-light font-semibold p-2 px-6 rounded-md text-sm md:text-base lg:text-lg">
                View All
              </button>
            </>
          )}
        </div>
      </div>

      {imageSrc && <img src={imageSrc} className='absolute 2xl:top-14 top-1/4 right-1 w-auto 2xl:h-2/3 h-3/5 max-h-1/2 object-cover rounded-md shadow-md' alt="Ad banner" />}
    </div>
  );
}
