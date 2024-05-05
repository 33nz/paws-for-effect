import Dog from './dog.tsx'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Dog name="Spot" breed="Fox terrier" superpower="Heat vision" />
      <Dog name="Butch" breed="Cocker spaniel" superpower="Sense of smell" />
    </div>
  )
}

export default App
