import React, { useState } from 'react';

const Soup = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const recipes = [
    {
      name: 'Banga Soup',
      imgSrc: 'img/Banga.png',
      link: 'https://www.instagram.com/reel/C7zgQWNuEwI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Pepper Soup',
      imgSrc: 'img/Peppersoup.png',
      link: 'https://www.instagram.com/reel/C3x9p-oovCY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Ofe Akwu',
      imgSrc: 'img/Ofe-Akwu.png',
      link: 'https://www.instagram.com/reel/C6ti0xGuRh3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Efo Riro',
      imgSrc: 'img/Efo Riro.png',
      link: 'https://www.instagram.com/reel/C53ooYboYUJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Fisherman Soup',
      imgSrc: 'img/Fisherman-Soup.png',
      link: 'https://www.instagram.com/reel/C6eQ2SZoKcy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chinese Stir Fry',
      imgSrc: 'img/Chinese-Stir-Fry.png',
      link: 'https://www.instagram.com/reel/C3S-FzBoowf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Nigerian Stew',
      imgSrc: 'img/Nigerian-Stew.png',
      link: 'https://www.instagram.com/reel/C3spA78omRG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Ugba Sauce',
      imgSrc: 'img/Ugwa-Sauce.png',
      link: 'https://www.instagram.com/reel/C2FbUp8IcHP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Okro Soup',
      imgSrc: 'img/Okro-Soup.png',
      link: 'https://www.instagram.com/reel/CvRa4akNeWw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Nigerian Turkey Stew',
      imgSrc: 'img/Turk-Stew.png',
      link: 'https://www.instagram.com/reel/C3rq7PyoVxF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Okodo (Thick Peppersoup)',
      imgSrc: 'img/Okodo.png',
      link: 'https://www.instagram.com/reel/CzmBS1MuSOT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Seafood Okro Soup',
      imgSrc: 'img/Seafood-Okro.png',
      link: 'https://www.instagram.com/reel/C4GQmZ9OsVP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Egusi Soup',
      imgSrc: 'img/Egusi.png',
      link: 'https://www.instagram.com/reel/C148meQoZWD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Gizzard Stew',
      imgSrc: 'img/Gizzard.png',
      link: 'https://www.instagram.com/reel/C0lhtJ6MNXJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Goat Meat Peppersoup',
      imgSrc: 'img/Goat-Peppersoup.png',
      link: 'https://www.instagram.com/reel/C5D49j7OQMO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className='flex justify-center text-4xl font-bold font-philosopher'>
        Recipes for Soups and Sauces
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
            className='card hover:shadow-lg max-w-xl opacity-90 bg-white shadow-md rounded-lg overflow-hidden'
          >
            <img
              className='w-full h-32 sm:h-48 object-cover'
              src={`${process.env.PUBLIC_URL}/${recipe.imgSrc}`}
              alt={recipe.name}
            />
            <div className='m-4 p-2'>
              {recipe.link ? (
                <a
                  className='font-bold'
                  href={recipe.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {recipe.name}
                </a>
              ) : (
                <span className='font-bold'>{recipe.name}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soup;
