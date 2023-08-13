import { CPUicon, MOBO, Memory, Monitor, PSU, Storage } from "@/assets/icons";
import CategoryComponent from "@/components/CategoryComponent";
import PcBuildHeader from "@/components/PcBuildHeader";
import { removeALlBuildComponents } from "@/redux/features/pc_build/pcBuildSlice";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const PcBuilder = () => {
  const { components } = useSelector((state) => state.pcBuild);
  const dispatch = useDispatch();

  const categories = [
    {
      id: 1,
      name: "CPU/Processor",
      link: "/choose?category=CPU/Processor",
      logo: <CPUicon />,
    },
    {
      id: 2,
      name: "Motherboard",
      link: "/choose?category=Motherboard",
      logo: <MOBO />,
    },
    {
      id: 3,
      name: "RAM",
      link: "/choose?category=RAM",
      logo: <Memory />,
    },
    {
      id: 4,
      name: "Power Supply Unit",
      link: "/choose?category=Power Supply Unit",
      logo: <PSU />,
    },
    {
      id: 5,
      name: "Storage Device",
      link: "/choose?category=Storage Device",
      logo: <Storage />,
    },
    {
      id: 6,
      name: "Monitor",
      link: "/choose?category=Monitor",
      logo: <Monitor />,
    },
  ];

  const pcBuildHandler = () => {
    dispatch(removeALlBuildComponents());

    swal("Success", "Your PC Build Order Created Successfully!", "success");
  };

  return (
    <>
      <Head>
        <title>Build Your Dream PC | PC Builder</title>
      </Head>

      <section>
        <div className="mx-auto  max-w-7xl my-10  shadow-sm  rounded-md border">
          <PcBuildHeader />
          <div>
            <div
              className={`z-10 overflow-hidden  bg-white m-4 shadow-lg ring-1 ring-gray-900/5`}
            >
              <div className="p-4">
                {categories?.map((category) => {
                  const { id, name, link } = category || {};

                  return <CategoryComponent key={id} category={category} />;

                })}
              </div>
            </div>
          </div>

          <div className="my-10 text-center">
            <button
              onClick={pcBuildHandler}
              disabled={components?.length !== 6}
              className={` ${
                components.length === 6 ? "bg-curiousGreen btn btn-ghost font-bold duration-300" : "bg-gray-400"
              } py-3 px-6 text-white rounded-md font-bold `}
            >
              Build Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PcBuilder;
