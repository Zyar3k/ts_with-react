import "./App.css";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  // const personName = {
  //   first: "John",
  //   last: "Wayne"
  // };

  // const nameList = [
  //   { first: "John", last: "Wayne" },
  //   { first: "Bruce", last: "Wayne" },
  //   { first: "Mark", last: "Twain" }
  // ];
  return (
    <div className='App'>
      <Heading>Lorem, ipsum dolor.</Heading>
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Mario Puzzo</Heading>
      </Oscar>
      <Greet name='Alex' isLoggedIn={true} />
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
    </div>
  );
}

export default App;
