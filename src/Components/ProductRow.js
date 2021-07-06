import React from 'react';

const ProductRow = (props) => {
    return (
        <div>
            <tr>
                <td>
                    {props.product.name}
            
                </td>
                <td>
                    {props.product.price}
                </td>
            </tr>
            
        </div>
    );
};

export default ProductRow;