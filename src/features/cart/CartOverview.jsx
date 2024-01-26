import { Link, useActionData } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  
  if(!totalCartQuantity) return null;
  return (
    <div className=" flex items-center justify-between bg-stone-800 text-stone-200 px-4 text-sm uppercase py-4 sm:px-6 md:text-base">
      <p className=" space-x-4 font font-semibold text-stone-300 sm:space-x-6 ">
        <span>{ totalCartQuantity} pizzas</span>
        <span>{ formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
