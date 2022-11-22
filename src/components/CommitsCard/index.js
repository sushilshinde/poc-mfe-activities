import "./index.css";

function CommitsCard() {
  return (
    <div className="card p-5 mt-4">
      <h3 className="card-header">Weekly Commits</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i class="fa fa-caret-right"></i>An item</li>
        <li className="list-group-item"><i class="fa fa-caret-right"></i>A second item</li>
        <li className="list-group-item"><i class="fa fa-caret-right"></i>A third item</li>
        <li className="list-group-item"><i class="fa fa-caret-right"></i>A fourth item</li>
        <li className="list-group-item"><i class="fa fa-caret-right"></i>And a fifth one</li>
      </ul>
    </div>
  );
}

export default CommitsCard;
