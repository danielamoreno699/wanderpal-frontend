
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
    <h2>details</h2>
    <div>
      <h3>{itemInfo.name}</h3>
      <p>{itemInfo.price}</p>
      <p>{itemInfo.description}</p>
      <button onClick={onNavigateBack}>Back</button>
    </div>
    </div>
  )
}

export default Items