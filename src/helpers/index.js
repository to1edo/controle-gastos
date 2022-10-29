const formatDate = (date)=>{
  return new Intl.DateTimeFormat('pt-BR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(date)
}

const formatMoney = (money)=>{
  return money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export{
  formatDate,
  formatMoney
}