import {
  Box,
  Divider,
  Heading,
  VStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tag,
  TagLabel,
  Show,
  Hide,
} from "@chakra-ui/react";
import { Graph } from "react-d3-graph";

import Card from "components/card/Card";

const data = {
  nodes: [
    {
      id: "HR Critical Service 1",
    },
    { id: "HR Critical Service 2", color: "red" },
    { id: "HR Critical Service 3" },
    { id: "HR Critical Service 4" },
    { id: "HR Critical Service 5" },
    { id: "HR Critical Service 6" },
    { id: "HR Critical Service 7" },
  ],
  links: [
    {
      source: "HR Critical Service 1",
      target: "HR Critical Service 2",
    },
    {
      source: "HR Critical Service 1",
      target: "HR Critical Service 3",
    },
    {
      source: "HR Critical Service 1",
      target: "HR Critical Service 4",
    },
    {
      source: "HR Critical Service 1",
      target: "HR Critical Service 5",
    },
    {
      source: "HR Critical Service 1",
      target: "HR Critical Service 6",
    },
    {
      source: "HR Critical Service 1",
      target: "HR Critical Service 7",
    },
    {
      source: "HR Critical Service 4",
      target: "HR Critical Service 3",
    },
    {
      source: "HR Critical Service 7",
      target: "HR Critical Service 2",
    },
    {
      source: "HR Critical Service 7",
      target: "HR Critical Service 3",
    },
  ],
};

const index = () => {
  const myConfig = {
    width: 800,
    node: {
      size: 200,
      fontSize: 12,
      strokeWidth: 100,
      highlightStrokeColor: "blue",
      color: "lightgreen",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  const myConfig2 = {
    width: 300,
    node: {
      size: 200,
      fontSize: 12,
      strokeWidth: 100,
      highlightStrokeColor: "blue",
      color: "lightgreen",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  return (
    <Card w={{ sm: "100%" }}>
      <Show above="lg">
        <Graph id="graph-id" data={data} config={myConfig} />
      </Show>
      <Show below="md">
        <Graph id="graph-id" data={data} config={myConfig2} />
      </Show>
      <Divider mb={6} />
      <VStack align="start">
        <Heading size="md"> HR Critical Service 2 History</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Incident</Th>
                <Th>Description</Th>
                <Th>Status</Th>
                <Th>Priority</Th>
                <Th>Created At</Th>
                <Th>Solved At</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>INC288292</Td>
                <Td>Finance Service is loading slow</Td>
                <Td>
                  <Tag
                    size="md"
                    key="INC288292"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="yellow"
                  >
                    <TagLabel>In progress</TagLabel>
                  </Tag>
                </Td>
                <Td>P2</Td>
                <Td>02/04/2022</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>INC288276</Td>
                <Td>Users unable to access to the main repository</Td>
                <Td>
                  <Tag
                    size="md"
                    key="INC288276"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="red"
                  >
                    <TagLabel>In progress</TagLabel>
                  </Tag>
                </Td>
                <Td>P1</Td>
                <Td>02/04/2022</Td>
              </Tr>
              <Tr>
                <Td>INC288222</Td>
                <Td>Users unable to access to internet</Td>
                <Td>
                  <Tag
                    size="md"
                    key="INC288276"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                  >
                    <TagLabel>Resolved</TagLabel>
                  </Tag>
                </Td>
                <Td>P1</Td>
                <Td>02/04/2022</Td>
                <Td>05/04/2022</Td>
              </Tr>
              <Tr>
                <Td>INC288222</Td>
                <Td>Users unable to access to internet</Td>
                <Td>
                  <Tag
                    size="md"
                    key="INC288276"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                  >
                    <TagLabel>Resolved</TagLabel>
                  </Tag>
                </Td>
                <Td>P1</Td>
                <Td>02/04/2022</Td>
                <Td>05/04/2022</Td>
              </Tr>
              <Tr>
                <Td>INC288222</Td>
                <Td>Users unable to access to internet</Td>
                <Td>
                  <Tag
                    size="md"
                    key="INC288276"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                  >
                    <TagLabel>Resolved</TagLabel>
                  </Tag>
                </Td>
                <Td>P1</Td>
                <Td>02/04/2022</Td>
                <Td>05/04/2022</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Card>
  );
};

export default index;
