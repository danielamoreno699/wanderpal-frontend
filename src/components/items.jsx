
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Details.css';
import { useEffect } from 'react'; 
import { fetchItemInfo } from '../redux/itemsSlice';


const Items = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { itemInfo } = useSelector((state) => state.items);

  const onNavigateBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchItemInfo(id));
  }, [dispatch, id]);


  return (
    <div className='details'>
    <h2 className='details-h2'>More Info...</h2>
    <hr className='hr-details' />
    <div className='details-cont'>
      <h3 className='detail-name'>{itemInfo.name}</h3>
      <p className='detail-desc'>{itemInfo.description}</p>
      
    </div>
    <button className='btn-details' onClick={onNavigateBack}>Back</button>
    </div>
  )
}

export default Items