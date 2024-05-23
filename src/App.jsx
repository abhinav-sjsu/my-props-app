
/* props = read-only properties that are shared between components.
A parent component can send data to a child component.
<Component key=value>
*/
import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name="Abhinav" age={36} isStudent = {false}/>
      <Student name="Shyra" age={34} isStudent = {false}/>
      <Student name="Sia" age={4} isStudent = {true}/>
      <Student name="Aria" age={1} isStudent = {true}/>
      <Student></Student>
      <Student name="Ash"></Student>
    </>
  )
}

export default App
