'use client'

import React from 'react'
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
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Revenue',
        data: [100, 300, 600, 680, 680, 1000], // Sample data for revenue
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
