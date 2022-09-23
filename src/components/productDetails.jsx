import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let { id } = useParams();
  return (
    <>
      <h1>Details {id}</h1>
    </>
  );
};

export default ProductDetails;
