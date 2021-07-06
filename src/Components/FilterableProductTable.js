import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = (props) => {
    return (
        <div>
        <SearchBar  />
        <ProductTable dataproduct={props.products} />

        </div>
    );
};

export default FilterableProductTable;