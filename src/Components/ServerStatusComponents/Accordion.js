export function Accordion({serverName, serverStatus}) {
  return (
    <div className='container-server-accordion'>
    <div className="accordion accordion-server" id="accordionExample">
      <div className="accordion-item accordion-server-item">
        <h2 className="accordion-header accordion-server-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <div className='container-paragraph'>
              <p className='servername-paragraph'>{serverName}</p>
              <p className='serverstatus-paragraph'>{serverStatus}</p>
            </div>

          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse accordion-server-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body accordion-server-body">


          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
