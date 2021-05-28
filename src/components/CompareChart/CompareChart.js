import React from "react";
import "../CompareChart/CompareChart.css";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const CompareChart = ({ countriesToCompare }) => {

    const colors = scaleOrdinal(schemeCategory10).range();
    const renderBarChart = (
        <BarChart
            width={1200}
            height={450}
            data={countriesToCompare}
            margin={{
                top: 30,
                right: 30,
                left: 60,
                bottom: 30
            }}
        >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
            dataKey="population"
            fill="#8884d8"
            label={{ position: "top" }}
        >
        
        {countriesToCompare.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
        </Bar>
        {/* another Bar component can be added */}
    </BarChart>
    );

    return (
        <>
            {renderBarChart}
        </>
    );
}

export default CompareChart;