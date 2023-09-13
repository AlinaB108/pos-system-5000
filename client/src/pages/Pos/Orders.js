import PosOrderList from '../../components/Pos/OrderList';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_TABLES } from '../../utils/queries';

const Orders = () => {
  const { loading, data } = useQuery(QUERY_ALL_TABLES)

  const tables = data?.tables || [];
  console.log(tables);
  if (loading) {
    // RETURNS A LOADING SCREEN IF DATA LOADING
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
        <PosOrderList tables={tables}/>
    </div>
  );
};

export default Orders;