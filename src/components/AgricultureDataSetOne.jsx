import React, { useState } from 'react';
import { Table } from "@mantine/core";
import { findYearlyMaxProduction, findYearlyMinProduction } from '../Utils/utils';
import AgricultureData from '../Data/Agriculture-DataSet.json';




const AgricultureDataSetOne = () => {
  const maxProduction = findYearlyMaxProduction(AgricultureData);
  const minProduction = findYearlyMinProduction(AgricultureData)

  // State to track whether to show all rows or just five rows
  const [showAllRows, setShowAllRows] = useState(false);

  // Function to toggle showAllRows state
  const toggleShowAllRows = () => {
    setShowAllRows(!showAllRows);
  };

  // Get the list of years based on the showAllRows state
  const yearsToShow = showAllRows ? Object.keys(maxProduction) : Object.keys(maxProduction).slice(0, 5);


  return (
    <div className="table-container">

      <Table className="table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production in that Year</Table.Th>
            <Table.Th>Crop with Minimum Production in that Year</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {yearsToShow.map(year => (
            <Table.Tr key={year}>
              <Table.Td>{year}</Table.Td>
              <Table.Td>{maxProduction[year]["Crop Name"]}</Table.Td>
              <Table.Td>{minProduction[year]["Crop Name"]}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>

      </Table>

      {/* Button to toggle between showing all rows and just five rows */}
      <button onClick={toggleShowAllRows} style={{
        display: 'block',
        margin: '10px auto',
      }}>
        {showAllRows ? 'Show Less' : 'Show More'}
      </button>
    </div>
  )
}

export default AgricultureDataSetOne;

