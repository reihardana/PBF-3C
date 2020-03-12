import React from 'react';
const Mhs = (props) => {
    return (
        <div className="mhs-mhs">
                <div className="mhs">
                    <div className="gambar-mhs">
                        <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Mhs"/>
                    </div>
                    <div className="konten-mhs">
                        <table className="table table-borderless table-sm">
                            <tr>
                                <td>NIM</td>
                                <td>:</td>
                                <td>{props.nim}</td>
                            </tr>
                            <tr>
                                <td>Nama</td>
                                <td>:</td>
                                <td>{props.nama}</td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>:</td>
                                <td>{props.alamat}</td>
                            </tr>
                            <tr>
                                <td>No Telepon</td>
                                <td>:</td>
                                <td>{props.hp}</td>
                            </tr>
                            <tr>
                                <td>Angkatan</td>
                                <td>:</td>
                                <td>{props.angkatan}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>:</td>
                                <td>{props.status}</td>
                            </tr>
                        </table>
                        <button className="btn btn-sm btn-warning" 
                        onClick={() => props.hapusMhs(props.idMhs)}>
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
    )
}
export default Mhs;