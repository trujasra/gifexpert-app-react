
import { useState } from 'react'

export const AddCategory = ({ onNuevaCategoria }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        // console.log(event.target.value);
        setInputValue(target.value);
    }

    const onEnviar = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        if (inputValue.trim().length <= 1) return;
        onNuevaCategoria(inputValue.trim());
        // setCategories(cat => [inputValue, ...cat]);
        setInputValue('');

    }

    return (
        <form onSubmit={onEnviar}>
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
