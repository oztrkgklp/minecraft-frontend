import React from "react";

const Suggestions = ({id, className, style}) => {
    return (
        <div>
            <div id={id} className={className} style={style}>
                <div className="input-wrapper">
                    <small>Mesajınız</small>
                    <div className="input-wrap input-wrap-2 auto-height">
                        <textarea placeholder=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
