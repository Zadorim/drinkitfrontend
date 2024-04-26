import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function TermekekListPage() {
    const [termekek, setTermekek] = useState([]);
    const {searchTerm, setSearchTerm} = useState("");   
    const [sortType, setSortType] = useState("asc");
    const [isFetchPending, setFetchPending] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        setFetchPending(true);
        fetch(`http://localhost:5130/api/Termekek/TermekLista`)
            .then(response => response.json())
            .then(data => {
                setTermekek(data);
                console.log(data)
                setFetchPending(false);
            })
            .catch(error => {
                console.error("Hiba a termékek lekérdezésében:", error);
                setFetchPending(false);
            });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
    };   

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>            
            <input type="text" placeholder="Keresés..." onChange={handleSearchChange} />
            <button onClick={() => setSortType("asc")}>Ár szerint növekvő</button>
            <button onClick={() => setSortType("desc")}>Ár szerint csökkenő</button>
            {isFetchPending ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {currentItems.map(termek => (
                        <div key={termek.id}>
                            <p>{termek.nev} - {termek.ar} Ft</p>
                            <p>{termek.leiras}</p>
                            <p>{termek.kategoriak}</p>
                            <Link to={`/termek/${termek.id}`}>Részletek</Link>
                        </div>
                    ))}
                    <div>
                        {pageNumbers.map(number => (
                            <button key={number} onClick={() => setCurrentPage(number)}>
                                {number}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default TermekekListPage;
