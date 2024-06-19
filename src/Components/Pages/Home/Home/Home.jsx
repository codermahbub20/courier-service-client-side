import CreatePackage from "../../../DashBoard/CreatePackage/CreatePackage";
import Banner from "../Banner/Banner";
import Deliver from "../Deliver/Deliver";
import Offer from "../Offer/Offer";
import OrderProcess from "../OrderProcess/OrderProcess";
import WorkForce from "../WorkForce/WorkForce";



const Home = () => {
    return (
        <div>
            <Banner />
            <Offer />
            <WorkForce />
            <Deliver />
            <OrderProcess />
            <CreatePackage/>
        </div>
    );
};

export default Home;