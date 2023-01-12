import React, { useEffect } from "react";

export default function Page(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.document.title = props.title;
    }, []);

    return (
        <div className="pad">
            <div className="wrapper history">
                <div className="h1">{props.title}</div>
                <div className="img">
                    <img src={props.main_image} />
                </div>
                <div className="text">
                    {props.content}
                </div>
            </div>
        </div>
    );
}
