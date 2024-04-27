import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const Footer = () => (
    <footer className="bg-light mt-5 border-top py-6 text-secondary">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 text-center p-3">
                    <i className="bi bi-telephone-x-fill fs-1 fw-bold text-info"></i>
                    <p className="h5 mt-2 mb-4">Elérhetőség </p>
                    <a href="#" className="btn btn-secondary">Megnézem</a>
                </div>
                <div className="col-md-4 text-center p-3">
                    <i className="bi bi-truck fs-1 text-info"></i>
                    <p className="h5 mt-2 mb-4">Szállítási feltételek</p>
                    <a href="#" className="btn btn-secondary">Elolvasom</a>
                </div>
                <div className="col-md-4 text-center p-3">
                    <i className="bi bi-credit-card fs-1 text-info"></i>
                    <p className="h5 mt-2 mb-4">Fizetési feltételek</p>
                    <a href="#" className="btn btn-secondary">Elolvasom</a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
