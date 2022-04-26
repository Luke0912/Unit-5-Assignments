import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Context/AuthContext";
import { TokenContext } from "../Context/TokenContext";

export const Status = () => {
  const [status, setStatus] = useState("");
  const [tok, setTok] = useState("");
  const { isAuth } = useContext(AuthContext);
  const { token } = useContext(TokenContext);
useEffect(()=>{
    if (isAuth) {
        setStatus("LoggedIn");
        setTok(token);
      } else {
        setStatus("LoggedOut");
      }
},[])
  return (
    <div>
      <p>status:{status}</p>
      <p>token:{tok}</p>
    </div>
  );
};
