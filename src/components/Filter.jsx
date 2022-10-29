import {useEffect, useState}from 'react'

const Filter = ({setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form >
        <div className="campo">
          <label htmlFor="filter">Filtro por categoria</label>
          <select
            id="filter"
            onChange={(e)=>setFilter(e.target.value)}
          >
            <option value="">-- Mostrar todas--</option>
            <option value="saving">Poupança</option>
            <option value="food">Alimentação</option>
            <option value="home">Casa</option>
            <option value="expenses">Despesas variadas</option>
            <option value="leisure">Lazer</option>
            <option value="health">Saúde</option>
            <option value="subscription">Subscrições</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter