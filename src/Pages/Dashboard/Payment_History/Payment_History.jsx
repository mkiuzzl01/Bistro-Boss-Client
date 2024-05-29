import { useQuery } from "@tanstack/react-query";
import Section_Title from "../../../components/Section_Title/Section_Title";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const Payment_History = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
//   console.log(user.email);

  const { refetch, data:payments = [] } = useQuery({
    queryKey: ["payments-history", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments-history/${user.email}`);
      return res.data;
    },
  });
//   console.log(payments);
  return (
    <div>
      <div>
        <Section_Title
          Sub_Heading={"---At a Glance!---"}
          Heading={"PAYMENT HISTORY"}
        ></Section_Title>
      </div>
      <div>
        <h1 className="text-2xl">Total Payment: {payments.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {
                payments.map((payment,idx)=><tr key={payment._id}>
                    <th>{idx+1}</th>
                    <td>{payment.email}</td>
                    <td>{payment.transaction}</td>
                    <td>{payment.price}</td>
                    <td>{payment.status}</td>
                    <td>{payment.date}</td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment_History;
