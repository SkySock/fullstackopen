import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) return (<>No feedback given</>)
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={good + neutral + bad}/>
        <StatisticLine text="average" value={(good + bad * -1) / (good + neutral + bad)}/>
        <StatisticLine text="positive" value={(good) / (good + neutral + bad) * 100 + " %"}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (val, fn) => () => {fn(val + 1)
  }

  return (
    <div>
      <Header text={"give feedback"}></Header>
      <div>
        <Button text="good" handleClick={handleClick(good, setGood)}></Button>
        <Button text="neutral" handleClick={handleClick(neutral, setNeutral)}></Button>
        <Button text="bad" handleClick={handleClick(bad, setBad)}></Button>
      </div>
      <Header text="statistics"></Header>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App