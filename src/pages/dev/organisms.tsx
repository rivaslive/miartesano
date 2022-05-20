import type { NextPage } from 'next';
import Layout from 'Components/Organism/Layout';

const Organisms: NextPage = () => {
  return (
    <Layout>
      <div style={{ minHeight: '300vh' }}>
        <img
          width="100%"
          src="https://design4users.com/wp-content/uploads/2019/02/ecommerce-app-designs.png"
          alt=""
        />
      </div>
    </Layout>
  );
};

export default Organisms;
