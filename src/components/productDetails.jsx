import { Navigate, useNavigate, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let { id } = useParams();
  const navigate = useNavigate();

  id = Number(id);

  if (isNaN(id)) {
    return <Navigate to={-1} />;
  }

  const product = props.products.find((product) => product.id === id);
  if (product == null) {
    return <Navigate to={-1} />;
  }

  const renderCartIcon = () => {
    const item = props.cart.find((prdct) => prdct.productId === id);
    if (item == null)
      return (
        <i
          style={{ cursor: "pointer" }}
          className="fas fa-cart-plus p-2 text-danger"
          onClick={() => {
            props.onAdd(id)
          }}
        />
      );
    return (
      <>
        <i className="fas fa-shopping-cart p-2"/>
        {item.quantity}
      </>
    );
  };

  return (
    <>
      <h1 className="m-4">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-secondary"
        >
          <i className="fas fa-chevron-left"/>
        </button>
        <img width="64px" src={product.image} alt={`${product.name}`} />
        {product.name}
        <span className="m-2">{renderCartIcon()}</span>
      </h1>
    </>
  );
};

export default ProductDetails;
