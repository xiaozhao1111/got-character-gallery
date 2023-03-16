import React from "react";

function Character(props) {

    return (
        <div data-test='component-character' className='card-container'>
            <h1 data-test='char-name'>{props.name}</h1>
            <div className='image-container'>
                <img data-test='char-img' src={props.imgUrl} alt={props.name}></img>
            </div>
            <div>
                <ul data-test='char-list' className='card-body'>
                    <li data-test='char-birth'><strong>Date of Birth: </strong>{props.birth}</li>
                    <li data-test='char-death'><strong>Date of Death: </strong>{props.death}</li>
                    <li data-test='char-race'><strong>Race: </strong>{props.race}</li>
                    <li data-test='char-realm'><srong>Realm: </srong>{props.realm}</li>
                    <li data-test='char-spouse'><strong>Spouse: </strong>{props.spouse}</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Character;