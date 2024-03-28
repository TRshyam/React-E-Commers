import React from 'react';

export default function YourComponent({ bgGradientFrom, bgGradientTo, imageSrc, content }) {
  console.log(bgGradientFrom)
  return (
    <div className={`bg-gradient-to-r from-regal-blue-ad to-light-blue-ad cardWH  rounded-md relative overflow-hidden`}>
      <div className='absolute top-0 h-full left-0 flex items-center justify-center'>
        <div className='space-y-4 p-8 z-10 text-sandel'>
          {/* Content */}
          {content && (
            <>
              <p>{content.subtitle}</p>
              <h1 className='w-2/3 font-bold'>{content.title}</h1>
              <button className="text-black bg-light font-semibold p-1 px-5 rounded">
                View All
              </button>
            </>
          )}
        </div>
      </div>

      {/* Image */}
      {imageSrc && <img src={imageSrc} className='absolute top-6 right-1 h-5/6 object-cover' alt="Ad banner" />}
    </div>
  );
}
