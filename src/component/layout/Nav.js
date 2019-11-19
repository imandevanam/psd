import React from 'react';
import '../css/navhead.css';

const Nav = () => {
    return (
        <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a classNmae="navbar-item brand has-text-grey" href="/">
                    DINAS UPT KELUA
                </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="menu" href="#">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="menu" className="navbar-menu">
                <div className="navbar-start has-text-grey">

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Master
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Jenis Blok
                            </a>
                            <a className="navbar-item">
                                Penyewa Toko
                            </a>
                            <a className="navbar-item">
                                Sewa Toko
                            </a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Transaksi
                        </a>

                        <div className="navbar-dropdown">
                            <a class="navbar-item">
                                Retribusi Pasar
                            </a>
                            <a className="navbar-item">
                                Pembayaran
                            </a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Laporan
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Pengelola
                            </a>
                            <a className="navbar-item">
                                Blok
                            </a>
                            <a className="navbar-item">
                                Penyewa
                            </a>
                            <a className="navbar-item">
                                Sewa
                            </a>
                            <a className="navbar-item">
                                Pembayaran
                            </a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Fasilitas
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Backup & Restore data
                            </a>
                            <a className="navbar-item">
                                Ganti Password
                            </a>
                        </div>
                    </div>
                    
                    <a className="navbar-item">
                        Pengaturan
                    </a>
                    <hr className="navbar-divider"/>
                    <div className="navbar-item">
                        <a className="button is-light">
                            Keluar
                        </a>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Nav;
