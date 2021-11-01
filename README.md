# Stacc coding challenge: KYC

## Oppgavebeskrivelse

>Beskriv prosjekt kort her


MERN stack. MongoDB (Atlas), Express.js, React, Node.js

PAGES:
- Search: Her kan brukeren fylle inn et navn eller org nr., og søke opp en person eller bedrift med roller. Det vil bli
utført en PEP-check som viser info om alle individene tilknyttet søket.
- Queue/Summary simulerer et pep screening tool, hvor en admin blir presentert en kø med personer som har slått ut på 
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

In the server folder type
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
små skjermer, anbefales det sterkt å se på appen på en større skjerm.

>Noen spesielle valg du ønsker å beskrive/forsvare?
>Eventuellt andre kommentarer / utfordringer?
