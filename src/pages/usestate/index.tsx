import { useState } from "react";
import { User } from "./interfaces";

export default function App() {
  const [user, setUser] = useState<User>();

  const fetchUser = () => {
    const userInfo = {
      name: "Mitchel",
      age: 23,
      country: "the Netherlands",
      address: {
        street: "Main st.",
        number: 88,
        zip: "21345",
      },
      admin: false,
    }

    setUser(userInfo);
  }


  return (
    <>
      <button onClick={fetchUser}>Fetch user on click</button>
      {user && <p>{`Welcome ${typeof user.age}`}</p>}
      {user && <p>{`Welcome ${user.country}`}</p>}
      {user && <p>{`Welcome ${user.name}`}</p>}
      {user && <p>{`Welcome ${user.age}`}</p>}
    </>
  );
}