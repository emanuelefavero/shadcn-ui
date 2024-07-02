'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  className?: string
}

function DealsAndRevenueChart({ className }: Props) {
  const data = {
    labels: ['May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
      {
        label: 'Deals',
        data: [20, 600, 380, 350, 200, 600], // Sample data for deals
        borderColor: 'rgba(129, 141, 248)',
        backgroundColor: 'rgba(129, 141, 248, 0.2)',
      },
      {
        label: 'Revenue',
        data: [100, 300, 600, 680, 680, 1000], // Sample data for revenue
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(169, 85, 247, 0.2)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Deals and Revenue Over 6 Months',
      },
    },
  }

  return (
    <div className={className}>
      <Line data={data} options={options} />
    </div>
  )
}

export { DealsAndRevenueChart }
