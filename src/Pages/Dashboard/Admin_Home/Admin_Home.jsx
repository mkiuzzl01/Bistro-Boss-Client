import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FiBook, FiDollarSign, FiList, FiUsers } from "react-icons/fi";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Admin_Home = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: stats = [] } = useQuery({
    queryKey: ["Admin-Stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  //order chart related api fetch
  const { data: orderChart = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  //custom Shape bar chart code
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //pi chart related code
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const piChartData = orderChart.map(data=>{
    return {name:data.category, value:data.revenue};
  })

  return (
    <div className="p-10">
      <h1 className="text-2xl">
        <span>Hi,Welcome </span>
        {user ? user.displayName : "back"}
        <div className="pt-10">
          {/* Show Stats visual */}

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FiList className="text-3xl"></FiList>
              </div>
              <div className="stat-title">Menus</div>
              <div className="stat-value">{stats.menus}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FiUsers></FiUsers>
              </div>
              <div className="stat-title">Users</div>
              <div className="stat-value">{stats.users}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FiBook></FiBook>
              </div>
              <div className="stat-title">Total Payments</div>
              <div className="stat-value">{stats.payments}</div>
              <div className="stat-desc"> ↗︎ 90 (14%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FiDollarSign></FiDollarSign>
              </div>
              <div className="stat-title">Total Revenue</div>
              <div className="stat-value">{stats.revenue}</div>
              <div className="stat-desc"> ↗︎ 90 (14%)</div>
            </div>
          </div>
          {/* show rechart */}
          <div className="flex">
            <div>
              <BarChart
                width={500}
                height={300}
                data={orderChart}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar
                  dataKey="quantity"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {orderChart.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
            <div>
              <PieChart width={400} height={400}>
                <Pie
                  data={piChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {piChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Legend></Legend>
              </PieChart>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Admin_Home;
