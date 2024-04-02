import React from 'react';

export default function YourComponent({ bgGradientFrom, bgGradientTo, imageSrc, content }) {
  console.log(bgGradientFrom)
  console.log(bgGradientTo)
  return (
    <div className={`bg-gradient-to-r from-regal-blue-ad to-light-blue-ad 2xl:h-[355px] h-[300px] rounded-md relative my-6`}>
      <div className='absolute top-0 h-full left-0 flex items-center justify-center'>
        <div className='space-y-4 p-8 z-10 text-sandel'>
          {content && (
            <>
              <p className="text-xl md:text-2xl lg:text-3xl">{content.subtitle}</p>
              <h1 className='w-full text-xl md:text-3xl lg:text-4xl font-bold'>{content.title}</h1>
              <button className="text-black bg-light font-semibold p-1 px-5 rounded-md text-sm md:text-base lg:text-lg">
                View All
              </button>
            </>
          )}
        </div>
      </div>

      {imageSrc && <img src={imageSrc} className='absolute 2xl:top-14 top-1/4 right-1 w-auto 2xl:h-2/3 h-3/5 max-h-1/2 object-cover' alt="Ad banner" />}
    </div>
  );
}
