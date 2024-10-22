import React from 'react';

const Info = ({data}) => {
    return (
        <div>
            
            {

                    data.map((element) => {
                    return <div className='card-box'>
                        <div className='info-card' key={element.id}>
                        <h1>{element.title}</h1>
                        <p>{
                        element.descriptions.length > 100
                        ? element.descriptions.substr(0, 97).trim() + '...'
                        : element.descriptions
                        }</p>
                        <img src={element.image} alt="" />
                    </div>
                </div>
                })
            
            }
        </div>
    );
}

export default Info;
