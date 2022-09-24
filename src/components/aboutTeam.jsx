import { useOutletContext } from "react-router-dom";

const AboutTeam = () => {
  const context = useOutletContext();
  return (
    <>
      <h1>Our Team</h1>
      <p>{context.test}</p>
    </>
  );
};

export default AboutTeam;
