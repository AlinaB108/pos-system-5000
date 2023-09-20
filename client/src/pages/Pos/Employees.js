import EmployeeList from '../../components/Pos/EmployeeList';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_EMPLOYEES } from '../../utils/queries';

const Orders = () => {
  const { loading, data } = useQuery(QUERY_ALL_EMPLOYEES)

  const employees = data?.employees || [];
  if (loading) {
    // RETURNS A LOADING SCREEN IF DATA LOADING
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
        <EmployeeList employees={employees}/>
    </div>
  );
};

export default Orders;