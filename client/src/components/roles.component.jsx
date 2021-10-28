import React from "react";
import "./roles.styles.css";

const Roles = () => {

    return (<>
            <div className="component-roles container">
                {/*{props.map(result =>
                <table className="table-roles table">
                    <tbody>
                    <tr>
                        <td>Kategori</td>
                        <td>{result.type.kode}</td>
                    </tr>
                    <tr>
                        <td>Tittel</td>
                        <td>{result.type.beskrivelse}</td>
                    </tr>
                    <tr>
                        <td>Sist endret</td>
                        <td>{result.SistEndret}</td>
                    </tr>
                    <tr>
                        <td>Navn</td>
                        <td>result.person.navn</td>
                    </tr>
                    <tr>
                        <td>Fødeselsdato</td>
                        <td>{result.fodselsdato}</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td>{result.score}</td>
                    </tr>
                    </tbody>
                </table>
                )
                }*/}
            </div>
        </>
    )
}

export default Roles;