import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/ohif_viewer">Ohif Viewer</Link>
        </li>
        <li>
          <Link to={{ pathname: "/dashboard" }}>Dashboard</Link>
        </li>
        <li>
          <Link to="/preferences">Preferences</Link>
        </li>
      </ul>

    </div>
  );
}
