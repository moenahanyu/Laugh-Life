

import React from "react"




const subTitle = (props) => {

    return (
            <h2 className="sub-title">
                <span className="en">{props.enTitle}</span>
                <span>{props.jaTitle}</span>

            <style jsx="true">{`
                .sub-title {
                    display: flex;
                    flex-direction: column;
                    font-size: 2rem;
                    font-weight: bold;
                }
                .sub-title .en {
                    color: #43C4C4;
                    font-size: 1.5rem;
                    margin-bottom: 8px;
                }
            `}
            </style>
            </h2>

    );
  };

  
  export default subTitle;
