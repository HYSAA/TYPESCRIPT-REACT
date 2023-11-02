import './App.css';
import Card from './Card';
import Navbar from './Navbar';
import Katie from './assets/girl.png';
import Robot from './assets/2.jpg'
import Gp01 from './assets/4.jpg'
// import Star from './assets/star.png';


// interface CardProps {
//   img: string;
//   rating: number;
//   reviewCount: number;
//   country: string;
//   title: string;
//   price: string;
// }
/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/
interface names {

  names: string;


}

//owari


const names = ["alice", "bob", "charlie", "danielle"]

const capitalized = names.map((name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
})

console.log(capitalized)



function App(): React.ReactElement {


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