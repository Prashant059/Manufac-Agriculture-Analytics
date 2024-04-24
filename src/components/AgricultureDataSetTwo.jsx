import React, { useState } from 'react'
import { calculateAverageYield, calculateAverageCultivationArea } from '../Utils/utils';
import { Table } from '@mantine/core';
import AgricultureData from '../Data/Agriculture-DataSet.json'

const AgricultureDataSetTwo = () => {

  const averageYield = calculateAverageYield(AgricultureData);
  const averageCultivationAreaByCrop = calculateAverageCultivationArea(AgricultureData);

  // State to track whether to show all rows or just five rows
  const [showAllRows, setShowAllRows] = useState(false);

  // Function to toggle showAllRows state
  const toggleShowAllRows = () => {
    setShowAllRows(!showAllRows);
  };

  // Get the list of years based on the showAllRows state
  const yearsToShow = showAllRows ? Object.keys(averageYield) : Object.keys(averageYield).slice(0, 5);

  return (
    <div className="table-container">

      <Table className="table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crops</Table.Th>
            <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
            <Table.Th>Average Cultivation Area of the Crop between 1950-2020</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {yearsToShow.map((year) => (
            <Table.Tr key={year}>
              <Table.Td>{year}</Table.Td>
              <Table.Td>{averageYield[year].toFixed(3)}</Table.Td>
              <Table.Td>{averageCultivationAreaByCrop[year].toFixed(3)}</Table.Td>
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

export default AgricultureDataSetTwo