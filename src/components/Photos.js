import React from 'react';
import axios from "axios";
import { useState,useEffect } from 'react';

const Photos = () => {
    const [fact, setFact] = useState([]);
    const [pages, setPages] = useState(1);
    useEffect(() => {
        console.log("da vao useEffect 1")
        HandleClick(); //HandleClick nằm ở đây để load khi mới vậy
        console.log("da vao useEffect 2")
    }, []);
    console.log("da render", pages)
    var link = `https://picsum.photos/v2/list?page=${pages}&limit=10`;
    const HandleClick = async () =>{
        const photos = fact;
        await fetchFact().then((data) => {
            setFact([...photos, ...data]);
            console.log("da load du lieu")
        })
        setPages(pages + 1);
        console.log("da set pages")
    }

    
    const fetchFact = async() =>{
        return await axios.get(link).then((response)=>{
            //console.log(response.data); in ra response data
            return response.data;       
        });
    } 


    
    return (
        <div>
            
            <div className='container'>
                {fact.map((element,index)=>{
                    return(
                        <div className='image'  key = {index}>
                            <img src={element.download_url} alt={element.author}/>                       
                        </div>
                    )
                })}
            </div>
            <button type="button" className="btn btn-primary" onClick={() =>HandleClick()}>Next</button>
        </div>
    );
};

export default Photos;

