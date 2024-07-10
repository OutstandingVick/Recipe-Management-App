import React, { useState } from 'react';

const Drink = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const recipes = [
    {
      name: 'Fruit Punch',
      imgSrc: 'img/Fuit-Punch.png',
      link: 'https://www.instagram.com/reel/C0hOgNcokaI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Soy Milk',
      imgSrc: 'img/Soy-Milk.png',
      link: 'https://www.instagram.com/reel/C4alVgzClb9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Sugar-rush',
      imgSrc: 'img/SUgar-RRush.png',
      link: 'https://www.instagram.com/reel/C4F2IIGoGk8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Banana Smoothie',
      imgSrc: 'img/Banana-Smoothie.png',
      link: 'https://www.instagram.com/reel/C6rMeW7IXkD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Pineapple/Mango/Lemon Juice',
      imgSrc: 'img/Pineapple-Mango.png',
      link: 'https://www.instagram.com/reel/C7D7pzjOjim/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chapman',
      imgSrc: 'img/Chapman.png',
      link: 'https://www.instagram.com/reel/C4ryBaEuucJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Citrus Malt Mocktail',
      imgSrc: 'img/Citrus-Malt.png',
      link: 'https://www.instagram.com/reel/C7ba78wORCY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Milo Drink',
      imgSrc: 'img/Milo.png',
      link: 'https://www.instagram.com/reel/C6dg0vZoS5v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Ginger Ale',
      imgSrc: 'img/Ginger.png',
      link: 'https://www.instagram.com/reel/C7rdj7ashGu/?utm_source=ig_web_copy_link',
    },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className='flex justify-center text-4xl font-bold font-philosopher'>
        Recipes for Drinks
      </h2>
      <br />
      <div className='flex justify-center items-center mb-4'>
        <input
          type='text'
          placeholder='Search recipes...'
          value={searchQuery}
          onChange={handleSearch}
          className='p-2 border border-gray-300 w-full max-w-lg'
        />
      </div>

      <div className='m-8 mx-14 my-20 grid lg:grid-cols-4 sm:grid-cols-2 gap-4 p-4'>
        {filteredRecipes.map((recipe, index) => (
          <div
            key={index}
            className='card hover:shadow-lg max-w-xl opacity-100 bg-white shadow-md rounded-lg overflow-hidden'
          >
            <img
              className='w-full h-32 sm:h-48 object-cover'
              src={`${process.env.PUBLIC_URL}/${recipe.imgSrc}`}
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

export default Drink;
