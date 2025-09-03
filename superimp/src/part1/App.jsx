
const Header = ({course}) => {
  return(
    <div>
      <p> {course} </p>
    </div>
  )
}

const Parts = ({name, exercise}) => {
  return (
    <p>
      {name} {exercise}
    </p>
  )

}

const Contents = ({parts , exercise} ) => {
  return (
    <div>
    <Parts name={parts[0]} exercises={exercise[0]} />
    <Parts name={parts[1]} exercises={exercise[1]} />
    <Parts name={parts[2]} exercises={exercise[2]} />
    </div>
  )
}

const Total = ({total}) => {
  return (
    <div>
      <p> Total Exercise is {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    'Fundamentals of React' , 'Using props to pass data' , 'State of a component'
  ]
  const exercise = [10 , 7, 14]
  const total = exercise[0] + exercise[1] + exercise[2]

  return (
    <div>
      <Header course = {course} />
      <Contents parts = {parts} exercise = {exercise} />
      <Total total = {total} />
    </div>
  )
}

export default App
