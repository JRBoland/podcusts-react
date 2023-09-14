import Header from "../components/Header"

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-2xl">About</h1>
      <p className="mt-24 italic">coming soon...</p>
      </main>
    </div>
  )
}

export default About;