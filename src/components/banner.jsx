import '../styles/Banner.css'
import { BsAirplaneEngines } from "react-icons/bs";
import { BsTagsFill} from "react-icons/bs";
import { BsChatDots} from "react-icons/bs"

export const Banner = () => {
  return (
    <div className="banner-trip">
        <div className="banner-trip__content">
            <div className="destinations">
            <BsAirplaneEngines className="airplane-icon" />
                <div className='text'>
                <h4>destinations</h4>
                <p>lorem ipso</p>

                </div>
               
               
            </div>
           
            <div className="prices">
            <BsTagsFill className="price-icon" />
            <div className='text'>
                <h4>prices</h4>
                <p>lorem ipso</p>
            </div>
                 
            </div>
            <div className="support">

            <BsChatDots className="support-icon" />
            <div className='text'>
                <h4>support</h4>
                <p>lorem ipso</p>
            </div>
            </div>

        </div>

    </div>
  )
}

export default Banner