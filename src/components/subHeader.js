

import React from "react"




const subHeader = (props) => {

    return (
        <div className="sub-header container">
            <h2 className="sub-title">
                <span className="en">{props.enTitle}</span>
                <span>{props.jaTitle}</span>
            </h2>

            <style jsx="true">{`
                .sub-header {
                    padding-top:100px;
                    padding-bottom:100px;
                    position: relative;
                    margin-bottom: 100px;
                }
                .sub-header:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    height: 1px;
                    background: #C3C3C3;
                    width: calc(100vw - 50px);
                }
                .sub-header:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    height: 1px;
                    background: #43C4C4;
                    width: 10%;
                }
                .sub-title {
                    display: flex;
                    flex-direction: column;
                    font-size: 2rem;
                }
                .sub-title .en {
                    color: #43C4C4;
                    font-size: 1.5rem;
                    margin-bottom: 8px;
                }
                @media screen and (max-width: 460px) {
                    .sub-header {
                        padding-top:50px;
                        padding-bottom:50px;
                        margin-bottom: 60px;
                    }
                }
            `}
            </style>
        </div>
    );
  };

  
  export default subHeader;
