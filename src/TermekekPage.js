import React, {useState,useEffect} from "react";
import { useNavigate, Link} from "react-router-dom";



function TermekekPage() {
    
    const [termekek,setTermekek] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFetchPending(true);
        fetch(`http://localhost:5130/api/termekek`)
        .then((response) =>response.json())
        .then((termekek) => setTermekek(termekek))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
            //navigate('/');
        });
    }, [navigate]);
    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div>
                    <h2>Termékek</h2>
                    {termekek.map((termek) => (

                        <div className="card col-sm-3 d-inline-block m-1 p-2">
                            <p className="text-dark"> {termek.nev}</p>
                            <p className="text-danger"> {termek.ar}</p>
                            <p className="text-danger">{termek.leiras}</p> 
                            <p className="text-danger"> {termek.kategoriak}</p>                           
                            <div className="card-body">
                                <Link key={termek.id} to={"/termekek/" + termek.id}>
                                    <img alt={termek.nev}
                                        className="img-fluid"
                                        style={{ maxHeight: 200 }}
                                        src={termek.kepneve ? termek.kepneve :
                                            "https://via.placeholder.com/400x800"} /></Link>
                                <br />
                                <Link key="y" to={"/mod-termek/" + termek.id}>
                                    <i className="bi bi-pencil"></i></Link> &nbsp;&nbsp;
                                    <Link key="x" to={"/del-termek/" + termek.id}><i className="bi bi-trash3"></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default TermekekPage;