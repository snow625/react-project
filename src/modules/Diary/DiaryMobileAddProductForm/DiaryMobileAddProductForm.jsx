import { useEffect } from "react";
import CircleButton from "../../../shared/components/CircleButton/CircleButton";
import ProductSelector from "./ProductSelector/ProductSelector";
import fields from "./fields";
import useForm from "../../../shared/hooks/useForm";
import { searchProduct } from "../../../shared/services/API/product-search";
import styles from "./diaryAddProductForm.module.scss";

const initialState = {
  product: "",
  foundProducts: [],
  currentProduct: "",
  id: null,
  weight: "",
};
const DiaryAddProductForm = ({ onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { product, foundProducts, currentProduct, weight } = state;

  const handleFocus = () => {
    setState((prevState) => {
      return {
        ...prevState,
        foundProducts: [],
        currentProduct: "",
        id: null,
      };
    });
  };

  useEffect(() => {
    const findProduct = async (product) => {
      try {
        const result = await searchProduct(product);
        setState((prevState) => ({ ...prevState, foundProducts: result }));
      } catch (error) {}
    };

    if (currentProduct) {
      return;
    }
    if (product.length > 2) {
      findProduct(product);
    }
  }, [product, currentProduct, setState]);

  const setCurrentProduct = (selectedProduct) => {
    const requiredId = foundProducts.find(
      (product) => product.title.ru === selectedProduct
    )._id;
    setState((prevState) => ({
      ...prevState,
      product: selectedProduct,
      currentProduct: selectedProduct,
      foundProducts: [],
      id: requiredId,
    }));
  };
  return (
    <div className="wrapper_container">
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <div className={styles.wrapperProduct}>
          <label htmlFor={"product"} className={styles.label}>
            Enter product name in "ua"
          </label>
          <input
            name="product"
            id={"product"}
            className={styles.input}
            value={product}
            onChange={handleChange}
            onFocus={handleFocus}
            autoComplete="off"
            {...fields.product}
          />
          {foundProducts.length > 0 && (
            <ProductSelector
              list={foundProducts}
              onChange={setCurrentProduct}
            />
          )}
        </div>
        <div className={styles.wrapperGrams}>
          <label htmlFor={"weight"} className={styles.labelGrams}>
            Grams
          </label>
          <input
            id={"weight"}
            className={styles.input}
            {...fields.weight}
            value={weight}
            onChange={handleChange}
          />
        </div>
        <CircleButton
          type="submit"
          label="Add product button"
          iconNameInSprite="add"
        />
      </form>
    </div>
  );
};

export default DiaryAddProductForm;
