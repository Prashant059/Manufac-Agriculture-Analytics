import React from 'react';
import { calculateAverageYield } from './yourUtilityFile'; // Import the utility function

const YourComponent = ({ yourData }) => {
  // Call the utility function to get average yield data
  const averageYieldByCrop = calculateAverageYield(yourData);

  return (
    <div>
      <h2>Average Yield by Crop</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            {Object.keys(averageYieldByCrop).map(cropName => (
              <th key={cropName}>{cropName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render data for each year */}
          {/* Assuming yourData contains data for multiple years */}
          {yourData.map(entry => (
            <tr key={entry.Year}>
              <td>{entry.Year}</td>
              {Object.keys(averageYieldByCrop).map(cropName => (
                <td key={cropName}>{averageYieldByCrop[cropName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;
