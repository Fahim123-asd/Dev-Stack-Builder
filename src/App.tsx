import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import  Nav  from "./components/Nav";
import Technologies from "./components/Technologies";
import type { IDevsType } from "./type/Type";
const devFetch = async() : Promise<IDevsType[]>=>{
  const res = await fetch("/public/Data.json")
  const data = await res.json();
  return data
}
function App() {
  const[devPromise]=useState(()=>devFetch())
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading data.....</h2>}>
        <Technologies devPromise = {devPromise}></Technologies>
      </Suspense>
    </>
  )
}

export default App
