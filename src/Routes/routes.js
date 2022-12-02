import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Header from '../Components/Title/Header/index';
// import Masculino from '../Pages/Masculino/Masculino';
// import Feminino from '../Pages/Feminino/Feminino';
// import Sapatos from '../Pages/Sapatos/Sapatos';
// import Tenis from '../Pages/Tenis/Tenis';
// import Outlet from '../Pages/Outlet/Outlet';
import { UserStorage } from '../UserContext';
import NotFound from '../Components/Helper/NotFound';
import Admin from '../Pages/Admin/Admin';
import ProtectedRoute from '../Components/Helper/ProtectedRoute';
import AdminProduct from '../Pages/AdminProduct/AdminProduct';
import ProdutosHome from '../Pages/Produtos/ProdutosHome';
import ProductContent from '../Pages/Produtos/ProdutoIndividual/Modal/ProductContent';
import { Footer } from '../Components/Footer';

const Routes = ({ masculino }) => {
  return (
    <>
      <Router>
        <UserStorage>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/produto/:id' exact component={ProductContent} />

            <Route path='/masculino' exact component={ProdutosHome} />
            <Route path='/feminino' exact component={ProdutosHome} />
            <Route path='/sapatos' exact component={ProdutosHome} />
            <Route path='/tenis' exact component={ProdutosHome} />
            <Route path='/outlet' exact component={ProdutosHome} />
            <Route path='/admin' exact component={Admin} />
            <ProtectedRoute
              path='/admin/product'
              exact
              component={AdminProduct}
            />
            <Route path='*' component={NotFound} />
          </Switch>
        </UserStorage>
        <Footer />
      </Router>
    </>
  );
};

export default Routes;
