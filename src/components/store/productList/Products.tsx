import ProductCard from "./ProductCard";

import dream from "../../../assets/products/smartiptv.png";
import tvbox from "../../../assets/products/smart box.png";
import iptv from "../../../assets/products/iptv.png";
import forever from "../../../assets/products/forever pack.png";


import "./products.css";
import CategoryCard from "./CategoryCard";

const Products = () => {
  return (
    <div className="productList">
      <div className="categories">
        <CategoryCard 
          title="TV BOX"
          image={tvbox}
        />
        <CategoryCard 
          title="IPTV"
          image={iptv}
        />
        <CategoryCard 
          title="Satelitte server"
          image={forever}
        />
      </div>
      {/* <div className="products">
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
        <ProductCard 
          image={dream}
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          price={10.5}
        />
      </div> */}
    </div>
  )
}

export default Products