import React from 'react'

function ProductDetail({ product, onBack, onAddToCart }) {
  return (
    <div className="detail-container">
      <button className="back-btn" onClick={onBack}>← Retour</button>

      <div className="detail-card">
        <div className="detail-image-wrapper">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-info">
          <span className="product-category">{product.category}</span>
          <h2 className="detail-title">{product.title}</h2>
          <p className="detail-description">{product.description}</p>

          <div className="detail-footer">
            <span className="detail-price">{product.price.toFixed(2)} $</span>
            <div className="detail-rating">
              ⭐ {product.rating.rate} ({product.rating.count} avis)
            </div>
          </div>

          <button
            className="add-to-cart-btn large"
            onClick={() => onAddToCart(product)}
          >
            🛒 Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail