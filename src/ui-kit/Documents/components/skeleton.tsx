import { Skeleton as NativeBaseSkeleton, VStack } from 'native-base';
import React from 'react';

export function Skeleton() {
  const skeletons = Array.from({ length: 3 });

  return (
    <VStack alignItems="center" space="4">
      {skeletons.map((_, index) => (
        <React.Fragment key={index}>
          <NativeBaseSkeleton h="2" w="24" />
          <NativeBaseSkeleton w="full" h="24" borderBottomRightRadius={75} bg="gray.500" />
        </React.Fragment>
      ))}
    </VStack>
  );
}
