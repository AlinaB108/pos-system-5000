import { Box } from "@mui/material";
import PosNav from "../../components/PosNav/PosNav";
import SingleOrderRender from "../../components/PosSingleTab/SingleTab";
import RenderWheel from "../../components/PosSingleTabWheel/singleTabWheel";

const SingleOrder = () => {
  return (
    <div className="container">
    {/* <PosNav profile={profile}/> */}
    <SingleOrderRender />
    <RenderWheel />
    </div>
  );
};

export default SingleOrder;
