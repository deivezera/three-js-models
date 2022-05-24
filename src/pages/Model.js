
import { Outlet } from 'react-router-dom';

function Model() {
  return (
    <div id="canvas-container" style={{height: '100vh'}}>
      <Outlet/>
    </div>
  )
}

export default Model;