import React from 'react';
import { Input } from 'antd';

function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="flex justify-center mb-4">
            <Input 
                placeholder="Search food..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="w-auto"
            />
        </div>
    );
}

export default Search;