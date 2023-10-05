import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="200px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
