import { Accordion } from "react-bootstrap";

export default function AccordionElement({children}){

    return(
        <Accordion className="accordion accordion-flush">
            {children}
        </Accordion>
    )
}
