import { useState, useEffect } from "react";
import closeBtn from "../img/cerrar.svg";
import Alert from "./Alert";

const Modal = ({
  setShowModal,
  animateModal,
  setAnimateModal,
  addExpense,
  editExpense,
  setEditExpense,
  quantityExpense,
  budget
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {

    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setQuantity(editExpense.quantity);
      setCategory(editExpense.category);
    }

  }, [editExpense]);

  const handleCloseBtn = () => {

    setAnimateModal(false);
    setTimeout(() => {
      setShowModal(false);
    }, 300);

    setEditExpense({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, category, quantity].includes("")) {
      setMessage("Todos os campos são necessários");

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;

    } else if (!Number(quantity) || Number(quantity) <= 0) {
      setMessage("A entrada não é um valor válido");

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;

    }

    setQuantity(Number(quantity));

    addExpense({ name, quantity: Number(quantity), category });

    handleCloseBtn();
  };

  return (
    <div className="modal">
      <div onClick={handleCloseBtn} className="cerrar-modal">
        <img src={closeBtn} alt="close button" />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : ""}`}
      >
        <legend>{`${editExpense.id ? 'Editar Gasto':'Novo Gasto'}`}</legend>

        <div className="campo">
          <label htmlFor="name">Nome do gasto</label>
          <input
            id="name"
            type="text"
            placeholder="Nome"
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="quantity">Cantidade do gasto</label>
          <input
            id="quantity"
            type="number"
            placeholder="Cantidade"
            value={quantity}
            min="0"
            onInput={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Categorias</label>
          <select
            id="category"
            value={category}
            onInput={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Selecione uma categoria--</option>
            <option value="saving">Poupança</option>
            <option value="food">Alimentação</option>
            <option value="home">Casa</option>
            <option value="expenses">Despesas variadas</option>
            <option value="leisure">Lazer</option>
            <option value="health">Saúde</option>
            <option value="subscription">Subscrições</option>
          </select>
        </div>

        <input type="submit" value={`${editExpense.id ? 'Guardar cambios':'Adicionar Gasto'}`} />

        {message && <Alert type={"error"}>{message}</Alert>}
      </form>
    </div>
  );
};

export default Modal;
