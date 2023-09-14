/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {
    const [allActors, setAllActors] =useState([])
    const [selectedActors, setSelectedActors]=useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState (0)

    useEffect( ()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data =>setAllActors(data))
    },[] )

    const handleSelectActor=(actor)=>{
        const isExist = selectedActors.find(item =>item.id===actor.id)
        let count = actor.salary
        // if(!isExist){
        //     const newSelectedActors = [...selectedActors, actor];
        // setSelectedActors(newSelectedActors)
        // } //ekta way.
        if(isExist){
           return alert('already booked')
        }
        else{
            selectedActors.forEach((item)=>{
                count= count+ item.salary

            });
            const totalRemaining = 20000-count
            if(count > 20000){
                return alert('Ooops! you dont have enough budget')
            }
            else{
                setTotalCost(count)
            setRemaining(totalRemaining)

                 const newSelectedActors = [...selectedActors, actor];
         setSelectedActors(newSelectedActors)

            }
            
         

        }
        


    }
console.log(selectedActors);

    
    return (
        <div className="container" >
            <div className="home-container" >
                <div className='card-container' >
                {
                    allActors.map(actor=> (
                        <div key={actor.id} className="card" >
                <div className='card-img'>
                    <img className='photo'  src={actor.image} alt=""/>
                </div>
                <h2>{actor.name}</h2>
                <p><small>Do not worry about anything. Just do what you can and be the best you can be. </small></p>
                <div className='info'  >
                    <p>Salary:{actor.salary}</p>
                    <p>{actor.role}</p>
                </div>
                <button onClick={()=>handleSelectActor(actor)} className='card-btn' type="">Select</button>
            </div>
                    ) )
                }
                </div>
                <div className='cart' >
                    <Cart selectedActors={selectedActors}
                    remaining = {remaining}
                    totalCost ={ totalCost}   ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;