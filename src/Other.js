import React, { useState } from 'react';

const Other = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const recipes = [
    {
      name: 'Ugwa Yam Porridge',
      imgSrc: 'img/Ugba-Pori.png',
      link: 'https://www.instagram.com/reel/C8jvle-N8P_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Potato Porridge',
      imgSrc: 'img/Sweet-Potato.png',
      link: 'https://www.instagram.com/reel/C2DQ6SKIt7q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Abasha',
      imgSrc: 'img/Abasha.png',
      link: 'https://www.instagram.com/reel/CUMeaohjkEo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Ripe Plantain & Fish',
      imgSrc: 'img/Ripe-Plan.png',
      link: 'https://www.instagram.com/reel/C7Qm_lXoB0k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Beef-Doskies',
      imgSrc: 'img/Beefdos.png',
      link: 'https://www.instagram.com/reel/C7btPYMIU22/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Beans & Corn',
      imgSrc: 'img/Beans=corn.png',
      link: 'https://www.instagram.com/reel/C7HgC9oiWd7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Unripe Plantain Porridge',
      imgSrc: 'img/Unripe-Platain.png',
      link: 'https://www.instagram.com/reel/C0CcrqTM_Y3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Moi-Moi',
      imgSrc: 'img/Moi-Moi.png',
      link: 'https://www.instagram.com/reel/C5-1X9eoiEu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Normal Yam Porridge',
      imgSrc: 'img/normal-yam.png',
      link: 'https://www.instagram.com/reel/C2NQCODIL92/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Michelin Beans',
      imgSrc: 'img/Michelin.png',
      link: 'https://www.instagram.com/reel/C6szb5FNSUx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Baked Moi-Moi',
      imgSrc: 'img/Baked-Moi.png',
      link: 'https://www.instagram.com/reel/C4lDz7YOXXy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Yogurt Fatteh',
      imgSrc: 'img/Yoghurt-Fatteh.png',
      link: 'https://www.instagram.com/reel/C2kZ1tXsdK6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Yam & Plantain Porridge',
      imgSrc: 'img/Plan-Yam-Porr.png',
      link: 'https://www.instagram.com/reel/C0CagUgsvMo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Eggdodo',
      imgSrc: 'img/Eggdodo.png',
      link: 'https://www.instagram.com/reel/C1fc_HEu2XU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Ewa Agoyin',
      imgSrc: 'img/Ewa-Agoyin.png',
      link: 'https://www.instagram.com/reel/C45P0PSI29R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Garri Creamsicle',
      imgSrc: 'img/Garri-cream.png',
      link: 'https://www.instagram.com/reel/C8e0hLHI4PY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Bole & Fish',
      imgSrc: 'img/Bole.png',
      link: 'https://www.instagram.com/reel/Cz4BhOWsIwm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Irish Potato Porridge',
      imgSrc: 'img/Irish-potato.png',
      link: 'https://www.instagram.com/reel/C7_02Ysu15Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-8'>
      <h2 className='flex justify-center text-4xl font-bold font-philosopher'>
        Recipes for Other Dishes
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

export default Other;
