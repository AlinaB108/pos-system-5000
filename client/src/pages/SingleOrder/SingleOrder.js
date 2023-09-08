import { Box } from "@mui/material";
import PosNav from "../../components/PosNav/PosNav";
import SingleOrderRender from "../../components/SingleTab/SingleTab";
import RenderWheel from "../../components/SingleTabWheel/singleTabWheel";
const SingleOrder = () => {
  return (
    <div className="container">
    <PosNav />
    <SingleOrderRender />
    <RenderWheel />
    </div>
  );
};

export default SingleOrder;
