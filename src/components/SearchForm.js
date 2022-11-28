import React from 'react';
import { useState } from 'react';
import Styles from '../css/search.module.css';

const SearchForm = () => {
    const [searchText, setSearchText] = useState("");
    const handleChangeSearch = (event) => {
        setSearchText(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className={`${Styles.section} ${Styles.search}`}>
            <form className={Styles.search_form} onSubmit={handleSubmit}>
                <div className={Styles.form_control}>
                    <label htmlFor="name">search product</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Search product"
                        value={searchText}
                        onChange={handleChangeSearch}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm