
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    const [isAdmin,isAminLoading] = useAdmin();

    if (loading || isAminLoading) return <span className="loading loading-dots loading-lg"></span>;
    if (user || isAdmin) return children;
    return <Navigate to="/Login" state={{from:location}} replace></Navigate>;
  };

AdminRoute.propTypes = {
    children:PropTypes.node,
};

export default AdminRoute;