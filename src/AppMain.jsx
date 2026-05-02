import { linguaggi_web } from "./data/app_data"

import { useState } from 'react'

export default function AppMain () {

    const [idSelected, setIdSelected] = useState(null);

    function selezionaId(id){
        setIdSelected(id)    
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    {
                        
                        linguaggi_web.map( linguaggio =>{
                            return(
                                <div className="col-12 m-3"  key={linguaggio.id}>
                                    < div className="card">
                                        <div className="col-3 m-2">
                                            <button type="button" 
                                                    onClick={() => selezionaId (linguaggio.id)}
                                                    className={`btn ${linguaggio.id === idSelected ? 'btn-warning':'btn-primary'} `}>
                                                    {linguaggio.nome}
                                            </button>
                                        </div>
                                        {/* <button onClick={() => selezionaId (linguaggio.id)}>{linguaggio.nome}</button> */}
                                        <div className="card-body">
                                            <p className={`description ${linguaggio.id === idSelected ? 'active':''}`} >
                                                {linguaggio.descrizione}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}