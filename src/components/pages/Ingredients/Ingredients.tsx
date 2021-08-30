import React, { useEffect, useState, FunctionComponent } from 'react';

import client, { IngredientInterface } from '../../../client';

import IngredientForm from './IngredientForm';

const Ingredients: FunctionComponent = () => {
    const [ingredients, setIngredients] = useState<IngredientInterface[] | []>([]);

    useEffect(() => {
        async function fetch() {
            const ingredients = await client.get<unknown, IngredientInterface[]>('ingredients');
            setIngredients(ingredients);
        }
        fetch();
    }, []);

    async function saveIngredient(name: string) {
        const newIngredient = await client
            .post<unknown, IngredientInterface>('ingredients', { name });
        setIngredients([...ingredients, newIngredient]);
    }

    async function deleteIngredient(id: number) {
        await client.delete(`ingredients/${id}`);
        setIngredients(ingredients.filter(row => row.id !== id));
    }

    const ingredientList = ingredients.map((i: IngredientInterface) => (
        <li key={ i.id }>
            { i.name } 
            <button onClick={() => deleteIngredient(i.id)}>delete</button>
        </li>)
    );

    return <div>
        <ul>
            { ingredientList }
        </ul>
        <IngredientForm saveIngredient={saveIngredient}/>
    </div>;
};

export default Ingredients;