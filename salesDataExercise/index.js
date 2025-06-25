// Read the JSON file from CLI app.
const fs = require('fs');

const jsonData = fs.readFileSync('sales_data.json', 'utf8');
const salesData = JSON.parse(jsonData);
console.log('salesData',salesData);

// salesData with totalSales
salesData.map(item => {
  item.totalSaleForProduct = item.unitsSold * item.unitPrice;
});
console.log('salesData with totalSales', salesData);

// Print report in a table format:
console.table(salesData)

// Sort by unitsSold, totalRevenue, or product name
const sortByUnitsSold = salesData.sort((a, b) => a.unitsSold - b.unitsSold);
console.log('sortByUnitsSold',sortByUnitsSold)
const sortByTotalRevenue = salesData.sort((a, b) => (a.unitPrice * a.unitsSold) - (b.unitPrice * b.unitsSold));
console.log('sortByTotalRevenue', sortByTotalRevenue);
const sortByProductName = salesData.sort((a, b) =>  a.product.localeCompare(b.product));
console.log('sortByProductName', sortByProductName);

// Find product with max sales
const maxSalesProduct = salesData.reduce((acc, item) => {
  const totalRevenue = item.unitPrice * item.unitsSold;
  return totalRevenue > acc.totalRevenue ? { product: item.product, totalRevenue } : acc;
}, { product: '', totalRevenue: 0 });
console.log('maxSalesProduct', maxSalesProduct);

// Total revenue across all products
const totalRevenue = salesData.reduce((acc, item) => acc + (item.unitPrice * item.unitsSold), 0);
console.log('totalRevenue', totalRevenue);