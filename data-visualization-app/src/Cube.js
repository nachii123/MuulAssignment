// import { useCubeQuery } from '@cubejs-client/react';
import { useCubeQuery } from '@cubejs-client/react';
// const cubejsApi = cubejs('YOUR_REAL_CUBE_JS_TOKEN', { apiUrl: `${API_URL}/cubejs-api/v1` });


const LineChart = () => {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['DataTable.totalValue'],
    dimensions: ['DataTable.timestamp'],
    timeDimensions: [{ dimension: 'DataTable.timestamp', granularity: 'day' }]
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.toString()}</div>;

  return (
    <Line data={chartData} /> // Use a charting library like Chart.js or Recharts
  );
};
