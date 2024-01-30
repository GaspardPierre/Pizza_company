import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';
import pizza from "/pizza.jpg";

export default function Header() {
  return (
    <header 
      className='flex items-center justify-between px-4 py-3 uppercase border-b border-stone-200 sm:px-6'
      style={{ backgroundImage: `url(${pizza})`, backgroundSize: 'cover' }}
    >
      <Link to="/" className='tracking-widest text-white'>Pizza Company</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
