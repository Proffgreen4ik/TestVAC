import './App.css';
import { useGetOrdersQuery } from './services/orders';
import OrdersList from './features/OrdersList';
import { OrdersListWrapper } from './features/OrdersList/OrdersList.styled';
import { AppWrapper } from './App.styled';
import { AppBackdrop } from './App.styled';


function App() {
const { data, error, isLoading } = useGetOrdersQuery("")
return (
  <AppBackdrop>
    <AppWrapper>
      <OrdersList/>
    </AppWrapper>
  </AppBackdrop>

)
}


export default App;
