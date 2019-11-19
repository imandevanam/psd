import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Beranda from './Beranda';
import Nav from '../layout/Nav';

const Index = () => {
    return (
        <BrowserRouter>
            <Nav/>
  
            <Route path="/" exact component={Beranda} />

        </BrowserRouter>
    )
}

export default Index;
