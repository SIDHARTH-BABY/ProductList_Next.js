"use client";


export const getdata = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  console.log(data, "kitii");

  return {
    props: { products: data },
  };
};

const ProductList = ({ products }) => {
  return (
    <div>
      {products?products.map((product) => (
        <div key={product.id}>
          <a>{product.title}</a>
        </div>
      )): "hell"}
    </div>
  );
};

export default ProductList;
