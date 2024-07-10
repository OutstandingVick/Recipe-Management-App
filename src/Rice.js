import React, { useState } from 'react';

const Rice = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const recipes = [
    {
      name: 'Jollof Rice',
      img: 'Jollof.png',
      link: 'https://www.instagram.com/reel/C7ADAVNoxox/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Native Spaghetti',
      img: 'Native-Spag.png',
      link: 'https://www.instagram.com/reel/C1W8UlSoakG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chicken Noodles',
      img: 'Chicken-Noodles.png',
      link: 'https://www.instagram.com/reel/C1m6u8BILQK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Complete Noodles',
      img: 'Com-Nodle.png',
      link: 'https://www.instagram.com/reel/C2pTFAcoNFM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Coconut Pepper Steak Rice',
      img: 'Coconut-Pepper.png',
      link: 'https://www.instagram.com/reel/C2tW7mWMj4v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Expensive Noodles',
      img: 'Expen-Noodle.png',
      link: 'https://www.instagram.com/reel/C4sYN0hoq1K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Mutton Pulao',
      img: 'Mutton.png',
      link: 'https://www.instagram.com/reel/C5gJziLolcu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chicken Suya Rice',
      img: 'Chick-Suya.png',
      link: 'https://www.instagram.com/reel/C5QjycXovnj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Asun Pasta',
      img: 'asun-pasta.png',
      link: 'https://www.instagram.com/reel/C8y8a3dxCzN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Stir Fry Beef Noodles',
      img: 'Stir-Fry-Beef.png',
      link: 'https://www.instagram.com/reel/C2wwhGno-iU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Special Native Rice',
      img: 'special-native.png',
      link: 'https://www.instagram.com/reel/C6wKfnLIX2D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Quick Native Rice',
      img: 'Quick-Native.png',
      link: 'https://www.instagram.com/reel/C5fx5Y1McY8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Jollof Pasta',
      img: 'Jollof-Pasta.png',
      link: 'https://www.instagram.com/reel/C2ScRU-IWr8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Stir Fry Pasta',
      img: 'Stir-Fry-Beef.png',
      link: 'https://www.instagram.com/reel/C55wrIMsw_M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Bolognese Pasta Bake',
      img: 'Bolognese.png',
      link: 'https://www.instagram.com/reel/C42Y2A9u5Sa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Pineapple Fried Rice',
      img: 'pineapple-fried-rice.png',
      link: 'https://www.instagram.com/reel/C7RFYZHiOid/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Native Vermicelli Rice',
      img: 'Native-Vermicel.png',
      link: 'https://www.instagram.com/reel/C7hN1fMIl3r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Roasted Vegetable Pasta',
      img: 'Roasted-Veg.png',
      link: 'https://www.instagram.com/reel/C6yiJalOG8o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Prawn Fried Rice',
      img: 'Prawn-Fried.png',
      link: 'https://www.instagram.com/reel/C6MeuLCtseC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Fried Beef Spaghetti',
      img: 'Fried-beef.png',
      link: 'https://www.instagram.com/reel/C7y3rHrOD3D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Aboki Noodles',
      img: 'Aboki.png',
      link: 'https://www.instagram.com/reel/C8y3qoCI2n3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Coconut Fried Rice',
      img: 'Coco-Fried-Rice.png',
      link: 'https://www.instagram.com/reel/C7sSk3CNp6O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className='flex justify-center text-4xl font-bold font-philosopher'>
        Recipes for Rice, Pasta, and Noodles
      </h2>
      <br />
      <div className='flex justify-center items-center mb-4'>
        <input
          type='text'
          placeholder='Search recipes...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='p-2 border border-gray-300 w-full max-w-lg'
        />
      </div>
      <div className='m-8 mx-14 my-20 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 p-4'>
        {filteredRecipes.map((recipe, index) => (
          <div
            key={index}
            className='card hover:shadow-lg max-w-xl opacity-100 bg-white shadow-md rounded-lg overflow-hidden'
          >
            <img
              className='w-full h-32 sm:h-48 object-cover'
              src={`${process.env.PUBLIC_URL}/img/${recipe.img}`}
              alt={recipe.name}
            />
            <div className='m-4 p-2'>
              <a
                className='font-bold'
                href={recipe.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {recipe.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rice;
