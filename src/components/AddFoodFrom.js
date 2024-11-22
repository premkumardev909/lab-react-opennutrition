import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ addFood }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addFood({ name, image, calories: Number(calories), servings: Number(servings) });
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    };

    return (
        <div className="flex justify-center mb-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="mb-2" />
                <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="mb-2" />
                <Input value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calories" className="mb-2" />
                <Input value={servings} onChange={(e) => setServings(e.target.value)} placeholder="Servings" className="mb-2" />
                <Button type="submit" className='bg-blue-400 text-white border border-black'>Add Food</Button>
            </form>
        </div>
    );
}

export default AddFoodForm;