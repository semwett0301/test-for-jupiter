import React, {useState} from 'react';
import RepresentingView from "../../view-components/RepresentingView/RepresentingView";

const Representing = () => {
    const [rows] = useState([
        {text: "Agency provides a full service range including technical skills, design, business", id: 1},
        {text: "understanding.", id: 2}
    ])

    return (
        <div>
            <RepresentingView rows={rows}/>
        </div>
    );
};

export default Representing;