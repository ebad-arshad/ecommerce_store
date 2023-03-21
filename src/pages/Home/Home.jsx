import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../containers/Hero/Hero'
import Slider from '../../containers/Slider/Slider'
import Popular_Products from '../../containers/Popular_Products/Popular_Products'
import Deal_Of_Day from '../../containers/Deal_Of_Day/Deal_Of_Day'
import Banner from '../../components/Banner/Banner'
import Steps from '../../containers/Steps/Steps'
import Subscribe from '../../containers/Subscribe/Subscribe'
import Footer from '../../containers/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <Popular_Products />
      <Deal_Of_Day />
      <Banner />
      <Steps />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home