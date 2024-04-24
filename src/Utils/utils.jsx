// Resuable function for finding Maximum Production Year wise.
export function findYearlyMaxProduction(data) {
    const maxProduction = {};

    // Group data by year
    const yearlyData = {};
    data.forEach(entry => {
        const year = entry["Year"];
        if (!yearlyData[year]) {
            yearlyData[year] = [];
        }
        yearlyData[year].push(entry);
    });

    // Calculate maximum production for each year
    for (const year in yearlyData) {
        const entries = yearlyData[year];
        maxProduction[year] = entries.reduce((max, entry) => {
            const production = parseFloat(entry["Crop Production (UOM:t(Tonnes))"]) || 0; 
            return production > max.production ? { ...entry, production } : max;
        }, { production: -Infinity });
    }

    return maxProduction;
}


// Resuable function for finding Minimum Production Year wise.
export function findYearlyMinProduction(data) {
    const minProduction = {};

    // Group data by year
    const yearlyData = {};
    data.forEach(entry => {
        const year = entry["Year"];
        if (!yearlyData[year]) {
            yearlyData[year] = [];
        }
        yearlyData[year].push(entry);
    });

    // Calculate minimum production for each year
    for (const year in yearlyData) {
        const entries = yearlyData[year];
        minProduction[year] = entries.reduce((min, entry) => {
            const production = parseFloat(entry["Crop Production (UOM:t(Tonnes))"]) || 0;
            return production < min.production ? { ...entry, production } : min;
        }, { production: Infinity });
    }

    return minProduction;
}


// Funtion for finding Average Yield of the Crop between 1950-2020.
export function calculateAverageYield(data) {
    const cropYieldSum = {};
    const cropYieldCount = {};
  
    data.forEach(entry => {
      const year = entry.Year;
      const cropName = entry["Crop Name"];
      const cropYield = parseFloat(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0;
  
      if (cropYield) {
        if (cropYieldSum[cropName]) {
          cropYieldSum[cropName] += cropYield;
          cropYieldCount[cropName]++;
        } else {
          cropYieldSum[cropName] = cropYield;
          cropYieldCount[cropName] = 1;
        }
      }
    });
  
    const averageYieldByCrop = {};
    for (const cropName in cropYieldSum) {
      averageYieldByCrop[cropName] = cropYieldSum[cropName] / cropYieldCount[cropName];
    }
  
    return averageYieldByCrop;
  }


// Funtion for finding Average Cultivation Area of the Crop between 1950-2020.
  export function calculateAverageCultivationArea(data) {
    const cropAreaSum = {};
    const cropAreaCount = {};
  
    data.forEach(entry => {
      const year = entry.Year;
      const cropName = entry["Crop Name"];
      const cultivationArea = parseFloat(entry["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;
  
      if (cultivationArea) {
        if (cropAreaSum[cropName]) {
          cropAreaSum[cropName] += cultivationArea;
          cropAreaCount[cropName]++;
        } else {
          cropAreaSum[cropName] = cultivationArea;
          cropAreaCount[cropName] = 1;
        }
      }
    });
  
    const averageCultivationAreaByCrop = {};
    for (const cropName in cropAreaSum) {
      averageCultivationAreaByCrop[cropName] = cropAreaSum[cropName] / cropAreaCount[cropName];
    }
  
    return averageCultivationAreaByCrop;
  };
  
  