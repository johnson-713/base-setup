/* eslint-disable react/display-name */
import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

const AppLoadSuspense = (Component) => (props) => {
  return (
    <Suspense fallback={<Spinner size={"lg"} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default AppLoadSuspense;
