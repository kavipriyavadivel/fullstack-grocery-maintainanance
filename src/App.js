import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import Loginmanager from './Loginmanager';
import Loginadmin from './Loginadmin';
import Update from './Update';
import Additem from './Additem';
import Updateitem from './Updateitem';
import Request from './Request';
import Issued from './Issued';
import Return from './Return';
import Supplier from './Supplier';
import Mitem from './Mitem';
import Aditem from './Aditem';
import Addsupplier from './Addsupplier';
import Adadditem from './Adadditem';
import Remain from './Remain';
import Po from './Po';
import Co from './Co';
import Adreturn from './Adreturn';
import Cost from './Cost';
import Nav from './Nav';
import Adminrequest from './Adminrequest';
import Admingirlreq from './Admingirlreq';
import Admindayreq from './Admindayreq';
import Girlsupdate from './Girlsupdate';
import Girlsreturn from './Girlsreturn';
import Girlsrequest from './Girlsrequest';
import Girlsissued from './Girlsissued';
import Dayupdate from './Dayupdate';
import Dayreturn from './Dayreturn';
import Dayrequest from './Dayrequest';
import Dayissued from './Dayissued';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/loginmanager' element={<Loginmanager/>}/>
        <Route path='/loginadmin' element={<Loginadmin/>}/>
        <Route path='/item' element={<Mitem/>}/>
        <Route path='/updatestock'>
          <Route index element={<Update/>}/>
          <Route path=':id'element={<Updateitem/>}/>
        </Route>
        <Route path='/additem' element={<Additem/>}/>
        <Route path='/gupdate' element={<Girlsupdate/>}/>
        <Route path='/greturn' element={<Girlsreturn/>}/>
        <Route path='/grequest' element={<Girlsrequest/>}/>
        <Route path='/gissue' element={<Girlsissued/>}/>
        <Route path='/dupdate' element={<Dayupdate/>}/>
        <Route path='/dreturn' element={<Dayreturn/>}/>
        <Route path='/drequest' element={<Dayrequest/>}/>
        <Route path='/dissue' element={<Dayissued/>}/>
        <Route path='/requeststock' element={<Request/>}/>
        <Route path='/issuestock' element={<Issued/>}/>
        <Route path='/returnstock' element={<Return/>}/>
        <Route path='/aitem' element={<Aditem/>}/>
        <Route path='/supplier' element={<Supplier/>}/>
        <Route path='/addsupplier' element={<Addsupplier/>}/>
        <Route path='/adadditem' element={<Adadditem/>}/>
        <Route path='/request' element={<Adadditem/>}/>
        <Route path='/adminrequest' element={<Adminrequest/>}/>
        <Route path='/admingreq' element={<Admingirlreq/>}/>
        <Route path='/admindreq' element={<Admindayreq/>}/>
        <Route path='/remaingoods' element={<Remain/>}/>
        <Route path='/po' element={<Po/>}/>
        <Route path='/co' element={<Co/>}/>
        <Route path='/ro' element={<Adreturn/>}/>
        <Route path='/cost' element={<Cost/>}/>
        <Route path='/nav' element={<Nav/>}/>
      </Routes>
    </div>
  );
}

export default App;