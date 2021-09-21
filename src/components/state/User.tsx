import { useState } from "react";

type AuthUser = {
  name: string;
  mail: string;
};

const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "John",
      mail: "John@example.com"
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <h2>User name is {user.name}</h2>
      <h4>User mail is {user.mail}</h4>
    </div>
  );
};

export default User;
