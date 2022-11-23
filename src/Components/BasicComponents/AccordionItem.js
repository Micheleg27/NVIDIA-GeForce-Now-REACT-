import { Accordion } from "react-bootstrap";

export default function AccordionItem({accordionKey ,accordionHeader, accordionBody}){

    return(
            <Accordion.Item eventKey={accordionKey} className="accordion-item bg-black">

                <Accordion.Header className="accordion-header">
                    {accordionHeader}
                </Accordion.Header>

                <Accordion.Body className="accordion-body accordion-body-faq">
                    {accordionBody}
                </Accordion.Body>

            </Accordion.Item>
    )
}
