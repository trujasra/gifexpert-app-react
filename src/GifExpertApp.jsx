import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (nuevoCat) => {
        // console.log(nuevoCat);
        // categories.push('Valorant');
        if (categories.includes(nuevoCat)) return;

        setCategories([nuevoCat, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>

            <h1>Gif Expert App </h1>

            <AddCategory
                onNuevaCategoria={(value) => onAddCategory(value)}
            />

            {
                categories.map((cat) =>
                    (
                        <GifGrid
                            key={cat}
                            category={cat}
                        />
                    ))
            }

        </>
    )
}
