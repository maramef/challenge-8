import React from 'react'

function Products({
  products, loading, error,
  categories, selectedCategory, onCategoryChange,
  sortOrder, onSortChange,
  onProductClick, onAddToCart
}) {

  if (loading) return <div className="status">Chargement...</div>
  if (error)   return <div className="status error">{error}</div>

  return (
    <div>
      <div className="filters-bar">
        <div className="categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat === 'all' ? 'Tous' : cat}
            </button>
          ))}
        </div>

        <select
          className="sort-select"
          value={sortOrder}
          onChange={e => onSortChange(e.target.value)}
        >
          <option value="default">Trier par...</option>
          <option value="asc">Prix croissant ↑</option>
          <option value="desc">Prix décroissant ↓</option>
        </select>
      </div>

      {/* Grille produits */}
      <div className="products-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div
              className="product-image-wrapper"
              onClick={() => onProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3
                className="product-title"
                onClick={() => onProductClick(product)}
                style={{ cursor: 'pointer' }}
              >
                {product.title}
              </h3>
              <p className="product-price">{product.price.toFixed(2)} $</p>
              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product)}
              >
                + Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products