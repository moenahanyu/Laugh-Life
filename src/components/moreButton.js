
import { Link } from "gatsby"
import React from "react"

import ArrowImage from '../images/arrow.png'



const moreButton = (props) => {

    return (
        <>
        <div class="more-btn-wrap">
            <Link to={props.links} className="more-btn">
                <p>View More</p>
                <span className="arrow">
                    <span></span>
                </span>
            </Link>
        </div>

        <style jsx="true">{`
                .more-btn-wrap {
                    display: flex;
                    justify-content: end;
                    margin-right: 20px;
                }
                .more-btn {
                    display: flex;                    font-weight: bold;
                    letter-spacing: 2px;
                    font-size: 1.6rem;
                    // justify-content: flex-end;
                    align-items: center;
                }
                .arrow {
                    background: url(${ArrowImage});
                    background-size: contain;
                    background-repeat: no-repeat;
                    width: 18px;
                    height: 15px;
                    position: relative;
                    margin-left: 40px;
                }
                .arrow span {
                    position: absolute;
                    display: block;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: solid 1px #333;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: ease .3s;
                }
                .more-btn:hover .arrow span{
                    width: 80px;
                    height: 80px;
                    -webkit-transition: ease .3s;
                    transition: ease .3s;
                }
            `}
        </style>
        </>
    );
  };

  
  export default moreButton;
