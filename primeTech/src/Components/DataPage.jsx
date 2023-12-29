import React from "react";
import { Image, Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
const DataPage = ({
  image,
  phone,
  role,
  skill,
  year,
  address,
  comapny_detail,
  id,
}) => {
  return (
    <div className="dataPage">
      <Box>
        <Card maxW="sm" key={id}>
          <CardBody>
            <Image
              src={image}
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
                size="sm"
                fontWeight={"700"}
              >
                Phone Number 📞
                <Text fontWeight={"700"} size={"sm"} color="red">
                  {" "}
                  {phone}
                </Text>
              </Heading>
              <Heading
                fontStyle={"italic"}
                color="#000"
                fontFamily={"Lobster Two cursive"}
                size="sm"
                fontWeight={"700"}
              >
                Role
                <Text fontWeight={"700"} size={"sm"} color="red">
                  {" "}
                  {role}
                </Text>
              </Heading>
              <Heading
                fontStyle={"italic"}
                color="#000"
                fontFamily={"Lobster Two cursive"}
                size="sm"
                fontWeight={"700"}
              >
                Number of Year of Experience
                <Text fontWeight={"700"} size={"sm"} color="red">
                  {" "}
                  {year}
                </Text>
              </Heading>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                <Link to={`/${id}`}>See More Details</Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </div>
  );
};

export default DataPage;
