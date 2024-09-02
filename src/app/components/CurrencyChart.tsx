import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface CurrencyChartProps {
    pastData: { time: string; best_bid: number; best_ask: number }[];
    curreny: string;
}

const initDataSet = {
    labels: [] as string[],
    datasets: [
        {
            label: 'Best Bid',
            data: [] as number[],
            borderColor: 'blue',
            backgroundColor: 'blue',
        },
        {
            label: 'Best Ask',
            data: [] as number[],
            borderColor: 'orange',
            backgroundColor: 'orange',
        },
    ],
}

const CurrencyChart: React.FC<CurrencyChartProps> = ({ pastData, curreny }) => {
    const [chartData, setChartData] = useState(initDataSet);

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title: {
                display: true,
                text: 'Ladder View ' + curreny,
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    useEffect(() => {
        const labels = pastData.map((item) => new Date(item.time).toLocaleTimeString());
        const bestBids = pastData.map((item) => item.best_bid);
        const bestAsks = pastData.map((item) => item.best_ask);
        setChartData((prevData) => ({
            ...prevData,
            labels,
            datasets: [
                { ...prevData.datasets[0], data: bestBids },
                { ...prevData.datasets[1], data: bestAsks },
            ],
        }));
    }, [pastData]);

    return (
        <div className="mt-5" style={{ position: 'relative', height: '50vh', width: '100%' }}>
            {pastData.length > 0 && <Line data={chartData} options={options} />}
        </div>
    );
};

export default CurrencyChart;
