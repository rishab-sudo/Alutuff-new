import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PieChart.css';

const data = [
  { name: 'Humble Healthcare', value: 10 },
  { name: 'Ashoka Tarpaulin and HDPE Bags', value: 7 },
  { name: 'Ashoka Expended Polyethylene', value: 8 },
  { name: 'Florance PU Foam', value: 15 },
  { name: 'Himalaya Plastic & Molded Furniture', value: 10 },
  { name: 'Alutuff Composite Panel & WPC', value: 20 },
  { name: 'Springtek', value: 30 }
];

const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#00C49F', '#AA00FF', '#00B2FF', '#FF4B9F'];

const FancyPieChart = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="pie-chart-container">
      <h2 className="page-heading">Ashoka Foam Group Brands</h2>
      <ResponsiveContainer width="100%" height={isMobile ? 350 : 400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={isMobile ? false : ({ percent, name }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={isMobile ? 100 : 150}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign={isMobile ? 'bottom' : 'middle'}
            align={isMobile ? 'center' : 'right'}
            layout={isMobile ? 'horizontal' : 'vertical'}
            wrapperStyle={isMobile ? { marginTop: 20 } : {}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FancyPieChart;
