import React, {Component} from 'react';
import './MhsPost.css';
import Mhs from '../../component/MhsPost/Mhs';
class MhsPost extends Component {
    state = {
        listMhs: [],
        insertMhs : {
            userId: 1,
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/mhs?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariApi => {
                this.setState({
                    listMhs: jsonHasilAmbilDariApi
                })
            })
    }
    componentDidMount() {
        this.ambilDataDariServerAPI()
    }
    handleHapusMhs = (data) => {
        fetch(`http://localhost:3002/mhs/${data}`, 
            {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }
    handleTambahMhs = (event) => {
        let forminsertMhs = {...this.state.insertMhs};
        let timestamp = new Date().getTime;
        forminsertMhs['id'] = timestamp;
        forminsertMhs[event.target.name] = event.target.value;
        this.setState({
            insertMhs: forminsertMhs
        });
    }
    handleTombolSimpan = () => {
        fetch('http://localhost:3002/mhs', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMhs)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }
    render() {
        return (
            <div className="post-mhs">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">Hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" 
                            onChange={this.handleTambahMhs}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" 
                    onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMhs.map(mhs => {
                        return <Mhs 
                                key={mhs.id} 
                                nim={mhs.nim} 
                                nama={mhs.nama}
                                alamat={mhs.alamat}
                                hp={mhs.hp}
                                angkatan={mhs.angkatan}
                                status={mhs.status}
                                idMhs={mhs.id} 
                                hapusMhs={this.handleHapusMhs}
                                />
                    })
                }
            </div>
        )
    }
}
export default MhsPost;