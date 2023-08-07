const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({data}) => {
  return (
    <p>
      {data.part} {data.exercises}
    </p>
  )
}

const Content = ({titles}) => {
  return (
    <div>
      <Part data={titles[0]}/>
      <Part data={titles[1]}/>
      <Part data={titles[2]}/>
    </div>
  )
}

const Total = ({data}) => {
  const total = data.reduce((sum, item) => {return sum += item.exercises}, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const titles = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    },
  ];
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content titles={titles} />
      <Total data={titles}/>
    </div>
  )
}

export default App