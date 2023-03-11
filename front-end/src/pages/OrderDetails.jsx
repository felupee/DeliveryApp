import Navbar from '../Components/Navbar';
import OrderDetailsCard from '../Components/OrderDetailsCard';

export default function OrderDetails() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <OrderDetailsCard />
      </section>
    </>
  );
}
