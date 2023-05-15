import { Header, Footer } from 'components1/common/common';

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
