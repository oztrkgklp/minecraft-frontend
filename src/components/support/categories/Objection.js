import React from "react";

const Objection = ({id, className, style}) => {
    return (
        <div>
            <div id={id} className={className} style={style}>
                <div className="input-wrapper">
                    <small>Oyuncu Adı</small>
                    <div className="input-wrap input-wrap-2 no-icon">
                        <input type="text" placeholder="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Objection;
