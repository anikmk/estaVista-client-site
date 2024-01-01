/* eslint-disable react/prop-types */
import Heading from "../Shared/Heading";


const Header = ({room}) => {
    return (
        <div>
            <Heading title={room?.title} subtitle={room?.location}></Heading>
            <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={room?.image} alt="" />
            </div>
        </div>
    );
};

export default Header;