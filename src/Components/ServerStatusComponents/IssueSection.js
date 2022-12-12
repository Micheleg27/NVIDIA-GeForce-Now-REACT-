import { Link } from "react-router-dom";

export function IssueSection() {
  return (
    <div className='container-server'>
      <div className="container-issue-server">
        <div className="header-issue-server">
          <Link
            to="https://status.geforcenow.com/incidents/9kxrwmjjp4j6"
            id="a-issue-server"
          >
            Black Desert Online - There is an issue with this version
          </Link>
        </div>

        <div className="paragraph-issue-server">
          <p className="p1-issue-server">
            Investigating - GFN has found an issue with Black Desert Online. We
            will work on a fix to this game. We apologize for the confusion.
          </p>

          <p className="p2-issue-server">Nov 18, 2022 - 15:26 PST</p>
        </div>
      </div>
    </div>
  );
}
