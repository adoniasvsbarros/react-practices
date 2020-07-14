import React from 'react';

import './ProductTable.css';

import products from '../../data/produts';

export default _ => {

    const productsTableBody = products.map((product, i) => {
        return (
            <tr className={i % 2 === 0 ? 'Even' : 'Odd'}>
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
            </tr>
        );
    });

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <div>
                <p>Product's Table</p>
            </div>
            <table class="SpecialTable">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                { productsTableBody }
            </table>
        </div>
    );
};