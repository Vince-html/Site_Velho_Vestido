import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Header from '../Components/Title/Header/index';
import Masculino from '../Pages/Masculino/Masculino';
import Feminino from '../Pages/Feminino/Feminino';
import Sapatos from '../Pages/Sapatos/Sapatos';
import Tenis from '../Pages/Tenis/Tenis';
import Outlet from '../Pages/Outlet/Outlet';
import { UserStorage } from '../UserContext';
import NotFound from '../Components/Helper/NotFound';
import Admin from '../Pages/Admin/Admin';
import ProtectedRoute from '../Components/Helper/ProtectedRoute';
import AdminProduct from '../Pages/AdminProduct/AdminProduct';

const Routes = () => {
  return (
    <>
      <Router>
        <UserStorage>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/masculino' exact component={Masculino} />
            <Route
              path='/feminino'
              exact
              element={<Feminino categoria={Feminino} />}
            />
            <Route path='/sapatos' exact component={Sapatos} />
            <Route path='/tenis' exact component={Tenis} />
            <Route path='/outlet' exact component={Outlet} />
            <ProtectedRoute path='/admin' exact component={Admin} />
            <ProtectedRoute
              path='/admin/product'
              exact
              component={AdminProduct}
            />
            <Route path='*' component={NotFound} />
          </Switch>
        </UserStorage>
      </Router>
    </>
  );
};

export default Routes;
