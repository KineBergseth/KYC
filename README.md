# Stacc coding challenge: KYC

## Oppgavebeskrivelse

>Beskriv prosjekt kort her



Jeg har valgt å løse oppgaven med litt diverse verktøy, og har laget en MERN stack
(MongoDB (Atlas), Express.js, React, Node.js). Har aldri gjort det før, så tenkte at det kune være gøy å prøve seg på.


FEATURES:
- Search: Her kan brukeren fylle inn et navn eller org nr., og søke opp en person eller bedrift med roller. Det vil bli
utført en PEP-check som viser info om alle individene tilknyttet søket. (hvis de er en pep, hvis ikke skjer error hehe)
- Queue/Summary simulerer et pep screening tool, hvor en saksbehandler blir presentert en kø med personer som har slått ut på 
PEP status sjekk og blitt lagt til i en database for videre håndtering. 
  - Queue: Her kan admin gå gjennom køen, se info om hvert individ og tildele de en status
  - Summary: Viser et sammendrag av data i databasen + grafer med oppsummeringer

## How to run
### Prerequisites
- [Node.js](https://nodejs.org/en/) installed on your machine
- Internet connection

### Setup

Start by opening your preferred terminal, and navigate to this project's directory.

Type the following in your terminal.
```
npm install
```

Then navigate to the client folder

```
cd client
```

Type the following in your terminal.
```
npm install
```


### Running the code

Navigate to the server folder and type
```
npm start
```

Open a new terminal window. Do not terminate the already opened window, since the express server need to run in the background.
Navigate to the client folder, and open react frontend from terminal by typing

```
npm start
```

The frontend desktop will now be opened in your default browser running on http://localhost:3000

## Kommentarer

Har ikke gjort verdens største innsats på å få den til å bli helt responsiv. Så selv om den tilpasser seg ok ish til
små skjermer, anbefales det sterkt å se på appen på en større skjerm. Designet er litt meh, hvis jeg hadde hatt mer tid,
ville det vært penere. 

Fokuserte mest på å få litt diverse funksjonalitet inn, og noen ting gikk litt på bekostning av det.
Noen svakheter:
- ikke verdens beste error håndtering når det kommer til api kall, skjer litt rare ting i konsollen til tider
- hvis en søker opp en person som ikke er PEP eller en org som ikke eksisterer, så får du errorer ops. 
(i så fall bare refresh så funker det igjen). Rakk ikke å legge inn feilmelding her uheldigvis. 
- Prøvde å laste opp på heroku, men gikk dårlig.
