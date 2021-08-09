import React ,{useState,useEffect} from 'react';
import  './Chartsui.css';
import * as d3 from "d3";
import { PieChart, Pie, Cell } from "recharts";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const data = [
    { name: "Postive Reviews", value: 4286 },
    { name: "Negative Reviews", value: 2718 }
  ];
  const data01 = [
    { name: "Postive Reviews", value: 4617 },
    { name: "Negative Reviews", value: 2730 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const COLORS1=["#00C49F", "#FFBB28"]

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  } )=> {
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



<link href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css" rel="stylesheet" type="text/css"/>


const Chartsui=()=>{


    const [Data, setdata] = useState("");
    const [Data1,setdata1]=useState('')

    useEffect(() => {
      d3.json("P1_chart.json").then((d) => {
        setdata(d);
        console.log(d);
      });
      return () => undefined;
    }, []);

    useEffect(() => {
        d3.json("P2_chart.json").then((d) => {
          setdata1(d);
          console.log(d);
        });
        return () => undefined;
      }, []);
    
    
return(
    <div className="Chartsui"> 
        <div class="container">
            <main>
                <div class="dashboard-container">
                    <div class="card-1">
                        <h4 class="chart-lbl">Doughnut Chart</h4>
                        <div class="divider"></div>
                        <div class="content-center">
                            <div class="doughnut-chart-container">
                            <PieChart width={500} height={300}>
                             <Pie
    
                            data={data01}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
                            ))}
                            </Pie>
      
                            </PieChart>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="card-2">
                        <h4 class="chart-lbl">PIE Chart</h4>
                        <div class="divider"></div>
                        <div class="content-center">
                            <div class="pie-chart-container">
                            <PieChart width={400} height={300}>
                             <Pie
    
                            data={data}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
      
                            </PieChart>
                            
                               
                            </div>
                        </div>
                    </div>
                    <div class="card-3">
                        <h4 class="chart-lbl">Product 1</h4>
                        <div class="divider"></div>
                        <div class="bar-chart-container">
                        <BarChart
                            width={700}
                            height={200}
                            data={Data1}
                            margin={{
                            top: 5,
                            right: 30,
                            left: 10,
                            bottom: 5
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Aspect" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="POSITIVE" fill="#8884d8"  barSize={25} />
                            <Bar dataKey="NEGATIVE" fill="#ccc" barSize={25}/>
                            </BarChart>
                            
                           
                        </div>
                    </div>
                    <div class="card-4">
                        <h4 class="chart-lbl">Product 2</h4>
                        <div class="divider"></div>
                        <div class="bar-chart-container">
                        <BarChart
                            width={680}
                            height={200}
                            data={Data}
                            margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Aspect" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="POSITIVE" fill="#8884d8" barSize={25}/>
                            <Bar dataKey="NEGATIVE" fill="#82ca9d" barSize={25} />
                            </BarChart>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>        
        

    </div>



    );
}

export default Chartsui;

