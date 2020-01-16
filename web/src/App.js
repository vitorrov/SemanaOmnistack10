import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, [])

  return (
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required></input>
            </div>

            <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
            </div>

            <div className="input-group">
            <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
            type="number" 
            name="latitude" 
            id="latitude" 
            required 
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            />
            </div>


            <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
            type="number" 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            />
            </div>
            </div>
            
            <button type="submit">Salvar</button>
          </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/57811481?s=460&v=4" alt="Vitor"/>
              <div className="user-info">
                <strong>Vitor</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              </header>
              <p>Minha biografia.</p>
              <a href="https://github.com/vitorrov">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/57811481?s=460&v=4" alt="Vitor"/>
              <div className="user-info">
                <strong>Vitor</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              </header>
              <p>Minha biografia.</p>
              <a href="https://github.com/vitorrov">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/57811481?s=460&v=4" alt="Vitor"/>
              <div className="user-info">
                <strong>Vitor</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              </header>
              <p>Minha biografia.</p>
              <a href="https://github.com/vitorrov">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/57811481?s=460&v=4" alt="Vitor"/>
              <div className="user-info">
                <strong>Vitor</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              </header>
              <p>Minha biografia.</p>
              <a href="https://github.com/vitorrov">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
