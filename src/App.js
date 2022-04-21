import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import TitleHelmet from './components/TitleHelmet/TitleHelmet';


function App() {
  return (
    <div>
      <Header></Header>
      <TitleHelmet title={'Shop'} path={'/'} element={<Shop></Shop>}></TitleHelmet>
      <TitleHelmet title={'Shop'} exact={true} path={"/shop"} element={<Shop></Shop>}></TitleHelmet>
      <TitleHelmet title={'About'} exact={true} path={'/about'} element={<About></About>}></TitleHelmet>
      <TitleHelmet title={'Orders'} exact={true} path={'/orders'} element={
        <RequireAuth>
          <Orders></Orders>
        </RequireAuth>
      }></TitleHelmet>
      <TitleHelmet title={'Inventory'} exact={true} path={'/inventory'} element={
        <RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>
      }></TitleHelmet>
      <TitleHelmet title={'Shipment'} exact={true} path={'/shipment'} element={
        <RequireAuth>
          <Shipment></Shipment>
        </RequireAuth>
      }></TitleHelmet>
      <TitleHelmet title={'Login'} exact={true} path={'/login'} element={
        <Login></Login>
      }></TitleHelmet>
      <TitleHelmet title={'Sign Up'} exact={true} path={'/signup'} element={
        <SignUp></SignUp>
      }></TitleHelmet>
      {/* <Routes>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/orders' element={<RequireAuth>
          <Orders></Orders>
        </RequireAuth>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/shipment' element={<RequireAuth>
          <Shipment></Shipment>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
