import React from 'react';

let campList = [
    {id: 0, camp: 'Item one-a'},
    {id: 1, camp: 'Item two-a'},
    {id: 2, camp: 'Item three-a'},
    {id: 3, camp: 'Item four-a'},
    {id: 4, camp: 'Item five-a'},
    {id: 5, camp: 'Item six-a'},
    {id: 6, camp: 'Item seven-a'},
    {id: 7, camp: ''}
];

let needList = [
    {id: 10, need: 'Item one'},
    {id: 11, need: 'Item two'},
    {id: 12, need: 'Item three'},
    {id: 13, need: 'Item four'},
    {id: 14, need: 'Item five'},
    {id: 15, need: 'Item six'},
    {id: 16, need: 'Item seven'},
    {id: 17, need: ''}
];

let toItemView = ({key, value}) => (
    <li key={key}>
        <input type="checkbox" id={key} />
    <label htmlFor={key}>{value}</label>
    </li>
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

let transformNeedData = ({need, id}) => ({
    key: `${need}id`,
    value: need
});

let transformCampData = ({camp, id}) => ({
    key: `${camp}id`,
    value: camp
});

let View = () => (
    <div className="container">
        <div className="row">
            <div className="col s6">
                <h1>Camps</h1>
                <ListView list={campList.map(transformCampData)} />
            </div>
            <div className="col s6">
                <h1>Needs</h1>
                <ListView list={needList.map(transformNeedData)} />
            </div>
        </div>
        <Footer />
    </div>
);

export default View;
