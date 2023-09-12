import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1 flex items-center justify-center">
      <h1 className="text-2xl">Contact</h1>
      </main>
      <Footer/>
    </div>
  )
}

export default Contact;