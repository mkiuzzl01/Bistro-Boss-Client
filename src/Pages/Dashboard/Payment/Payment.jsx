import { loadStripe } from "@stripe/stripe-js";
import Section_Title from "../../../components/Section_Title/Section_Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";

//todo add stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);
const Payment = () => {
    return (
        <div className="p-5">
            <div>
                <Section_Title Heading="Payment"></Section_Title>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;