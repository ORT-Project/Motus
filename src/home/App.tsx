import React from 'react'
// import logo from '../resources/logo.svg'
import './App.css'

// import ButtonTest from '../components/ButtonTest'

export default function App () {
  return (
        <div className="section-accueil">
            <h1>Jeu du motus</h1>
            <p>Vous devez trouver un mot de X caractères en X tentatives.</p>
            <div className="content-history">
                <input value="test"></input>
                <div className="content-accueil">
                    <div className="motus-border motus-warning">
                        <p>A</p>
                    </div>
                    <div className="motus-border motus-danger">
                        <p>Z</p>
                    </div>
                    <div className="motus-border motus-success">
                        <p>E</p>
                    </div>
                    <div className="motus-border motus-success">
                        <p>R</p>
                    </div>
                    <div className="motus-border motus-success">
                        <p>X</p>
                    </div>
                </div>
                <div className="content-accueil">
                    <div className="motus-border motus-warning">
                        <p>A</p>
                    </div>
                    <div className="motus-border motus-danger">
                        <p>Z</p>
                    </div>
                    <div className="motus-border motus-success">
                        <p>E</p>
                    </div>
                    <div className="motus-border motus-success">
                        <p>R</p>
                    </div>
                    <div className="motus-border motus-success">
                        <p>X</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
