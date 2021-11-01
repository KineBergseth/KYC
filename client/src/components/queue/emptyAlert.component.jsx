import {Alert} from "react-bootstrap";

const EmptyAlert = () => {

    return (
        <Alert variant="primary" className="w-50 h-auto">
            <Alert.Heading>Hey, welcome to the queue</Alert.Heading>
            <p>
                Here you will find political exposed persons that have been marked by the automated program.<br/>
                You will need to analyse a person, and mark their status them accordingly.<br/>
                Approve: They are good to go<br/>
                Further enquiry: unclear, send it up the ladder to the bossman<br/>
                If a person is sent for further enquiry, they get marked as a complex case.<br/>
                Reject: people that are too big a risk

            </p>
            <hr/>
            <p>
                Click a name in the list to the right to get started.
            </p>
        </Alert>
    )
}
export default EmptyAlert;