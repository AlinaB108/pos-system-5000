import MenuList from '../../components/Pos/MenuList';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_MENU } from '../../utils/queries';

const Orders = () => {
  const { loading, data } = useQuery(QUERY_ALL_MENU)

  const menu = data?.menuItems || [];
  if (loading) {
    // RETURNS A LOADING SCREEN IF DATA LOADING
    return <div>Loading...</div>;
  }

  return <MenuList menuItems={menu}/>;
};

export default Orders;