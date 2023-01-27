'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { plex } from './font'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.no}>No.</h1>
      <Chart />
    </main>
  )
}

const Chart = () => {
  return <Line options={options} data={data} />
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  borderWidth: 4,
  plugins: {
    filler: {
      drawTime: 'beforeDatasetDraw' as const,
      propagate: false,
    },
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          size: 20,
          family: plex.style.fontFamily,
        },
      },
    },
    title: {
      display: true,
      text: '(count of imports from...)',
      padding: 20,
      font: {
        size: 40,
        family: plex.style.fontFamily,
        style: 'italic' as const,
      },
    },
  },
}

const labels = ["Oct '22", "Jan '23"]

export const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Monorail v1',
      data: [2800, 2639],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: true,
    },
    {
      label: 'Monorail v2',
      data: [1500, 1242],
      borderColor: 'rgb(250, 200, 25)',
      backgroundColor: 'rgba(250, 200, 25, 0.5)',
      fill: {
        target: true,
        above: 'rgb(255, 0, 0)', // Area will be red above the origin
        below: 'rgb(0, 0, 255)', // And blue below the origin
      },
    },
    {
      label: 'Monoblocks',
      data: [650, 592],
      borderColor: 'rgb(200, 162, 235)',
      backgroundColor: 'rgba(200, 162, 235, 0.5)',
      fill: true,
    },
    {
      label: 'Monorail v3',
      data: [0, 328],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      fill: true,
    },
  ],
}

// Monorail v1 Imports: 2639
// Monorail v2 Imports: 1242
// Monoblocks Imports: 592
// 🚀 Monorail v3 Imports: 328 (6.83%)
