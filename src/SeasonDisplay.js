import React from 'react';

const getSeason = (lat, month) => {

    let hemisphere;

    if(lat > 0 ){hemisphere = 'Northern'}
    else {hemisphere = 'Southern'}

    if(hemisphere === 'Northern'){
        if(month >= 0 && month <= 2 || month >= 9){
            return 'Winter';
        } else {
            return 'Summer';
        }
    } else if(hemisphere === 'Southern') {
        if(month >= 0 && month < 3 || month >= 9){
            return 'Summer';
        } else {
            return 'Winter'
        }
    }
};

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());

    return <div><h1>{season === 'Winter' ? 'Burr, it\'s chilly!' : 'Let\'s hit the beach!'}</h1></div>;
};

export default SeasonDisplay;