import logo from './logo.svg';
import './App.css';
import { Chart } from 'react-google-charts';

export const data = [
  ['Жанр', 'Количество'],
  ['Исторический', 9],
  ['Комедия', 6],
  ['Приключения', 24],
  ['Боевик', 35],
  ['Романтический', 26],
];

export const options = {
  title: 'Репертуар кинотеатра по жанрам за 2024 год',
};
function App() {
  return (
    <div className="Chart-container">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'100%'}
        height={'600px'}
      />
    </div>
  );
}

export default App;
