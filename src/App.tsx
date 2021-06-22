import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
// import MouseTracker from './components/MouseTracker'
// import useMouseTracker from './hooks/useMouseTracker'
// import withLoader from './components/withLoader'
import useURLLoader from './hooks/useURLLoader'


interface IShowImage {
  message: string,
  status: string
}

interface IThemeProps {
  [key: string]: {color: string; background: string}
}

const theme: IThemeProps = {
  "light": {
    color: "#000",
    background: "#eee"
  },
  "dark": {
    color: "#fff",
    background: "#222"
  }
}

export const ThemeContext = React.createContext(theme.light)

// const DogShow: React.FC<{data: IShowImage}> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog show: {data.status}</h2>
//       <img src={data.message}/>
//     </>
//   )
// }

// const WrapDogShow = withLoader(DogShow, "https://dog.ceo/api/breeds/image/random")

function App() {
  const [show, setShow] = useState(true)
  // const [data, isLoading] = useURLLoader("https://dog.ceo/api/breeds/image/random", [show])
  // const dogResult = data as IShowImage
  // const positions = useMouseTracker()
  return ( 
    
    <div className="App">
      <ThemeContext.Provider value={theme.dark}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* {
          isLoading ? <p>🐶获取中</p> : 
          <img src={dogResult && dogResult.message} />
        } */}
        {/* <p>X:{positions.x}, Y:{positions.y}</p> */}
        <button onClick={()=>setShow(!show)}>Switch</button>
        {/* <WrapDogShow/> */}
        {/* <Hello message="Hello World"/> */}
        <LikeButton/>
        {/* {show&&<MouseTracker/>} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
