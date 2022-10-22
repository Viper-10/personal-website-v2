import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  BarElement,
} from "chart.js";
import { backgroundColors, borderColors } from "../..";
import skills from "../../skills.json";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const data = {
    labels: skills.map(({ name }) => name),
    datasets: [
      {
        label: "Languages and Frameworks",
        data: skills.map(({ percent }) => percent),
        backgroundColor: backgroundColors.map((color) => color),
        borderColor: borderColors.map((color) => color),
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = "Score: ";

            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 4,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "#fff",
        },
        ticks: {
          color: "#eee",
        },
      },

      y: {
        grid: {
          display: false,
          borderColor: "#fff",
        },
        ticks: {
          color: "#eee",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div style={{ maxWidth: "600px", marginTop: "75px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
