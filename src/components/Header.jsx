import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";



const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget,setExpenses, quantityExpense }) => {
  
  return (
    <header>
      <h1>Controle de gastos</h1>
      {isValidBudget ? (
        <BudgetControl
          budget={budget}
          setBudget={setBudget}
          setExpenses={setExpenses}
          quantityExpense={quantityExpense}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
