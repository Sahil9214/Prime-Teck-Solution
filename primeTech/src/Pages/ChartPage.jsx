import React, { useCallback, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../redux/action";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import "../Styles/Chart.css";
const ChartPage = () => {
  const dispatch = useDispatch();

  const [role, setRole] = useState("");

  const [fullStack, setFullStack] = useState(0);
  const [product, setProduct] = useState(0);
  const [dataAnalyst, setDataAnalyst] = useState(0);
  const [ux, setUX] = useState(0);
  const [graphic, setGraphic] = useState(0);
  const [software, setSoftware] = useState(0);
  //Fetching an API
  useEffect(() => {
    const chartData = async () => {
      try {
        let res = await axios(`https://fair-puce-tuna-yoke.cyclic.app/prime`);
        let store = res.data;
        console.log("store", store);
        //logic Part
        store.length > 0 &&
          store.forEach((el) => {
            if (el.role === "Software Developer") {
              setSoftware((val) => val + 1);
            }
            if (el.role === "Full Stack Developer") {
              setFullStack((val) => val + 1);
            }
            if (el.role === "Data Analyst") {
              setDataAnalyst((val) => val + 1);
            }
            if (el.role === "Graphic Designer") {
              setGraphic((val) => val + 1);
            }
            if (el.role === "UI/UX Developer") {
              setUX((val) => val + 1);
            }
          });
      } catch (err) {
        console.log("err", err);
      }
    };
    chartData();
  }, []);

  return (
    <div>
      <div className="chartBox">
        <br />
        <br />
        <Box>
          <Text className="filterText"
           
          >
            Filter According to role{" "}
          </Text>
          <br />
          <br />
          <Chart className='chart'
            type="pie"
         
            series={[fullStack, dataAnalyst, ux, software, graphic]}
            options={{
              labels: [
                "FUll Stack web developer",
                "Data Analyst",
                "Ux Designer",
                "Software developer",
                "Graphic Designer",
              ],
            }}
          ></Chart>
        </Box>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#40ca"
          fill-opacity="1"
          d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,69.3C672,96,768,160,864,192C960,224,1056,224,1152,240C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default ChartPage;
