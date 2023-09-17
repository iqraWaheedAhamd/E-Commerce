'use client'
import {useDispatch} from "react-redux"
import { Button } from "components/ui/button"
import { cartActions } from "@/store/slice/cartSlice"
import { toast } from "react-hot-toast"

const AddToCart = () => {
    const dispatch=useDispatch();
    const addItems=()=>{
        dispatch(cartActions.addToCart({quantity:1}))
        toast.success("Product added")
    }
  return (
    <Button className="mt-2" onClick={addItems}>Add to Cart</Button>
  )
}

export default AddToCart