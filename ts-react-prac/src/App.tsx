import './App.css';
import Card from './Card';
import Navbar from './Navbar';

import Katie from './assets/girl.png';
import Star from './assets/star.png';

interface CardProps {
  img: string;
  rating: number;
  reviewCount: number;
  country: string;
  title: string;
  price: string;
}

function App(): React.ReactElement {
  /*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

  return (
    <>
      <Navbar />
      <Card
        img={Katie}
        rating={5.0}
        reviewCount={6}
        country="Japan"
        title="Life Lessons with Katie Zaferes"
        price="From $136 / person"
      />
      <Card
        img={Katie}
        rating={5.0}
        reviewCount={6}
        country="Japan"
        title="Life Lessons with Katie Zaferes"
        price="From $136 / person"
      />
    </>
  );
}

export default App;