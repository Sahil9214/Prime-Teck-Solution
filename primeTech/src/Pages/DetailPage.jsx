import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Stack,
  Heading,
} from "@chakra-ui/react";

import "../Styles/Home.css";
const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      let res = await axios(`https://fair-puce-tuna-yoke.cyclic.app/prime/${id}`);
      console.log("res", res.data);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <Box className="dataStyleById">
        <Card maxW="lg" key={id}>
          <CardBody>
            <Image
              src={data.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              height={"200px"}
              width="80%"
              margin={"auto"}
            />
            <Stack mt="6" spacing="3">
              <Heading
                fontStyle={"italic"}
                color="#000"
                fontFamily={"Lobster Two cursive"}
                size="md"
                fontWeight={"700"}
              >
                Phone Number 📞
                <Text fontWeight={"700"} size={"sm"} color="red">
                  {" "}
                  {data.phone}
                </Text>
              </Heading>
              <Heading
                fontStyle={"italic"}
                color=""
                fontFamily={"Lobster Two cursive"}
                size="md"
                fontWeight={"800"}
              >
                Role
                <Text fontWeight={"700"} size={"sm"} color="red">
                  {" "}
                  {data.role}
                </Text>
              </Heading>
              <Heading
                fontStyle={"italic"}
                color="#000"
                fontFamily={"Lobster Two cursive"}
                size="md"
                fontWeight={"700"}
              >
                Number of Year of Experience
                <Text fontWeight={"700"} size={"sm"} color="red">
                  {" "}
                  {data.year}
                </Text>
              </Heading>
              <Heading
                fontStyle={"italic"}
                color="#000"
                fontFamily={"Lobster Two cursive"}
                size="md"
                fontWeight={"700"}
              >
                Address
                <Text fontWeight={"700"} size={"sm"} color="red">
                  {" "}
                  {data.address}
                </Text>
              </Heading>

              <Heading
                fontStyle={"italic"}
                fontFamily={"Lobster Two cursive"}
                size="md"
                fontWeight={"700"}
              >
                Skills{" "} Learn
              </Heading>
              <Box style={{ display: "flex", flexFlow: "wrap", gap: "20px" }}>
                {data.skill?.map((el) => {
                  return (
                    <Text
                      fontFamily={"serif"}
                      fontWeight={"900"}
                      size={"md"}
                      color="red"
                      fontStyle={"italic"}
                    >
                      {" "}
                      {el}
                    </Text>
                  );
                })}
              </Box>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Box>
    </div>
  );
};

export default DetailPage;
