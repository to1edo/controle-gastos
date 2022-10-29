import { useState,useEffect } from "react"
import { formatMoney } from "../helpers"
import {CircularProgressbar,buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"


const BudgetControl = ({budget,quantityExpense,setExpenses,setBudget}) => {

  
  
  const percentage = ()=>
  {
    return ((100*quantityExpense)/budget).toFixed(2)
  }

  const handleReset = ()=>{
    const res = confirm('Você quer apagar todos os registros?')

    if(res){
      setBudget(0)
      setExpenses([])
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

      <div>
        <CircularProgressbar 
          value={percentage()} 
          text={`${percentage()}%`}
          styles={buildStyles({
            // Colors
            pathColor: percentage()>100 ? '#dc2626' : '#9c43cd',
            textColor: percentage()>100 ? '#dc2626' : '#4c0677',
            trailColor: '#d6d6d6'
          })}
          
        />
      </div>

      <div className="contenido-presupuesto">
        <button onClick={handleReset} className="reset-app">Reinicializar os valores</button>
        <p><span>Orçamento: </span>{ formatMoney(budget) }</p>
        <p className={`${budget - quantityExpense <= 0 ? 'negativo' : ''}`}><span>Disponível: </span>{ formatMoney(budget - quantityExpense) }</p>
        <p><span>Gastos: </span>{ formatMoney(quantityExpense) }</p>
      </div>

    </div>
  )
}

export default BudgetControl