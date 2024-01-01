
import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  return (
    <div>
      <Helmet> <title>EstaVista | Home</title> </Helmet>
      {/* categorys sections */}
      <Categories></Categories>
      {/* rooms section */}
      <Rooms></Rooms>
    </div>
  )
}

export default Home
