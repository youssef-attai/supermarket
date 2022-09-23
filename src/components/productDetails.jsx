import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let { id } = useParams();
  id = parseInt(id);
  let product = props.products.find((product) => product.id === id);

  let navigate = useNavigate();

  return (
    <>
      <h1 className="m-3">
        <button
          onClick={() => {
            navigate("/cart");
          }}
          className="btn btn-secondary"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <img width="64px" src={product.image} alt={`${product.name}`} />
        {product.name}
        <span
          className={`badge bg-${
            product.quantity === 0 ? "warning text-dark" : "primary text-light"
          } m-2`}
        >
          {product.quantity}
        </span>
      </h1>
    </>
  );
};

export default ProductDetails;
