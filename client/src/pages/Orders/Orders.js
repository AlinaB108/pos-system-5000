import PosNav from '../../components/PosNav/PosNav';

const Orders = async () => {
  const queriedOrders = await Orders.findAll();

  const allOrders = [];

  queriedOrders.map((e) => {
    const appendedOrder = document.createElement('p')
    appendedOrder.textContent()

    document.getElementById('orders').append()
  })


  return (
    <div className="container">
      <PosNav />
      <box id="orders"></box>
    </div>
  );
};

export default Orders;