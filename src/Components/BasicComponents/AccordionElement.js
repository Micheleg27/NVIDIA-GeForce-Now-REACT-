import { Accordion } from "react-bootstrap";

export function AccordionElement({children}){

    return(
        <Accordion >
            {children}
        </Accordion>
    )
}