import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1 flex items-center justify-center">
      <h1 className="text-2xl">Home</h1>
      </main>
      <Footer/>
    </div>
  )
}

export default Home;