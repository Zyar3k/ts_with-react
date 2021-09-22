import "./App.css";
// import DomRef from "./components/ref/DomRef";
// import MutableRef from "./components/ref/MutableRef";
// import Counter from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
// import Box from "./components/context/Box";
// import ThemeContextProvider from "./components/context/ThemeContext";
// import UserContextProvider from "./components/context/UserContext";
// import User from "./components/context/User";
// import Counter from "./components/state/Counter";
// import Button from "./components/Button";
// import Container from "./components/Container";
// import Input from "./components/Input";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import LoggedIn from "./components/state/LoggedIn";
// import User from "./components/state/User";
// import Status from "./components/Status";

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
      <Private isLoggedIn={true} Component={Profile} />
      {/* <Counter message='The count value is' /> */}
      {/* <DomRef />
      <MutableRef /> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Box />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <LoggedIn /> */}
      {/* <Container styles={{ border: "1px solid red", padding: "1rem" }} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("button click", event, id);
        }}
      /> */}
      {/* <Input value='' handleChange={(event) => console.log(event)} /> */}
      {/* <Heading>Lorem, ipsum dolor.</Heading>
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Mario Puzzo</Heading>
      </Oscar>
      <Greet name='Alex' isLoggedIn={true} /> */}
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
    </div>
  );
}

export default App;
