import React from 'react';

let campList = [
    {camp: 'Item one'},
    {camp: 'Item two'},
    {camp: 'Item three'},
    {camp: 'Item four'},
    {camp: 'Item five'},
    {camp: 'Item six'},
    {camp: 'Item seven'},
    {camp: ''}
];

let camperList = [
    {camper: 'Jon Doe'},
    {camper: 'Jane Doe'},
    {camper: 'Jane Smith'},
    {camper: 'Larry'},
    {camper: 'Larry'},
    {camper: 'Gary'},
    {camper: 'Sam'},
    {camper: ''}
];

let toItemView = ({value}) => (
    <li>{value}</li>
);

let ListView = (props) => (
    <div className="container">
        <ul>
            {props.list.map(toItemView)}
        </ul>
    </div>
);

let Footer = () => (
    <div className="card">
        <div className="card-action center-align">
            <a href="https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C5CHFA_enUS735US735&ion=1&espv=2&ie=UTF-8#q=google+maps+nashville&*">Directions</a>
            <a href="#">Needs</a>
        </div>
    </div>
);

let View = () => (
    <div className="container">
        <div className="row">
            <div className="col s6">
                <h1>Camps</h1>
                    <ListView list={campList.map(({camp}) => ({value: camp}))} />
            </div>
            <div className="col s6">
                <h1>Campers</h1>
                    <ListView list={camperList.map(({camper}) => ({value: camper}))} />
            </div>
        </div>
        <Footer />
    </div>
);

export default View;
