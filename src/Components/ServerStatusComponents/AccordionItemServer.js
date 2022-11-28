import { ServerElement } from "./ServerElement";
import { Accordion } from "react-bootstrap";

export function AccordionItem({accordionKey ,accordionHeader, accordionBody}){

    return(
            <Accordion.Item eventKey={accordionKey} className="accordion-item bg-black">

                <Accordion.Header>
                    <ServerElement name={accordionHeader.server} status={accordionHeader.status || 'Operational'}/>
                </Accordion.Header>

                <Accordion.Body className="accordion-body">
                    {accordionBody}
                </Accordion.Body>

            </Accordion.Item>)
}
