import { Box } from "@mui/material";
import SingleOrderRender from "../../components/PosSingleTab/SingleTab";
import RenderWheel from "../../components/PosSingleTabWheel/singleTabWheel";

const SingleOrder = () => {

  return (
    <div className="container">
      <SingleOrderRender />
      <RenderWheel />
    </div>
  );
};

export default SingleOrder;
