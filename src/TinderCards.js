import React from 'react'
import "./TinderCards.css"
import {useState,useEffect} from "react";
import TinderCard from "react-tinder-card"
import axios from './axios';
function TinderCards() {
    
    const [people,setPeople]=useState([])


    useEffect(()=>{
        async function fetchData(){
            const req= await axios.get('/tinder/cards');
            setPeople(req.data);

        }
        fetchData();
    },[])

    const swiped=(direction,nameToDelete)=>{
        console.log("Removing:" + nameToDelete);
        // setLastDirection(direction);
    }
    const outOfFrame=(name)=>{
        console.log(name + "Left The Screen.")
    }
    return (
        <div className="tinderCards">

        <div className="tinderCards__cardContainer">
        {people.map((person)=>(
            <TinderCard className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={() =>outOfFrame(person.name)}>

            <div className="card" style={{ backgroundImage: `url(${person.imgUrl})`}}>
                {/* <h4>{person.url}</h4> */}
                {/* <img src={`${person.url}`} alt="" /> */}
            
                <h3>{person.name}</h3>
            </div>

            </TinderCard>
            
        ))}

        </div>
      
            
        </div>
    )
}

export default TinderCards







// [{
//     name:"Elon Musk",
//     imgUrl:"https://media.gettyimages.com/photos/elon-musk-speaks-onstage-at-the-elon-musk-in-conversation-with-todd-picture-id1155740300?k=20&m=1155740300&s=612x612&w=0&h=Eab22o1CbRBQMJnzsj8t7oP-lNnGYpXECYc9WIfa47s="
//     // url:"https://www.shutterstock.com/image-photo/elon-musk-he-arrives-attend-meeting-1985005055"

// },{
//     name:"Jeff Bezos",
//     imgUrl:"https://media.gettyimages.com/photos/amazon-ceo-jeff-bezos-founder-of-space-venture-blue-origin-and-owner-picture-id1036094130?k=20&m=1036094130&s=612x612&w=0&h=fDWfoSUdv3NHGp55ZDk5r-4v3jsIOKt67VtJBsEP0Vg="

// },{
//     name: "Mark Zuckerberg",
//     imgUrl: "https://media.gettyimages.com/photos/cofounder-and-chief-executive-of-facebook-mark-zuckerberg-gestures-as-picture-id456917986?k=20&m=456917986&s=612x612&w=0&h=GwiYEKE2g1NISQ7HmMAzf1uzNIbE7-lU96lZMlOnf-U="
// }]