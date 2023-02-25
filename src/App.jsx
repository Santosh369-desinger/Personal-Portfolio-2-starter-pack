import Experties from "./components/Experties/Experties";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Work from "./components/Work/Work"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "./components/Footer/Footer"
import css from './styles/app.module.scss'

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <Work/>
    <Portfolio/>
    <Footer/>
  </div>
};

export default App;
