import React, { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Sum from "./Sum";
import Multiply from "./Multiply";

function App() {
  const [userList, setuserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getuserList = () => {
    axios.get("https://reqres.in/api/users").then((res) => {
      setuserList(res.data.data);
      setLoading(false);
      console.log(res.data.data);
    });
  };

  return (
    <div className="container App">
      <Sum />
      <Multiply />
      <div className="clearfix"></div>
      {/* .filter((item, index) => index < 2) */}

      {/* {userList.length === 0 && (
            <tr>
              <td className="text-center" colSpan="4">
                <b>No Data Found to display</b>
              </td>
            </tr>
          )} */}
      <h4 className="d-inline-block">Clue Mediator</h4>
      <Button
        variant="info"
        size="sm"
        onClick={getuserList}
        style={{ color: "white", float: "right" }}
      >
        {loading ? "Loading..." : "Get userList"}
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((x, i) => (
            <tr key={i}>
              <td style={{ color: "red" }}>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td>
                <img src={x.avatar} alt="avatar_image" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
