import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchItems, deleteItemReducer, deleteItem } from '../redux/itemsSlice'; // Import the deleteItem and deleteItemReducer actions
import Swal from 'sweetalert2';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/Home.css";

const DeleteItems = () => {
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.items);

  useEffect(() => {
    if (status === 'idle' && items.length === 0) {
      dispatch(fetchItems());
    }
  }, [status, dispatch, items]);

  const onHandleDelete = (itemId) => {
   
    Swal.fire({
      title: 'Delete Item',
      text: 'Are you sure you want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
      
        dispatch(deleteItem(itemId))
          .then(() => {
            dispatch(deleteItemReducer(itemId));
            Swal.fire('Deleted!', 'The item has been deleted.', 'success'); // Show success alert
          })
          .catch((error) => {
            console.error('Error deleting item:', error);
            Swal.fire('Error', 'An error occurred while deleting the item.', 'error'); // Show error alert
          });
      }
    });
  };
 
  
  
  return (
    <>
      <div className='cards-home'>
        <h2 className='home-h2'>delete items</h2>
        <hr className='hr-home' />
        <div className='card-cont'>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className='swiper-slide'>
                <Card className='card-item'>
                  <Card.Img
                    variant='top'
                    src={item.image}
                    className='card-img-item'
                    alt='img'
                  />
                  <Card.Body>
                    <Card.Title className='card-title-item'>
                      {item.name}
                    </Card.Title>
                    <Card.Text className='card-item-price'>
                      {item.price}$
                    </Card.Text>
                    <div className='card-btns'>
                      <Button
                        variant='danger'
                        onClick={() => onHandleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DeleteItems;
