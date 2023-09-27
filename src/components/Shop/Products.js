import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import DUMMY_PRODUCTS from "../store/products-slice";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((element) => {
          return (
            <ProductItem
              key={element.id}
              id={element.id}
              title={element.title}
              price={element.price}
              description={element.description}
              count={element.count}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
