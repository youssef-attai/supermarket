import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Page not Found</h1>
      <button className="btn btn-secondary"
        onClick={() => {
          navigate("/home");
        }}
      >
        Back to home
      </button>
    </>
  );
};

export default NotFound;
