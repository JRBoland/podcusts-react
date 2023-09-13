import Header from "../components/Header"
import { ButtonMailto } from "../components/ButtonMailTo";

function Contact() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-2xl hidden">Contact</h1>
      <h2 className="text-2xl">Get in touch:</h2>
      <ButtonMailto label="info@podcusts.com" mailto="mailto:info@podcusts.com" />
      </main>
    </div>
  )
}

export default Contact;