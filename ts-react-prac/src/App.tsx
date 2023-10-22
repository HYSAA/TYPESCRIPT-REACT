import './App.css';
import Card from './Card';
import Navbar from './Navbar';
import Katie from './assets/girl.png';
import Robot from './assets/2.jpg'
import Gp01 from './assets/4.jpg'
// import Star from './assets/star.png';



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
      {/* <Card
        img={Robot}
        rating={9.0}
        reviewCount={10}
        country="Japan"
        title="Gundam"
        price="From $244 / person"
        //aaaa
      />
      <Card 
      img={Gp01}
      rating={8.9}
      reviewCount={10}
      country="Japan"
      title="WOW"
      price="From $100 / person"
      /> */}
    </>
  );
}

export default App;