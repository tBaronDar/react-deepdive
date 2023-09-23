import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import initialProductsState from "../store/products-slice";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {initialProductsState.map((element) => {
          return (
            <ProductItem
              id={element.id}
              title={element.title}
              price={element.price}
              description={element.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
