import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodFrom'
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true); // State for form visibility

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const deleteFood = (foodName) => {
    setFoodList(foodList.filter(food => food.name !== foodName));
  };

  const filteredFoods = foodList.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-black text-center text-2xl'>Search</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <h1 className='text-black text-center text-2xl'>Add Food Entry</h1>
      <button 
        onClick={() => setIsFormVisible(!isFormVisible)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded justify-center"
      >
        {isFormVisible ? 'Hide Form' : 'Add New Food'}
      </button>
      
      {isFormVisible && <AddFoodForm addFood={addFood} />}
      
      <h1 className='text-black text-center text-2xl'>Food List</h1>
      {filteredFoods.length === 0 ? (
        <p>No foods available. Please add some!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredFoods.map(food => (
            <FoodBox key={food.name} food={food} deleteFood={deleteFood} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;