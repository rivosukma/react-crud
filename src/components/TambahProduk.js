import React, {Component} from 'react'
import CardProduk from './CardProduk'
import API from '../axios/Api.js'

export class TambahProduk extends Component{

	state={
		'namaProduk': '',
		'deskripsi': '',
		'harga': '',
		'stok': ''
	}

	handlerChange = (e)=> {
		this.setState({ [e.target.name] : e.target.value })
	}

	handlerSubmit = async ()=> {

		// eslint-disable-next-line no-restricted-globals
		event.preventDefault()
		await API.post("tambahdata.php",this.state)
		this.props.history.push("/")
	}

	render(){ 
		return(
			<div className="container d-inline-flex p-2 justify-content-center">
				<div className="card">
				<h2 className="text-center"> Tambah Produk </h2>

				<form className="card-body px-lg-5 pt-0" onSubmit={this.handlerSubmit}>
					<table>
					<tbody>
						<tr>
							<td>Nama Produk : </td>
							<td><input className="form-control" type="text" name="namaProduk" onChange={this.handlerChange} /></td>
						</tr>
						<tr>
							<td>Deskripsi : </td>
							<td><input className="form-control" type="text" name="deskripsi" onChange={this.handlerChange} /></td>
						</tr>
						<tr>
							<td>Harga :</td>
							<td><input className="form-control" type="text" name="harga" onChange={this.handlerChange} /></td>
						</tr>
						<tr>
							<td>Stok :</td>
							<td><input className="form-control" type="text" name="stok" onChange={this.handlerChange} /></td>
						</tr>
						<tr>
							<td></td>
							<td><input type="submit" value="tambah" className="btn btn-primary mx-5 mt-3 " /></td>
						</tr>
					</tbody>
					</table>
				</form>
				</div>
			</div>
		)
	}
}

export default TambahProduk