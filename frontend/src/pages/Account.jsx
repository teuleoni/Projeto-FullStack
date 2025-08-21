import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import AccProfile from '../components/AccProfile.jsx';
import AccPlaces from '../components/AccPlaces.jsx';
import { useUserContext } from '../context/UserContext.jsx';

const Account = () => {
  const { subpage } = useParams();
  const { user } = useUserContext();

  const buttonClass = (button) => {
    let finalClas =
      'transition rounded-full hover:bg-primary hover:text-white px-4 py-2 cursor-pointer';
    if (button === subpage) finalClas += ' bg-primary text-white ';

    return finalClas;
  };

  if (!user) return <Navigate to='/login' />;

  return (
    <section className='p-8 al'>
      <div className='max-w-7xl mx-auto flex flex-col gap-8 items-center'>
        <div className='flex gap-2'>
          <Link to='/account/profile' className={buttonClass('profile')}>
            Perfil
          </Link>
          <Link to='/account/bookings' className={buttonClass('bookings')}>
            Reservas
          </Link>
          <Link to='/account/places' className={buttonClass('places')}>
            Lugares
          </Link>
        </div>
        {subpage === 'profile' && <AccProfile />}
        {subpage === 'places' && <AccPlaces />}
      </div>
    </section>
  );
};

export default Account;
