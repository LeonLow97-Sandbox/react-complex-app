import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jie Wei</td>
            <td>Choa Chu Kang</td>
            <td>93876001</td>
            <td>jiewei@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
