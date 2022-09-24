import { useOutletContext } from "react-router-dom";

const AboutCompany = () => {
  const context = useOutletContext();

  return (
    <>
      <h1>Our Company</h1>
      <p>{context.test}</p>
    </>
  );
};

export default AboutCompany;
