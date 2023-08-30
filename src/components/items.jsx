
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Details.css';
import { useEffect } from 'react'; 
import { fetchItemInfo } from '../redux/itemsSlice';
// import { selectedItem } from '../redux/itemsSlice';


const Items = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { itemInfo } = useSelector((state) => state.items);
  

  const onHandleReserve = (id) => {
  

    navigate(`/reservationItemForm/${id}`)
  }


  useEffect(() => {
    dispatch(fetchItemInfo(id));
  }, [dispatch, id]);


  return (
    <div className='details'>
      <h2 className='details-h2'>More Info...</h2>
      <hr className='hr-details' />
      <div className='details-cont'>

    <div className='div-ref'>
    <div className='img-title'>
          <img className='detail-img' src={itemInfo.image} alt={itemInfo.name} />
          <h3 className='detail-name'>{itemInfo.name}</h3>
        </div>

        <div className='desc-price'>
          <p className='detail-price'>Price: {itemInfo.price}$</p>
          <p className='detail-desc'>{itemInfo.description}</p>

          <div className='btns-details'>
           
            <button className='reserve-btn' onClick={onHandleReserve}>Reserve</button>
          </div>

        </div>

    </div>
      

      </div>
    </div>
  );
}

export default Items