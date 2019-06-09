import React from 'react';

const Filter = props => {

    return (
        <section>
            <p>
                Search:
                <input onChange = {({target}) => props.setSearchWord(target.value)} />
            </p>
            <p>
                Sort by:
                <select onChange = {({target}) => {
                    props.setSortType(target.value);
                }}>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
                </select>
            </p>
        </section>
    );
}

export default Filter;