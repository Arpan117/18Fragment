import FoodItems from './components/FoodItems';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);


  // let [textToShow, setTextState] = useState("Food Item Entered by user");

  // console.log(`Current value of textState: ${textToShow}`);

  // let textToShow = "Food Item Entered by user";

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      // console.log('Food value entered is ' + newFoodItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };

// let foodItems = [];
// if (foodItems.length === 0) {
//   return <h3>I am still hungry.</h3>
// }

// let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

return (
  <>
    <Container>
      <h1>Healthy Food</h1>
      {/* {emptyMessage} */}
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems} />
    </Container>
    {/* <Container>
      <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container> */}
  </>
);
}

export default App;
