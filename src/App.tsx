import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import LoggedIn from "./components/state/LoggedIn";
// import Status from "./components/Status";

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
      <LoggedIn />
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
      <Button
        handleClick={(event, id) => {
          console.log("button click", event, id);
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
      {/* <Heading>Lorem, ipsum dolor.</Heading>
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Mario Puzzo</Heading>
      </Oscar>
      <Greet name='Alex' isLoggedIn={true} /> */}
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
