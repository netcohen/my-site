import { useState } from "react";
import Forum from "./Forum";
import Contact from "./Contact";
import Personal from "./Personal";


function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }


    return (
        <div className="header">
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>forum</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}> Tab 2</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Personal-area</div>
                <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Contact</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <div><Forum /> </div>
                </div>           
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <div></div>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <div><Personal/></div>
                </div>
                <div className={toggleState === 4 ? "content active-content" : "content"}>
                    <div><Contact/></div>
                </div>
            </div>
        </div>
    )
}

export default Tabs