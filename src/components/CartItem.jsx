import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col mt-5 w-full p-2 md:p-5  mb-2 md:mx-5  ml-6 border-b-2 border-black">

      <div className="flex flex-col md:flex-row items-center gap-5 mr-7 ">

      <div className=" w-[30%]  ">
        <img alt="" src={item.image} className="object-cover" />
      </div>
        <div className="ml-10 self-start w-[100%] space-y-5 md:w-[70%]">

          <h1 className="text-xl font-semibold text-gray-700">{item.title}</h1>

          <h1 className=" text-base font-medium text-gray-500">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
         
          <div className="flex justify-between">
            <p className="text-xl text-green-600 font-bold ">${item.price}</p>
            <button className="bg-red-300 p-3 rounded-full"
            onClick={removeFromCart}><MdDelete className="text-red-800"/></button>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;

