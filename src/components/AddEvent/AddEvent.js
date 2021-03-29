import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addEvent`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res);
            })
    }

    const handleImageUpload = e => {
        // console.log(e.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '384b2452a08c255dc245ce05082de4ed')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="new event" ref={register} />
                <br /><br />
                <input name="exampleRequired" type='file' onChange={handleImageUpload} />
                <br /><br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;