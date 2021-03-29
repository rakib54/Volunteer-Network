import React from 'react';

const Event = ({event}) => {
    // console.log(event);
    const handleDelete = (id) =>{
        fetch(`https://agile-falls-19615.herokuapp.com/deleteEvent/${id}`,{
            method :'DELETE',

        })
        .then(res =>res.json())
        .then(result =>{
           console.log(result);
        })

    }
    return (
        <div className="col-md-3">
             <img style={{height:'300px'}} src={event.imageURL} alt="image"/>
            <h3>{event.name} <button onClick={()=>handleDelete(event._id)}>Delete</button></h3>
            
        </div>
    );
};

export default Event;