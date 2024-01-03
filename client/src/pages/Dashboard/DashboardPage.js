import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/ProfileNavbar";
import ArrowUp from "../../assets/arrow_up.svg";
import ChartPlaceholder from "../../assets/chart_placeholder.svg";
import Box from "./Box";

const DashboardPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="p-10">
          <h1 className="text-3xl mb-6 font-semibold text-[#094B72]">
            Dashboard
          </h1>
          <div className="flex gap-6">
            <div className="min-w-[450px]">
              <Box title="Total Revenue">
                <div className="flex">
                  <h1 className=" text-4xl font-semibold text-[#094B72]  mr-4  ">
                    25000.00 DA
                  </h1>
                  <img src={ArrowUp}></img>
                </div>
              </Box>
            </div>
            <div className="min-w-[450px]">
              <Box title="Revenue This Week">
                <div className="flex">
                  <h1 className=" text-4xl font-semibold text-[#094B72]  mr-4  ">
                    1520.00 DA
                  </h1>
                  <img src={ArrowUp}></img>
                </div>
              </Box>
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="min-w-[500px]">
              <Box title="This Year">
                <img src={ChartPlaceholder} className="mt-8"></img>
              </Box>
            </div>
            <div className="min-w-[300px]">
              <Box title="Latest Reviews">
                <p>Reviews here</p>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
