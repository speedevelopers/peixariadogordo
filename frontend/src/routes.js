import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Client from './pages/Client';
import Product from './pages/Product';
import Category from './pages/Category';
import ProductList from './pages/ProductList';
import ClientList from './pages/ClientList';
import Admin from './pages/Admin';
import Certo from './pages/Corrigido';

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/client" component={Client} />
                <Route path="/product" component={Product} />
                <Route path="/category" component={Category} />
                <Route path="/productlist" component={ProductList} />
                <Route path="/clientlist" component={ClientList} />
                <Route path="/admin" component={Admin} />
                <Route path="/certo" component={Certo} />
            </Switch>
        </BrowserRouter>

    );
}

