import FoodItems from './components/FoodItems';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
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
      <ErrorMessage items={foodItems} />
      <FoodInput />
      <FoodItems items={foodItems} />
    </Container>
    <Container>
      <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container>
    </>
  );
}

export default App;
