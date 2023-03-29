import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleValue: '',
    amountValue: '',
    optionValue: 'INCOME',
    historyList: [],
    yourBalance: 0,
    yourIncome: 0,
    yourExpenses: 0,
  }

  submitForm = event => {
    event.preventDefault()
    const {
      titleValue,
      amountValue,
      optionValue,
      historyList,
      yourIncome,
      yourExpenses,
      yourBalance,
    } = this.state
    const newList = {
      titleValue,
      amountValue: parseInt(amountValue),
      optionValue,
      id: v4(),
    }

    if (optionValue === 'INCOME' && historyList.length === 0) {
      this.setState(prevState => ({
        historyList: [...prevState.historyList, newList],
        yourBalance: parseInt(amountValue),
        yourIncome: parseInt(amountValue),
        yourExpenses: 0,
        titleValue: '',
        amountValue: '',
      }))
    } else if (optionValue === 'EXPENSES' && historyList.length === 0) {
      this.setState(prevState => ({
        historyList: [...prevState.historyList, newList],
        yourBalance: -parseInt(amountValue),
        yourExpenses: parseInt(amountValue),
        yourIncome: 0,
        titleValue: '',
        amountValue: '',
      }))
    } else if (optionValue === 'INCOME' && historyList.length !== 0) {
      this.setState(prevState => ({
        historyList: [...prevState.historyList, newList],
        yourBalance: prevState.yourBalance + parseInt(amountValue),
        yourIncome: prevState.yourIncome + parseInt(amountValue),
        yourExpenses,
        titleValue: '',
        amountValue: '',
      }))
    } else if (optionValue === 'EXPENSES' && historyList.length !== 0) {
      this.setState(prevState => ({
        historyList: [...prevState.historyList, newList],
        yourBalance: prevState.yourBalance - parseInt(amountValue),
        yourExpenses: prevState.yourExpenses + parseInt(amountValue),
        yourIncome,
        titleValue: '',
        amountValue: '',
      }))
    }
  }

  titleFunction = event => {
    this.setState({titleValue: event.target.value})
  }

  amountFunction = event => {
    this.setState({amountValue: event.target.value})
  }

  optionFunction = event => {
    this.setState({optionValue: event.target.value})
  }

  passingFunction = id => {
    const {historyList, yourExpenses, yourIncome, yourBalance} = this.state
    const filteredList = historyList.filter(item1 => item1.id === id)
    if (filteredList[0].optionValue === 'INCOME') {
      this.setState(prevState => ({
        historyList: historyList.filter(hello => hello.id !== id),
        yourBalance:
          prevState.yourBalance - parseInt(filteredList[0].amountValue),
        yourIncome:
          prevState.yourIncome - parseInt(filteredList[0].amountValue),
        yourExpenses,
      }))
    } else if (filteredList[0].optionValue === 'EXPENSES') {
      this.setState(prevState => ({
        historyList: historyList.filter(hello1 => hello1.id !== id),
        yourBalance:
          prevState.yourBalance + parseInt(filteredList[0].amountValue),
        yourExpenses:
          prevState.yourExpenses - parseInt(filteredList[0].yourExpenses),
        yourIncome,
      }))
    }
  }

  render() {
    const {
      titleValue,
      amountValue,
      optionValue,
      historyList,
      yourBalance,
      yourExpenses,
      yourIncome,
    } = this.state
    const moneyDetails = {yourBalance, yourExpenses, yourIncome}
    return (
      <>
        <div>
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails item={moneyDetails} />
        <form onSubmit={this.submitForm}>
          <h1>Add Transaction</h1>
          <label htmlFor="title">TITLE</label>
          <input
            id="title"
            onChange={this.titleFunction}
            value={titleValue}
            placeholder="TITLE"
          />

          <label htmlFor="amount">AMOUNT</label>
          <input
            id="amount"
            onChange={this.amountFunction}
            value={amountValue}
            placeholder="AMOUNT"
          />

          <label htmlFor="type">TYPE</label>
          <select id="type" onChange={this.optionFunction} value={optionValue}>
            <option value="INCOME">Income</option>
            <option value="EXPENSES">Expenses</option>
          </select>

          <button type="submit">Add</button>
        </form>

        <div>
          <h1>History</h1>
          <p>Title</p>
          <p>Amount </p>
          <p>Type </p>
          <ul>
            {historyList.map(eachItem => (
              <TransactionItem
                eachItem={eachItem}
                key={eachItem.id}
                passingFunction={this.passingFunction}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default MoneyManager
