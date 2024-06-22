import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Asset/star_icon.png'
import star_dull_icon from '../Asset/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product}=props;
    const {addToCart,}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(143)</p>
            </div>
            <div className="productdisplay-right-prices"><span>M.R.P</span>
                <div className="productdipaly-right-price-old"> ₹{product.old_price}</div>
                <div className="productdipaly-right-price-new"> ₹{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lidhtweight, Usually, Pullover shirt,Close-Fitting and with around neckline
                and short sleeves, worn as an undershirt or outer garment
            </div>
            <div className="productdipaly-right-size">
                <h1>Select Size</h1>
                <div className="productdipaly-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)} }>ADD TO CART</button> 
            <p className="productdisplay-right-category"><span>Category :</span>Women,T-Shirt,Crop Top</p>
            <p className="productdisplay-right-category"><span>Tages :</span>Modern,Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay