import React from 'react'
import {Link} from 'react-router-dom'
import API from '../axios/Api.js'

import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import '../css/style.css'

function CardProduk({produk, refresh}){

	async function deleteProduk(){
		await API.delete('deleteProduk.php?id=' + produk.id)
	
		return refresh()
	}

	function deleteConfirm(){
		confirmAlert({
			title: 'Toko Micin',
			message: "Apakah anda ingin menghapus produk " + produk.nama_produk + "?",
			buttons:[
				{
					label: 'Iya',
					onClick:()=>deleteProduk()
				},
				{

					label: 'Tidak',
					onClick:()=>{}
				}
			]
		})
	}

	return (
		<div className="col-md-3 card">
			<h3>{produk.nama_produk}</h3>
			<hr/>
			<small><strong>deskripsi : </strong>{produk.deskripsi}</small>
			<small><strong>harga : </strong>{produk.harga}</small>
			<small><strong>stok : </strong>{produk.stok}</small>
			<Link to={"/edit/" + produk.id}>
				<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
			</Link>

			<i className="fa fa-trash" aria-hidden="true" onClick={deleteConfirm}></i>
			
			<br/>
		</div>
	)
}

export default CardProduk