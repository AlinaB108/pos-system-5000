import PosOrderList from '../../components/PosOrderList/PosOrderList';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_TABLES } from '../../utils/queries';

const Orders = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_TABLES)

  const tables = data || [];
  console.log(error);
  console.log(data);

  return (
    <div className="container">
      {loading ? (
            <div>Loading...</div>
          ) : (
            <PosOrderList
              tables={tables}
            />
          )}
    </div>
  );
};

export default Orders;