import { formatDate,formatMoney } from "../helpers"
import savingIcon from '../img/icono_ahorro.svg'
import homeIcon from '../img/icono_casa.svg'
import foodIcon from '../img/icono_comida.svg'
import expensesIcon from '../img/icono_gastos.svg'
import leisureIcon from '../img/icono_ocio.svg'
import healthIcon from '../img/icono_salud.svg'
import subscriptionIcon from '../img/icono_suscripciones.svg'
import handIcon from '../img/hand.svg'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'



const Expense = ({expense, setEditExpense, deleteExpense}) => {

  const iconList={
    saving : savingIcon, 
    home : homeIcon, 
    food : foodIcon,
    expenses : expensesIcon,
    leisure : leisureIcon,
    health : healthIcon,
    subscription : subscriptionIcon
  }

  const categories={
    saving : "Poupança", 
    home : "Casa", 
    food : "Alimentação",
    expenses : "Despesas variadas",
    leisure : "Lazer" ,
    health : "Saúde",
    subscription : "Subscrições"
  }

const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => setEditExpense(expense)}>
      Editar
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() => deleteExpense(expense.id)}
    >
      Excluir
    </SwipeAction>
  </TrailingActions>
);


  return (
    <SwipeableList>
      <SwipeableListItem 
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
              <img src={ iconList[expense.category]} alt={`${expense.category}Icon`}/>
            <div className="descripcion-gasto">
              <p className="categoria">{ categories[expense.category]}</p>
              <p className="nombre-gasto">{expense.name}</p>
              
              <p className="fecha-gasto">{ formatDate(expense.date) }</p>

            </div>
            <img className="handIcon" src={handIcon} alt="hand Icon" />
          </div>
          
          <p className="cantidad-gasto">{ formatMoney(expense.quantity) }</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense