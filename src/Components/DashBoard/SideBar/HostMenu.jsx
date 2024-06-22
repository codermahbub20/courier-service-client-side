import { BsHouseAddFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";


const HostMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsHouseAddFill}
        label='Create Package'
        address='create-package'
      />

      <MenuItem
        icon={MdHomeWork}
        label='My Listings'
        address='my-listings'
      />

      <MenuItem
        icon={MdOutlineManageHistory}
        label='Delivery Schedule'
        address='delivery-scheduling'
      />
    </>
  );
};

export default HostMenu;