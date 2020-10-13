import React, {Component} from 'react'
import API from '../axios/Api.js'

export class EditProduk extends Component {

	state={
		id: '',
		namaProduk: '',
		deskripsi: '',
		harga: '',
		stok: ''

	}

	componentDidMount= async ()=>{
		const id = this.props.match.params.id
		const res = await API.get('getproduk.php?id='+id)
		
		this.setState({
			id: res.data.id,
			namaProduk: res.data.nama_produk,
			deskripsi: res.data.deskripsi,
			harga: res.data.harga,
			stok: res.data.stok
		})
	}

	handlerChange = (e)=> {
		this.setState({ [e.target.name] : e.target.value })
	}

	handlerSubmit = async ()=> {

		// eslint-disable-next-line no-restricted-globals
		event.preventDefault()
		await API.post("prosesedit.php",this.state)
		this.props.history.push("/")
	}

	render(){

		const {namaProduk,deskripsi,harga,stok} = this.state

		return(
			<div className="container d-inline-flex p-2 justify-content-center">
				<div className="card">
				<h2 className="text-center">Edit Produk</h2>
				<form className="card-body px-lg-5 pt-0" onSubmit={this.handlerSubmit}>
					<table>
					<tbody>
						<tr>
							<td>Nama Produk : </td>
							<td><input className="form-control" type="text" name="namaProduk" value={namaProduk} onChange={this.handlerChange} /></td>
						</tr>
						<tr>
							<td>Deskripsi : </td>
							<td><input className="form-control" type="text" name="deskripsi" value={deskripsi} onChange={this.handlerChange} /></td>
						</tr>
						<tr>
							<td>Harga :</td>
							<td><input className="form-control" type="text" name="harga" value={harga} onChange={this.handlerChange} /></td>
						</tr>
						<tr>
							<td>Stok :</td>
							<td><input className="form-control" type="text" name="stok" value={stok} onChange={this.handlerChange} /></td>
						</tr>
						<tr>
							<td></td>
							<td><input className="form-control" type="submit" value="ubah" className="btn btn-primary mx-5 mt-3" /></td>
						</tr>
					</tbody>
					</table>
				</form>
				</div>
			</div>
		)
	}
}

export default EditProduk