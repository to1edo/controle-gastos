import { useState } from "react"
import Alert from './Alert'


const NewBudget = ({budget,setBudget, setIsValidBudget}) => {

  const [message , setMessage] = useState('')
  
  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!Number(budget) ){
      setMessage('Valor inválido')

      setTimeout(() => {
        setMessage('')
      }, 3000);
      return
      
    }else if(Number(budget) <= 0){
      setMessage('O valor deve ser maior que zero')

      setTimeout(() => {
        setMessage('')
      }, 3000);
      return
    }

    setMessage('')
    setBudget(Number(budget))
    setIsValidBudget(true)
    localStorage.setItem('budget',budget)
  }


  return (
    <div className="contenedor-presupuesto contenedor sombra">
      
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label htmlFor="budget">Definir orçamento</label>
          <input type="text" id="budget" value={budget} onInput={(e)=>setBudget(e.target.value)} placeholder="Defina seu orçamento" className="nuevo-presupuesto" />
        </div>

        <input type="submit" value='Adicionar'/>

        {message && <Alert type={'error'}>{message}</Alert>}
      </form>
    </div>
  )
}

export default NewBudget