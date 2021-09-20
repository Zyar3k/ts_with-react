import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "John",
    last: "Wayne"
  };

  const nameList = [
    { first: "John", last: "Wayne" },
    { first: "Bruce", last: "Wayne" },
    { first: "Mark", last: "Twain" }
  ];
  return (
    <div className='App'>
      <Greet name='Alex' messageCount={33} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
