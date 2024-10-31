import React from 'react';
import './Tableau.css';

const Tableau = () => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Hashtags</th>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="yellow-cell"></td>
            <td className="yellow-cell"></td>
            <td className="yellow-cell"></td>
            <td className="yellow-cell"></td>
          </tr>
          <tr>
            <td className="cyan-cell"></td>
            <td className="cyan-cell"></td>
            <td className="cyan-cell"></td>
            <td className="cyan-cell"></td>
          </tr>
          <tr>
            <td className="gradient-cell"></td>
            <td className="gradient-cell"></td>
            <td className="gradient-cell"></td>
            <td className="gradient-cell"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tableau;
