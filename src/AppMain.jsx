import { linguaggi_web } from "./data/app_data"

import { useState } from 'react'

export default function AppMain () {

    const [description, setDescription] = useState("");

    function visualizzaDescrizione(descrizione){

        return(
            setDescription(descrizione)
        )
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    {
                        linguaggi_web.map( linguaggio =>{
                            return(
                                <div className="col-3">
                                    <div className="card"  key={linguaggio.id}>
                                        <button onClick={() => visualizzaDescrizione(linguaggio.descrizione)}>{linguaggio.nome}</button>
                                        <div className="card-body">
                                            <p>{linguaggio.descrizione}</p>
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