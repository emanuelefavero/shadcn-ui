'use client'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'

// Register components with ChartJS
ChartJS.register(Tooltip, Legend, ArcElement)

function TopRevenueChart() {
  let data = [
    {
      label: 'Direct',
      value: 1300,
      color: 'rgb(168, 85, 247)',
      cutout: '60%',
    },
    {
      label: 'Paid',
      value: 850,
      color: '#0ea5e9',
      cutout: '50%',
    },
    {
      label: 'Social',
      value: 1500,
      color: 'rgb(99, 102, 241)',
      cutout: '50%',
    },
    {
      label: 'Other',
      value: 650,
      color: '#14b8a6',
      cutout: '50%',
    },
  ]

  const options: any = {
    plugins: {
      responsive: true,
      legend: {
        position: 'bottom' as const,
        align: 'center' as const,

        labels: {
          color: '#64748b',
          usePointStyle: true,
          boxWidth: 9,
          boxHeight: 9,

          font: {
            size: 14,
          },

          padding: 25,
        },
      },
    },
    cutout: data.map((item) => item.cutout),
  }

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  }

  return (
    <div className='flex justify-center'>
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

export { TopRevenueChart }
