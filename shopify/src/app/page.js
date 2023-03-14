import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Products from "./products/Products";
import ProductList from "./products/ProductList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className={styles.description}>
      <ProductList/>
      {/* <Products /> */}
      </div>
    
    </main>
  );
}
