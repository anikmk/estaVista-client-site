import { Link } from "react-router-dom";
import logoImg from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <div>
            <Link to='/'>
              <img
                className='hidden md:block'
                src={logoImg}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
        </div>
    );
};

export default Logo;