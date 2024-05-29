import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCarts from "../../../../hooks/useCarts";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [item,refetch] = useCarts();
  const totalPrice = item.reduce((total, i) => total + i.price, 0);
  const [clientSecret, setClientSecret] = useState("");
  const [transaction, setTransaction] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { totalPrice }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res?.data?.clientSecret);
      });
    }
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    }
    if (paymentMethod) {
      setError("");
    //   console.log("Show", paymentMethod);
    }

    //confirm Card payment

    const { err, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );
    if (err) {
      setError(error.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransaction(paymentIntent.id);
        // console.log("payment intend", paymentIntent);
        const payment = {
          email: user?.email,
          price: totalPrice,
          transaction: paymentIntent?.id,
          date: new Date(), //uct data convert. use moment js to
          cardIds: item.map((i) => i._id),
          menuIds: item.map((i) => i.menuId),
          status: "pending",
        };
        // console.log(payment);

        //send payment related information to data
        const { data } = await axiosSecure.post("/payments", payment);
        refetch();
        if(data?.result?.insertedId){
            Swal.fire({
                title: "success!",
                text: "Your Payment Successful.",
                icon: "success",
              });
        }
        // console.log(data);
        navigate('/Dashboard/Payment_History');
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-2"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        <div>
          {transaction && (
            <p className="text-green-500">
              {" "}
              Your Transaction ID: {transaction}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
