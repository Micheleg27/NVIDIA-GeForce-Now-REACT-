import { Accordion } from "react-bootstrap";

export default function AccordionElement({children}){

    return(
        <Accordion className="accordion accordion-flush accordion-faq">
            {children}
        </Accordion>
    )
}
