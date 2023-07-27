import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Exemple from './components/exemple/app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

window.addEventListener("message", function(event) {
  var data = event.data;
  if (data.action === "show") {
    console.log(data);
    root.render(
      <React.StrictMode>
        <Exemple show={data.show.exemple} data={data.data}/>
      </React.StrictMode>
    );
  } 
});
