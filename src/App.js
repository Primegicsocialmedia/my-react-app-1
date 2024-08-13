import { useState } from "react";
import Background from "./components/Background/Background.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";



function App() {
  let heroData = [
    {text1: "Dive into",text2:"what you love"},
    {text1: "Induldge",text2:"your passions"},
    {text1: "Give in to",text2:"your passions"},
  ]
  const [heroCount,setHerocount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background 
      playStatus={playStatus} heroCount={heroCount}
      />
      <Navbar />
    </div>
  )
}

export default App;



