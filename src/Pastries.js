import React, { useState } from 'react';

const Pastries = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const recipes = [
    {
      name: 'Fritata',
      imgSrc: 'img/Fritata.png',
      link: 'https://www.instagram.com/reel/C2SkUaToenB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Egg & Beef Sandwich',
      imgSrc: 'img/Egg-Beef.png',
      link: 'https://www.instagram.com/reel/C2UImTIou1u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chicken Sandwich',
      imgSrc: 'img/Chick-Sandwich.png',
      link: 'https://www.instagram.com/reel/CzUBkQ-uInU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Burger Buns',
      imgSrc: 'img/Burger-Buns.png',
      link: 'https://www.instagram.com/reel/C4vkth4u33h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Sausage Buns',
      imgSrc: 'img/Sausage-Buns.png',
      link: 'https://www.instagram.com/reel/CzOwIO5OjPx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Egg Sauce',
      imgSrc: 'img/Egg-Sauce.png',
      link: 'https://www.instagram.com/reel/CzJwWvvOeQZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Egg roll',
      imgSrc: 'img/Eggroll.png',
      link: 'https://www.instagram.com/reel/C4GZXgYODeq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Overnight Oats',
      imgSrc: 'img/Over-Oats.png',
      link: 'https://www.instagram.com/reel/C5G3o8wsoY1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chicken Garlic Sourdough Sandwich',
      imgSrc: 'img/Chick-Garlic.png',
      link: 'https://www.instagram.com/reel/C6ZNPqwsDxL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Blueberry Overnight Oats',
      imgSrc: 'img/Bluebrry.png',
      link: 'https://www.instagram.com/p/C3iWOgDRFSL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Raspberry Overnight Oats',
      imgSrc: 'img/Rasp.png',
      link: 'https://www.instagram.com/reel/C4s7weTrIwV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'No-Bake Pie',
      imgSrc: 'img/No-Bake.png',
      link: 'https://www.instagram.com/reel/C0zVDNbLUIJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chicken & Egg Toast',
      imgSrc: 'img/Chick-Egg-Toast.png',
      link: 'https://www.instagram.com/reel/C4yK065OjRZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Sausage Rolls',
      imgSrc: 'img/Sausage-Roll.png',
      link: 'https://www.instagram.com/reel/C6vV_T3oIak/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Fruit & Nutty Cake',
      imgSrc: 'img/Fruit-nut.png',
      link: 'https://www.instagram.com/reel/C1XX7YXMaie/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Normal Bread',
      imgSrc: 'img/Normal-bread.png',
      link: 'https://www.instagram.com/reel/C30RDCJuV2Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Normal Cake',
      imgSrc: 'img/Normal-Cake.png',
      link: 'https://www.instagram.com/reel/C1AIBFfO8J-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Fruit Cake',
      imgSrc: 'img/Fruit-cake.png',
      link: 'https://www.instagram.com/reel/C1Pp0aLu9Q2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Fluffy Bread',
      imgSrc: 'img/Fluffy.png',
      link: 'https://www.instagram.com/reel/C4dJ6VlLBXQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Brown Butter Oreo Brownies',
      imgSrc: 'img/BBBrownies.png',
      link: 'https://www.instagram.com/reel/C5563PXrIzc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Brown Butter Banana Bread',
      imgSrc: 'img/BB-Banana.png',
      link: 'https://www.instagram.com/reel/C3Sf_p5uVRM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Banana Cake',
      imgSrc: 'img/Banana-Cake.png',
      link: 'https://www.instagram.com/reel/C63aQfPIjNe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Spicy Suya Wrap',
      imgSrc: 'img/Spicy-Suya.png',
      link: 'https://www.instagram.com/reel/C7EBaliutHj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Double Decker Toasties',
      imgSrc: 'img/Double-decker.png',
      link: 'https://www.instagram.com/p/C7ZjFXNtb3W/?utm_source=ig_web_copy_link',
    },
    {
      name: 'French toast',
      imgSrc: 'img/French-toast.png',
      link: 'https://www.instagram.com/reel/C66milyIguS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'French Toast Roll-up',
      imgSrc: 'img/French-Toast-Roll.png',
      link: 'https://www.instagram.com/reel/C7UVg63oZlI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Tiramisu',
      imgSrc: 'img/Tirami.png',
      link: 'https://www.instagram.com/reel/C7jsIa5yfah/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Fish Pie',
      imgSrc: 'img/Fish-Pie.png',
      link: 'https://www.instagram.com/reel/C7i6Jtvoe1z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Philly Cheesesteak',
      imgSrc: 'img/Philly.png',
      link: 'https://www.instagram.com/reel/C7Rsfc-SbwE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Suya Sharwama',
      imgSrc: 'img/Suya-Shawar.png',
      link: 'https://www.instagram.com/reel/C76ATu0ISjb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Cowboy Butter Steak Sliders',
      imgSrc: 'img/Cowboy.png',
      link: 'https://www.instagram.com/reel/C7w6_B0IWgt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Popcorn',
      imgSrc: 'img/Popcorn.png',
      link: 'https://www.instagram.com/reel/C5I7mK0MzZS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Plantain Meatpie',
      imgSrc: 'img/Plantain-Meatpie.png',
      link: 'https://www.instagram.com/reel/C5I6hG6r0lW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Boneless Bread',
      imgSrc: 'img/Boneless.png',
      link: 'https://www.instagram.com/reel/C7rUMe-MB6V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chocolate Chip Cookie',
      imgSrc: 'img/Cookie.png',
      link: 'https://www.instagram.com/reel/C2u3pkarup-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Sardine Toast',
      imgSrc: 'img/Sardine.png',
      link: 'https://www.instagram.com/reel/C43XNrEuC6p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      name: 'Chicken & Egg Sandwich',
      imgSrc: 'img/Chick-Egg-Sandwich.png',
      link: 'https://www.instagram.com/reel/C6BGUxUML4z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-8'>
      <h2 className='flex justify-center text-4xl font-bold font-philosopher'>
        Recipes for Breakfast, Pastries and Snacks
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

export default Pastries;
