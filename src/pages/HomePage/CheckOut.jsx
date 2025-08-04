import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCart } from "../../hook/useCart";

const CheckOut = () => {
  const { cartItems, placeOrder, clearCart } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    if (cartItems.length === 0) return alert("Your cart is empty.");
    placeOrder({ ...data, items: cartItems });
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl text-green-600 font-bold">
          Thank You for Your Order!
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">CheckOut</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="font-semibold">Full Name</label>
          <input
            {...register("fullName", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">Full Name is required</p>
          )}
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>
          <input
            {...register("phone", {
              required: true,
              pattern: /^[0-9]{10,15}$/,
            })}
            className="input input-bordered w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">Valid phone required</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold">Shipping Address</label>
          <textarea
            {...register("address", { required: true })}
            className="textarea textarea-bordered w-full"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">Address is required</p>
          )}
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="btn btn-primary w-full">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
