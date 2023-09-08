import React from 'react';

const OrderList = ({ tables }) => {
  console.log(tables)
  if (!tables.length) {
    return <h3>No Orders Yet</h3>;
  }
// TODO: MAKE SURE THIS WORKS!!!
  return (
    <div>
      {tables &&
        tables.map((table) => (
          <div key={table._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {table.tableNum} <br />
              <span style={{ fontSize: '1rem' }}>
                Placed: {table.date}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              {table.orders &&
                table.orders.map((order) => (
                  <div key={order._id} className="card mb-3">
                    <p>{order.item}</p> <br />
                    <p>{order.price}</p> <br />
                    <p>{order.category.name}</p> <br />
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderList;
