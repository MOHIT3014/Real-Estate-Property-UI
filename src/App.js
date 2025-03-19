
import './App.css';
import Navbar from './components/Navbar';
import HeroPage from './components/Home/HeroPage/heroPage';
import About from './components/Home/about/aboutpage'
import SmallCard from './components/Home/Cardcontainer/imageCard'
import LargerCard from './components/Home/Cardcontainer/DetailingCards'
import MarketingCard from './components/Home/marketing/Marketing'
import Location from './components/Home/Location/locationCard'
import Customer from './components/Home/customer/Customer'
import HowCard from './components/Home/Working/HowCard'
import Employee from './components/Home/Employee/EmployeeCard'
import Articles from './components/Home/Article/articleCard'
import ConnectWithSite from './components/Home/ConnectWithSite/ConnectionCard'
import FooterImage from './components/Home/FooterImage/FooterImageCard'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroPage/>
      <About/>
      <SmallCard/>
      <LargerCard/>
      <MarketingCard/>
      <Location/>
      <Customer/>
      <HowCard/>
      <Employee/>
      <Articles/>
      <ConnectWithSite/>
      <FooterImage/>


    </div>
  );
}

export default App;
