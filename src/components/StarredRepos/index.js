import { useState, useEffect } from "react";
import { getStarredRepos } from "../../services/githubService";
import Loader from "../Loader";
import "./index.css";

/**
 * Starred Repos List
 *
 * @description: Shows the list of Starred Repos for a Github User
 * @returns Bootstrap List Group of Starred Repos
 */
function StarredRepos() {
    const [searchTerm, setSearchTerm] = useState("");
    const [starredRepos, setStarredRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        window.addEventListener("getSearchTerm", (event) => {
            setSearchTerm(event.detail);
        });
        return () => {
            window.removeEventListener("getSearchTerm");
        };
    }, []);

    useEffect(() => {
        if (searchTerm.trim()) {
            setStarredRepos([]);
            setLoading(true);
            getStarredRepos(searchTerm).then((data) => {
                if (data.status === 401) {
                    setStarredRepos([]);
                    setLoading(false);
                    const event = new CustomEvent("JWT_EXPIRED", {
                        detail: true,
                    });
                    window.dispatchEvent(event);
                }
                setLoading(false);
                setStarredRepos(data);
            });
        } else {
            setStarredRepos([]);
            setLoading(false);
        }
    }, [searchTerm]);

    return (
        <div className="card p-5 mt-4">
            <h3 className="card-header">Starred Repositories</h3>
            <ul className="list-group list-group-flush">
                {loading && <Loader />}
                {starredRepos.length > 0 &&
                    starredRepos.map(({ id, name, html_url }) => (
                        <li className="list-group-item" key={id}>
                            <i className="fa fa-caret-right"></i>
                            <a href={html_url} target="_blank" rel="noreferrer">
                                {name}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default StarredRepos;
