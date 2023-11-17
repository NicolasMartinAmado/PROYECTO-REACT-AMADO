import { useState } from "react";

const Adduserform = () => {
  const [fields, setfields] = useState({
    name: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const Handlesubmit = (event) => {
    event.preventdefault();

    console.log(fields);
  };

  return (
    <>
      <form onSubmit={Handlesubmit} id="form" action="">
        <h2 className="ttl">REGISTRESE COMPLETANDO LOS DATOS</h2>
        <div className="nam">
          <label>Nombre</label>

          <input
            name="name"
            value={fields.name}
            onChange={(e) => setfields({ ...fields, name: e.target.value })}
            className="nombre"
            type="text"
          />
        </div>
        <div className="apellidos">
          <label>Apellido</label>

          <input
            lastname="lastname"
            value={fields.lastname}
            onChange={(e) => setfields({ ...fields, lastname: e.target.value })}
            className="apellido"
            type="text"
          />
        </div>
        <div className="emails">
          <label>E-mail</label>

          <input
            email="email"
            value={fields.email}
            onChange={(e) => setfields({ ...fields, email: e.target.value })}
            className="email"
            type="text"
          />
        </div>
        <div className="phone">
          <label>Phone Number</label>

          <input
            phonenumber="phonenumber"
            value={fields.phonenumber}
            onChange={(e) =>
              setfields({ ...fields, phonenumber: e.target.value })
            }
            className="email"
            type="number"
          />
        </div>
        <div className="password">
          <label>Password</label>

          <input
            password="password"
            value={fields.password}
            onChange={(e) => setfields({ ...fields, password: e.target.value })}
            className="email"
            type="password"
          />
        </div>
        <div>
          <input
            type="submit"
            name="Registrarme"
            id="regi"
            value="Registrarme"
          />
        </div>
      </form>
    </>
  );
};
export default Adduserform;
