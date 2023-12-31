import OrderList from '../../components/Pos/OrderList';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_TABLES } from '../../utils/queries';

const Orders = () => {
  const { loading, data } = useQuery(QUERY_ALL_TABLES)

  const tables = data?.tables || [];
  if (loading) {
    // RETURNS A LOADING SCREEN IF DATA LOADING
    return <div>Loading...</div>;
  }

  // ADD THIS FUNCTIONALITY:
  // IF CLOCKED IN AS MANAGER, RENDER MANAGER ALL ORDERS PAGE

  return (
    <div className="container">
      <OrderList tables={tables} />
    </div>
  );
};

export default Orders;