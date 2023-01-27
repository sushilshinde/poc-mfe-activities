import React from "react";
import './index.css';

const Loader = () => {
    return (
        <div>
        <div className="animated-background">
            <div className="background-masker"></div>
        </div>
        <div className="animated-background">
            <div className="background-masker"></div>
        </div>
        <div className="animated-background">
            <div className="background-masker"></div>
        </div>
        <div className="animated-background">
            <div className="background-masker"></div>
        </div>
        <div className="animated-background">
            <div className="background-masker"></div>
        </div>
        </div>
    );
};

export default Loader;
