import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
