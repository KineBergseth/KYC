import React from 'react'

const Queue = () => {
    //get name list from db
    // get person from db
    //update notes/status in db

    return (
        <>
            <div className="component-queue">
                <h1>Queue</h1>
                <p>left side: actionable listitems - scrollable element? </p>
                <p>random image here</p>
                <h1>NAME</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Aliases</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Birth date</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Countries</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Last seen</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>First seen</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Dataset</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td>.</td>
                    </tr>
                    </tbody>
                </table>
                <p>TEXTFIELD 4 NOTES</p>
                <p>3 BUTTONS - APPROVED, FURTHER ANALYSIS, REJECTED</p>
            </div>
        </>
    )
}

export default Queue;