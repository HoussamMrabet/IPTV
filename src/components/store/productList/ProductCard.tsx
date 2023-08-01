interface Props{
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({image, title, price}: Props) => {
  return (
    <div className="product_card">
      <div className="product_card_header">
        <img src={image} alt="" />
      </div>
      <div className="product_card_body">
        <h4>{title}</h4>
        <span className="product_card_price">{price}$</span>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard