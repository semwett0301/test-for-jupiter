import React, {useEffect, useState} from 'react';
import RepresentingView from "../../view-components/RepresentingView/RepresentingView";

const Representing = () => {

    const text = "Agency provides a full service range including technical skills, design, business understanding."

    let header = "Portfolio"

    return (
        <div>
            <RepresentingView header={header} text={text}/>
        </div>
    );
};

export default Representing;