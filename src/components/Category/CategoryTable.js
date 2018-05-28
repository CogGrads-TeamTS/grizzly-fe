import React from 'react';
import CategoryRows from './CategoryRows';

const CategoryTable = ({categories}) => {
        return (
            <table>
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Products</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                    {categories.map(guess =>

                    <CategoryRows key={guess.id} category={guess} />,

                    )}
                </tbody>
            </table>
        )
};

export default CategoryTable;