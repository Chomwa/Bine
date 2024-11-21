import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const data = [
  { date: '2024-03-01', value: 4000 },
  { date: '2024-03-02', value: 3000 },
  { date: '2024-03-03', value: 2000 },
  { date: '2024-03-04', value: 2780 },
  { date: '2024-03-05', value: 1890 },
  { date: '2024-03-06', value: 2390 },
  { date: '2024-03-07', value: 3490 },
].map(item => ({
  ...item,
  date: new Date(item.date)
}));

export default function TransactionChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => format(date, 'MMM d')}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(date) => format(date, 'MMM d, yyyy')}
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Volume']}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            fill="#3b82f6"
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}