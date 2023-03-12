import Navbar from '../Components/Navbar';
import OrderDetailsCard from '../Components/OrderDetailsCard';

export default function SellerOrderDetails() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <OrderDetailsCard userRole="seller" />
      </section>
    </>
  );
}
