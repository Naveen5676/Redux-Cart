import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Products = [
  {
    id: "p1",
    price: 6,
    title: "Product 1",
    description: "This is product 1 description",
  },
  {
    id: "p2",
    price: 9,
    title: "Product 2",
    description: "This is product 2 description",
  },
  {
    id: "p3",
    price: 12,
    title: "Product 3",
    description: "This is product 3 description",
  },
  {
    id: "p4",
    price: 15,
    title: "Product 4",
    description: "This is product 4 description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            product={product}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))};
      </ul>
    </section>
  );
};

export default Products;
