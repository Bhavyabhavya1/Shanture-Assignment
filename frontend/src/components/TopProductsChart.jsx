import React, { useEffect, useState } from 'react';
import { fetchTopProducts } from '../services/api';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TopProductsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTopProducts().then((res) => setData(res.data));
  }, []);

  const chartData = {
    labels: data.map((item) => item._id),
    datasets: [
      {
        label: 'Total Sales',
        data: data.map((item) => item.totalSales),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Top Products by Sales</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default TopProductsChart;
