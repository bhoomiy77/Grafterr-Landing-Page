const ProductCard = ({ title, desc, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default ProductCard;