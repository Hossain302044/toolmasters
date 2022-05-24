import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductsRow = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    return (
        <div>

        </div>
    );
};

export default ProductsRow;