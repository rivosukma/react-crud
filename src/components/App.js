import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import DaftarProduk from './DaftarProduk'
import TambahProduk from './TambahProduk'
import EditProduk from './EditProduk'

function App(){
	return (
		<BrowserRouter>
			<Header />
			<Route path="/" exact component={DaftarProduk}/>
			<Route path="/add" component={TambahProduk}/>
			<Route path="/edit/:id" component={EditProduk}/>
			
		</BrowserRouter>
		)
}

export default App