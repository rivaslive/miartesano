import type { NextPage } from 'next';
import Navbar from 'Components/Organism/Navbar';

const Organisms: NextPage = () => {
  return (
    <div className="container">
      <Navbar />

      <div style={{ minHeight: '300vh' }}>
        <img
          src="https://design4users.com/wp-content/uploads/2019/02/ecommerce-app-designs.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Organisms;
