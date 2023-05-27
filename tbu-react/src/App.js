import './App.css';
import Person from './Person/Person'

function App() {
  const state = {
    persons: [
      { name: "Adarsh", age: 23},
      { name: "Sargun", age: 22},
      { name: "Alex", age: 25},
      { name: "Sophie", age:24}

    ]
  }
  return (
    <div className="App">
      <h1>Hello from React App</h1>
      <p>This is really working</p>
      <button>Switch Name</button>
      <Person name={state.persons[0].name} age={state.persons[0].age}/>
      <Person name={state.persons[1].name} age={state.persons[1].age}/>
      <Person name={state.persons[2].name} age={state.persons[2].age}>My hobbies are coding, swimming, martial arts</Person>
    </div>
  );
}

export default App;