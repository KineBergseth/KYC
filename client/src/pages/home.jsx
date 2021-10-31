import React from 'react'

const Home = () => {

    return (
        <div className="component-home mx-5">
            <h1>PEꟼ</h1>
            <p>Velkommen til PEꟼ<sup>TM</sup> , en web app med et PEP screening tool!</p>
            <p>Du er logget inn som <a href="/">Ola N.</a></p>
            <br/>
            <p>PEꟼ<sup>TM</sup> tjenesten er utviklet av mon£y Corp - et selskap som har holdt på med PEP sjekker siden
                1843.
                Vi ønsker vi å tilby de beste tjenestene for våre ansatte slik at PEP søk gjøres på 1-2-3.</p>
            <br/>
            {/* Dette er semanisk dårlig html, men gadd ikke skrive css :o */}
            <h4>Search</h4>
            <p>
                Her kan du søke opp personer og bedrifter som du ønsker å ta en titt på. Du vil bli presentert med
                en oversikt over alle relevante treff, og et svar på om de er politisk eksponert eller ikke.
            </p>
            <h4>Queue</h4>
            <p>
                Her finner du en oversikt over kunder som må behandles manuelt av deg, en saksbehandler. Dette er
                kunder som har blitt registrert som politisk eksponert personer, og krever at et menneske går over
                informasjonen og tar en avgjørelse om vi ønsker å godkjenne, avslå eller se enda nøyere på dem.
            </p>
            <h4>Summary</h4>
            <p>
                Her kan du se en oversikt over alle kunder i vårt system som er registrert som politiske eksponerte
                personer. Du finner en magisk graf som viser statusen til alle kunder i systemet, samt et kart som
                forteller hvor i verden kundene er lokalisert. Det er også en tabell som viser en enkelt oversikt
                over alle kunder, slik at man lett har oversikt.
            </p>
        </div>
    )
}

export default Home;