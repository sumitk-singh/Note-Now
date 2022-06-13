
import './Home.css';
import { Link } from 'react-router-dom';


import HomePageImg from "../../assets/images/home-page-img.png"

const Home = () => {
  return (
    <>
    
      <div className='main-container-home-page'>
        
        <section className="section-1">
          <img id='home-page-img' src={HomePageImg} alt="img" />
        </section>

        <section className="section-2">
          <div>
            <h2 className='txt-big'>Your modern note taking app</h2>
            <p>Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>
            <Link to='/notes'> <button className="btn-section-1" >Lets make note</button></Link>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home;