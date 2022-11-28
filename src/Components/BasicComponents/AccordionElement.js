import { Accordion } from "react-bootstrap";

export function AccordionElement({children}){

    return(
        <Accordion className="total-accordion" >
            {children}
        </Accordion>
    )
}