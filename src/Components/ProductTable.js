import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {props.dataproduct.map((e) => (
            <ProductRow product={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
