
import "./App.css";
import Video from "./pages_/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        < Video 
          likes={100}
          messages={2550}
          shares={350}
          name="Hully"
          description="Brecker do goleiro"
          music="música épica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        />
        < Video 
          likes={40}
          messages={20}
          shares={30}
          name="Beuz"
          description="Bird olhando para a camera"
          music="música épica2"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        /> 



        
      </div>
    </div>
  );
}

export default App;
