import React, { useState } from 'react';
import './Tableau.css';

const TableauEditable = () => {
  const [tableData, setTableData] = useState({
    row1: ['', '', '', ''],
    row2: ['', '', '', ''],
    row3: ['', '', '', ''],
  });

  const handleInputChange = (e, row, index) => {
    const updatedRow = [...tableData[row]];
    updatedRow[index] = e.target.value;
    setTableData({ ...tableData, [row]: updatedRow });
  };

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
          {/* Première ligne modifiable */}
          <tr>
            {tableData.row1.map((value, index) => (
              <td key={index} className="yellow-cell">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(e, 'row1', index)}
                  className="editable-cell"
                />
              </td>
            ))}
          </tr>

          {/* Deuxième ligne modifiable */}
          <tr>
            {tableData.row2.map((value, index) => (
              <td key={index} className="cyan-cell">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(e, 'row2', index)}
                  className="editable-cell"
                />
              </td>
            ))}
          </tr>

          {/* Troisième ligne modifiable */}
          <tr>
            {tableData.row3.map((value, index) => (
              <td key={index} className="gradient-cell">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(e, 'row3', index)}
                  className="editable-cell"
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableauEditable;
