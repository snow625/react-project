import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import Loader from "../../shared/components/Loader/Loader";
import Modal from "../../shared/components/Modal";
import ModalText from "../../shared/components/ModalText";
import { getDailyRateInGeneral } from "../../shared/services/API/daily-rate";
import { makeRandomProducts } from "../../shared/utils/randomFunctions";
import style from "./homePage.module.scss";

const initialState = {
  calories: null,
  notAllowedProducts: [],
  isModalOpen: false,
  loading: false,
  error: null,
};
const HomePage = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleClick = async (data) => {
    setState((prevState) => ({ ...prevState, error: null, loading: true }));
    console.log(data);

    let dataValuesToNumbers = {};

    Object.entries(data).forEach(([key, value]) => {
      dataValuesToNumbers[key] = Number(value);
    });

    try {
      const result = await getDailyRateInGeneral(dataValuesToNumbers);
      const { dailyRate, notAllowedProducts } = result;

      // const products = () => {
      //   return notAllowedProducts.length > 10 ? notAllowedProducts.slice(0,10) : notAllowedProducts
      // }

      const products = makeRandomProducts(notAllowedProducts)

      const calories = Math.trunc(dailyRate);
      setState((prevState) => ({
        ...prevState,
        calories,
        notAllowedProducts: products,
        loading: false,
        isModalOpen: true,
      }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, error, loading: false }));
    }
  };

  const toggleModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const modalButtonClick = () => {
    toggleModal();
    return navigate("/register");
  };

  const { calories, notAllowedProducts, isModalOpen, loading } = state;
  return (
    <>
      <div className={`${style.wrapper} container`}>
        <CalculatorСalorieForm onSubmit={handleClick} />
      </div>
      {loading && <Loader />}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ModalText
            calories={calories}
            list={notAllowedProducts}
            onClick={modalButtonClick}
          />
        </Modal>
      )}
    </>
  );
};
export default HomePage;
