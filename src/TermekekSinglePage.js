import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";



function TermekekSinglePage() {

    const param = useParams();
    const id = param.termekId;

    const [termek, setTermek] = useState([]);
    const [isPending, setPending] = useState(false);
   

    useEffect(() => {
        setPending(true);
        (async() => {
            try {
            const response = await fetch(`http://localhost:5130/api/Termekek/${id}`, {credentials: "include"})
            const termek = await response.json();
            setTermek(termek); 
                } catch (error) {
                    console.log("Hiba a termékek lekérdezésében:", error);
                }
            finally {
                setPending(false);
            }
        })();
    }, [id]);   

    return (
        <div className="p-5 m-auto text-center content bg-ivory">         
            { isPending || !termek.id ? ( <div className="spinner-border"></div>) :(
                <div className="card p-3">
                    <div className="card-body">
                        <h4>{termek.csoport}</h4>
                        <h5 className="card-title">{termek.nev}</h5>
                        <div className="lead">{termek.ar}.-Ft</div>
                        <p>Készleten: {termek.quantity} db</p>
                        <Link to={'/'}>
                            <img className="'img-fluid rounded"
                            style={{maxHeight: "500px"}}
                            alt= " "
                            src={termek.imgageURL ? termek.imgageURL: "https://unsplash.com/collections/qjiyVYafyWc/bor"}
                            ></img>
                        </Link>
                    </div>
                </div>
            )}  
                
        </div>
    );
}

export default TermekekSinglePage;
