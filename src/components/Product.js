import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../css/product.module.css';

const Product = ({ id, name, images, info, category_id }) => {
    const listImages = images.slice(1, images.length - 1);
    const arrayImages = listImages.split(',');
    return (
        <article className={Styles.product}>
            <div className="img-container">
                <img src={arrayImages[0]} alt={name} />
            </div>
            <div className={Styles.product_footer}>
                <p>{name}</p>
                <p>{info}</p>
                <Link to={`/products/${id}`} className="btn btn-primary btn-details">
                    details
                </Link>
            </div>
        </article>
    )
}

export default Product