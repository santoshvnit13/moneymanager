// Write your code here
const TransactionItem = props => {
  const {eachItem, passingFunction} = props
  const {titleValue, amountValue, optionValue, id} = eachItem

  const deleteItem = () => {
    passingFunction(id)
  }

  return (
    <li>
      <p>
        <span>{titleValue}</span> <span>Rs {amountValue}</span>{' '}
        <span>{optionValue}</span>
      </p>
      <button type="button" onClick={deleteItem} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
