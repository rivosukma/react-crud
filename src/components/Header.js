import React from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'

function Header(){
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container">
			<p className="navbar-brand">Micin</p>
			<div className="menu-hover">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/" className="nav-link">Beranda</Link>
				</li>
				<li className="nav-item">
					<Link to="/add" className="nav-link">Tambah</Link>
				</li>
			</ul>
			</div>
		</div>
		</nav>
		)
}

export default Header