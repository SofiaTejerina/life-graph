import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="data-container">
        <div className="title">Login</div>
        <input
          autoFocus
          value={"Valor default"}
          placeholder={"Integra el mail"}
          onChange={(evt) => {
            console.log(evt);
          }}
        />
        <input
          autoFocus
          value={"Valor default"}
          placeholder={"Integra el password"}
          onChange={(evt) => {
            console.log(evt);
          }}
        />
      </div>
    </div>
  );
};

export default Login;
