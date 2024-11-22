import React from 'react';
import { Card, Button } from 'antd';

function FoodBox({ food, deleteFood }) {
    return (
        <Card title={food.name} className="flex flex-col items-center p-4 border border-black">
            <img src={food.image} alt={food.name} className="w-auto h-auto mb-2" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <Button onClick={() => deleteFood(food.name)} type="danger" className='text-white bg-red-500 border border-black'>Delete</Button>
        </Card>
    );
}

export default FoodBox;