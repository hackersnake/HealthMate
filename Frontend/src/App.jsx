import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      {isLogin ? <LoginForm /> : <SignUpForm />}

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span className="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default App;
