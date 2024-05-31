const Item = ({foodItem}) => {

    const handleBuyButtonClicked = (event) =>{
        console.log(event);
        console.log(`${foodItem} being bought`)
    }

    return <li className="list-group-item">
        <span className="kg-span">{foodItem}</span>
        <button className="button btn btn-info" onClick={(event) => handleBuyButtonClicked(event)}>Buy</button>
    </li>
}

export default Item;