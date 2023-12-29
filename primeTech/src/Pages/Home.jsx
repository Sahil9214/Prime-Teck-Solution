import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction } from "../redux/action";
import { Spinner } from "@chakra-ui/react";
import "../Styles/Home.css";
import DataPage from "../Components/DataPage";
const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  //now get the Data by using useSelector
  const store = useSelector((state) => state);
  console.log("stroe", store);
  useEffect(() => {
    dispatch(getDataAction(page));
  }, [page]);

  return (
    <div className='home'>
      <div>
        {store?.loading ? (
          <Spinner />
        ) : store?.error ? (
          <p>Error fetching data</p>
        ) : (
          <div className="homeDetail">
            {/* Render your data here */}
            {store?.data.map((item) => (
              <DataPage key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
      
      <div className="btn">
        <Button
          backgroundColor={"#68D391"}
          color="#FFFFFF"
          fontWeight={"600"}
          letterSpacing={"1.3px"}
          className="btnButton"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <Button
          backgroundColor={"#68D391"}
          color="#FFFFFF"
          fontWeight={"600"}
          letterSpacing={"1.3px"}
          className="btnButton"
        >
          {page}
        </Button>
        <Button
          backgroundColor={"#68D391"}
          color="#FFFFFF"
          fontWeight={"600"}
          letterSpacing={"1.3px"}
          className="btnButton"
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
      
    </div>
  );
};

export default Home;
