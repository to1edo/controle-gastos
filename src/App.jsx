import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import newExpenseIcon from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import Filter from "./components/Filter";

function App() {

  const [budget, setBudget] = useState(Number(localStorage.getItem("budget")));
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("expenses")) ?? []);
  const [editExpense, setEditExpense] = useState({});
  const [quantityExpense, setQuantityExpense] = useState(0);
  const [filter, setFilter] = useState("");
  const [expensesFiltered,setExpensesFiltered] = useState([])


  useEffect(() => {
    if (expenses.length) {
      let total = expenses.reduce((total, expense) => total + expense.quantity, 0)
      setQuantityExpense(total);

    } else {
      setQuantityExpense(0);
    }
  }, [expenses]);

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      handleClickModal();
    }
  }, [editExpense]);

  useEffect(() => {
    if (budget) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("budget", budget);

    if(!budget){
      setIsValidBudget(false)
    }

  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {

    if(filter){
      let filtered = expenses.filter( expense => expense.category === filter)
      setExpensesFiltered(filtered)
    }

  }, [filter]);

  const handleClickModal = () => {
    setShowModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 200);
  };

  const addExpense = (expense) => {
    if (Object.keys(editExpense).length > 0) {
      let editedExpenses = expenses.map((oldExpense) => {
        if (oldExpense.id === editExpense.id) {
          return { id: editExpense.id, date: editExpense.date, ...expense };
        } else {
          return oldExpense;
        }
      });

      setExpenses(editedExpenses);
    } else {
      expense.id = uuid();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }
  };

  const deleteExpense = (id) => {
    let filteredExpenses = expenses.filter((expense) => {
      return expense.id !== id;
    });

    setExpenses(filteredExpenses);
  };

  return (
    <div className={showModal ? "fijar" : ""}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        setExpenses={setExpenses}
        quantityExpense={quantityExpense}
      />

      {isValidBudget && (
        <div>
          <Filter setFilter={setFilter} />

          <div>
            <ExpensesList
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFiltered={expensesFiltered}
            />
          </div>

          <div onClick={handleClickModal} className="nuevo-gasto">
            <img src={newExpenseIcon} alt="novo gasto" />
          </div>
        </div>
      )}

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          addExpense={addExpense}
          editExpense={editExpense}
          expenses={expenses}
          setExpenses={setExpenses}
          setEditExpense={setEditExpense}
          quantityExpense={quantityExpense}
          budget={budget}
        />
      )}
    </div>

  );
}

export default App;
