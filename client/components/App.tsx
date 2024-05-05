import Dog from './dog.tsx'
import Subtitles from './subtitles.tsx'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Subtitles text="Canines using super-canine abilities for social good." />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <img src="/images/bulldog.png" alt="A bulldog" />
      <Dog name="Spot" breed="hound" superpower="Heat vision" />
      <img src="/images/hound.png" alt="a hound"></img>
      <Dog name="Butch" breed="dachshund" superpower="Sense of smell" />
      <img src="/images/dachshund.png" alt="a dachshund" />
    </div>
  )
}

export default App
