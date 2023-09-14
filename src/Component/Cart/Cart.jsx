/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedActors,remaining, totalCost}) => {
    console.log(selectedActors,remaining, totalCost);
    return (
        <div>
            <h2>Total Actors: {selectedActors.length} </h2>
            <h2>Remaining : {remaining} </h2>
            <h2>Total Cost : { totalCost} </h2>
            {
                
                selectedActors.map((actor)=>(
                    <li key={actor.id} > {actor.name} </li>
                ) )
            }
        </div>
    );
};

export default Cart;