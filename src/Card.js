import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className='m-8 mx-14 my-20 grid lg:grid-cols-3 sm:grid-cols-1 gap-4 p-4'>
      {/* card 1 */}
      <div className='card hover:shadow-lg max-w-xl opacity-100 bg-white shadow-md rounded-lg overflow-hidden'>
        <img
          className='w-full h-32 sm:h-48 object-cover'
          src={`${process.env.PUBLIC_URL}/img/Pastries.jpeg`}
          alt='Card Image'
        />
        <div className='m-4 p-2'>
          <span className='font-bold'>
            <Link to='/pastries' className='text-black-500 hover:underline'>
              Breakfast, Pastries & Snacks
            </Link>
          </span>
        </div>
      </div>
      {/* card 2 */}
      <div className='card hover:shadow-lg max-w-xl opacity-100 bg-white shadow-md rounded-lg overflow-hidden'>
        <img
          className='w-full h-32 sm:h-48 object-cover'
          src={`${process.env.PUBLIC_URL}/img/Soups.jpg`}
          alt='Card Image'
        />
        <div className='m-4 p-2'>
          <span className='font-bold'>
            <Link to='/soup' className='text-black-500 hover:underline'>
              Soups & Sauces
            </Link>
          </span>
        </div>
      </div>
      {/* card 3 */}
      <div className='card hover:shadow-lg max-w-xl opacity-100 bg-white shadow-md rounded-lg overflow-hidden'>
        <img
          className='w-full h-32 sm:h-48 object-cover'
          src={`${process.env.PUBLIC_URL}/img/Ricee.jpg`}
          alt='Card Image'
        />
        <div className='m-4 p-2'>
          <span className='font-bold'>
            <Link to='/rice' className='text-black-500 hover:underline'>
              Rice, Pasta & Noodles
            </Link>
          </span>
        </div>
      </div>
      {/* card 4 */}
      <div className='card hover:shadow-lg max-w-xl opacity-100 bg-white shadow-md rounded-lg overflow-hidden'>
        <img
          className='w-full h-32 sm:h-48 object-cover'
          src={`${process.env.PUBLIC_URL}/img/Protein.jpg`}
          alt='Card Image'
        />
        <div className='m-4 p-2'>
          <span className='font-bold'>
            <Link to='/protein' className='text-black-500 hover:underline'>
              Proteins
            </Link>
          </span>
        </div>
      </div>
      {/* card 5 */}
      <div className='card hover:shadow-lg max-w-xl opacity-100 bg-white shadow-md rounded-lg overflow-hidden'>
        <img
          className='w-full h-32 sm:h-48 object-cover'
          src={`${process.env.PUBLIC_URL}/img/Other.jpg`}
          alt='Card Image'
        />
        <div className='m-4 p-2'>
          <span className='font-bold'>
            {' '}
            <Link to='/other' className='text-black-500 hover:underline'>
              Other Dishes
            </Link>
          </span>
        </div>
      </div>
      {/* card 6 */}
      <div className='card hover:shadow-lg max-w-xl opacity-100 bg-white shadow-md rounded-lg overflow-hidden'>
        <img
          className='w-full h-32 sm:h-48 object-cover'
          src={`${process.env.PUBLIC_URL}/img/Drinks.png`}
          alt='Card Image'
        />
        <div className='m-4 p-2'>
          <span className='font-bold'>
            <Link to='/drink' className='text-emerald-950 hover:underline'>
              Drinks
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
