import { useReducer, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MainSection from "./component/MainSection";
import Modal from "./component/Task/Modal";
import Title from "./component/Title";
import { EditContext, ModalContext, TaskContext } from "./context/MyContext";
import { cartReducer, initialState } from "./reducers/taskReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [isModal, setIsModal] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  function OnEditHandler(task) {
    console.log(task);

    setUpdatedTask(task);
    setIsModal(true);
  }

  return (
    <EditContext.Provider
      value={{ updatedTask, setUpdatedTask, OnEditHandler }}
    >
      <ModalContext.Provider value={{ isModal, setIsModal }}>
        <TaskContext.Provider value={{ state, dispatch }}>
          {isModal && <Modal />}
          <Header />
          <Title />
          <MainSection />
          <Footer />
          <ToastContainer position="top-right"  />
        </TaskContext.Provider>
      </ModalContext.Provider>
    </EditContext.Provider>
  );
}
