import { Accordion } from "react-bootstrap";

export function AccordionElement({children}){

    return(
        <Accordion className="accordion accordion-flush">
            {children}
        </Accordion>
    )
}