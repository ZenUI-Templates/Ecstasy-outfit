import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Banner from "./Page/Banner";
import BrandProduct from "./Page/BrandProduct";
import Community from "./Page/Community";
import GetApp from "./Page/GetApp";
import NewProducts from "./Page/NewProducts";
import Payday from "./Page/Payday";
import TrendingCollection from "./Page/TrendingCollection";

function App() {
  return (
    <div className="bg-white  mx-auto">
      <Header />
      <Banner />
      <BrandProduct />
      <NewProducts />
      <Payday/>
      <TrendingCollection/>
      <GetApp/>
      <Community/>
      <Footer/>
    </div>
  );
}

export default App;
