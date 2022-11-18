import { Accordion } from "react-bootstrap";

export function AccordionItem({accordionKey ,accordionHeader, accordionBody}){

    return(
            <Accordion.Item eventKey={accordionKey}>
                
                <Accordion.Header >
                    {accordionHeader}
                </Accordion.Header>

                <Accordion.Body >
                    {accordionBody}
                </Accordion.Body>

            </Accordion.Item>
    )
}