// Write your code here

const MoneyDetails = props => {
  const {item} = props
  const {yourBalance, yourIncome, yourExpenses} = item
  return (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <p>Your Balance</p>
        <p data-testid="balanceAmount">
          <span>Rs</span> {yourBalance}
        </p>
      </div>

      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt=" income"
        />
        <p>Your Income</p>
        <p data-testid="incomeAmount">
          <span>Rs</span> {yourIncome}
        </p>
      </div>

      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt=" expenses"
        />
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">
          <span>Rs</span> {yourExpenses}
        </p>
      </div>
    </>
  )
}

export default MoneyDetails
