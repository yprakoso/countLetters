var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function getTotalTaxes(totalSales, province) {
  var totalTaxes = totalSales * salesTaxRates[province];
  return totalTaxes;
}

function getTotalSales(company) {
  var totalObj = {};
  var total = 0;
  for (value of company.sales) {
    total += value;
  }
  totalObj.totalSales = total;
  totalObj.totalTaxes = getTotalTaxes(total, company.province);
  return totalObj;
}

function calculateSalesTax(salesData, taxRates) {
  var result = {};
  for (company of salesData) {
    if (!result[company.name]) {
      result[company.name] = getTotalSales(company);
    } else {
      result[company.name]['totalSales'] += getTotalSales(company).totalSales;
      result[company.name]['totalTaxes'] += getTotalSales(company).totalTaxes;
    }
  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/