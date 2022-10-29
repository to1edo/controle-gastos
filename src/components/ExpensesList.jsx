import { useState } from "react";
import Expense from "./Expense";
import Filter from "./Filter";

const ExpensesList = ({ expenses, setEditExpense, deleteExpense,filter,expensesFiltered }) => {



  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Gastos" : "Nenhum gasto ainda"}</h2>

      {
        filter ?
        (
          expensesFiltered.map((expense) => {
            return(
              <Expense
                expense={expense}
                key={expense.id}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            )
          })
        ):
        (
          expenses.map((expense) => {
            return(
              <Expense
                expense={expense}
                key={expense.id}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            )
          })
        )
      } 

      {filter && expensesFiltered.length == 0 && <p className="filter-none">Nenhum resultado para esta categoria</p>}
    </div>
  );
};

export default ExpensesList;
