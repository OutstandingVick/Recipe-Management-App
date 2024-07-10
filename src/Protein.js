import React, { useState } from 'react';

const Protein = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const recipes = [
    {
      name: 'Grilled Tilapia',
      img: 'Grilled-Tilapia.png',
      link: 'https://www.instagram.com/reel/C61e3qhrGKx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Peppered Ponmo',
      img: 'Ponmo.png',
      link: 'https://www.instagram.com/reel/C8KaIIfI4_I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Tender Beef Steak',
      img: 'Tender-beef.png',
      link: 'https://www.instagram.com/reel/C8NPyP_uIf1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Meat Salad',
      img: 'Beef-Salad.png',
      link: 'https://www.instagram.com/reel/C7NuaYiK_e-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Peppered Tender Turkey',
      img: 'Tender-Turks.png',
      link: 'https://www.instagram.com/reel/C5v97rkMWf-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Grilled Mackerel',
      img: 'Grilled-marckrel.png',
      link: 'https://www.instagram.com/reel/C400oFxof0T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chicken Dinner',
      img: 'Chick-Dinner.png',
      link: 'https://www.instagram.com/reel/C2fk6gAIbrx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Suya Fish',
      img: 'Suya-fish.png',
      link: 'https://www.instagram.com/reel/C6B2E6_sYtt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Grilled Catfish',
      img: 'Grilled-Catfish.png',
      link: 'https://www.instagram.com/reel/C7ZfdE1qxaw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Crispy Chilli Beef',
      img: 'Crispy-Chilli.png',
      link: 'https://www.instagram.com/reel/C3d8MYKPuHz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Juicy Turkey Bite',
      img: 'Juicy-turk.png',
      link: 'https://www.instagram.com/reel/C09w1KxoAee/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Suya',
      img: 'Suya.png',
      link: 'https://www.instagram.com/reel/C5x0lPkOPl1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Peppered Turkey',
      img: 'Pepper-Turks.png',
      link: 'https://www.instagram.com/reel/C5EfEmyMjE6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Fish Meal',
      img: 'fish-meal.png',
      link: 'https://www.instagram.com/reel/C1VJLCXOyW8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Black Pepper Beef',
      img: 'Black-Pepper.png',
      link: 'https://www.instagram.com/reel/C5qtzT_x7xE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className='flex justify-center text-4xl font-bold font-philosopher'>
        Recipes for Proteins
      </h2>
      <br />
      <div className='flex justify-center items-center mb-4'>
        <input
          type='text'
          placeholder='Search recipes...'
          value={searchQuery}
          onChange={handleSearch}
          className='border p-2 w-full max-w-lg'
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
              src={`${process.env.PUBLIC_URL}/img/${recipe.img}`}
              alt='Card Image'
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

export default Protein;
