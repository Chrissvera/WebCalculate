import { useState } from 'react';
import './App.css';
import logo from './assets/icono.png'
import { calculate } from './services/calculatevalues';
function App() {
  const [kilogramos, setKilogramos] = useState()
  const [edad, setedad] = useState()
  const [information, setInformation] = useState({
    kg: '',
    type: false,
    model: false
  })

  const handleChange = (event) => {
    setKilogramos(event.target.value)
  }
  const handleChangeEdad = (event) => {
    setedad(event.target.value)
  }
  const calculateValueKilogramos = () => {
    const msg = calculate({ edad, peso: kilogramos })
    setInformation(msg)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-grid'>
          <form>
            <div class="input-group mb-3">
              <span class="input-group-text">KG</span>
              <input type="text" class="form-control" minLength={4} maxLength={4} onChange={handleChange} />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Edad</span>
              <input type="text" class="form-control" minLength={2} maxLength={2} onChange={handleChangeEdad} />
            </div>
          </form>
        </div>

        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={calculateValueKilogramos}>Calcular</button>
      </header>

      <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Calculo terminado</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='App-modalImage'>
              {information.type ? <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#8fff6c" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#ff6c6c" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>}
            </div>
            <div class="modal-body">
              <div className='App-modalText'> {information.msg}
              </div>
              {!information.model ?
                <a type="button" href='https://educacion.gob.ec/ministerio-de-educacion-regula-peso-de-la-mochila-escolar/' class={`${information.type ? "btn btn-outline-success" : "btn btn-outline-danger"}`} >Mas Informacion!</a>
                : <></>}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{information.model ? "Reintentar" : "Volver"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
