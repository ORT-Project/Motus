import React from 'react'
// import logo from '../resources/logo.svg'
import './App.css'
import words from 'an-array-of-french-words'
// import ButtonTest from '../components/ButtonTest'

export default function App () {
  const minLetters = 4
  const maxLetters = 5
  // Choisis tout les mots de la liste qui sont des lettres minuscules sans accents et sans caractères spéciaux
  const wordList = (words as any[]).filter((word: string) => (
    /^[a-z]+$/.test(word) &&
            word.length > minLetters &&
            word.length <= maxLetters
  )
  )
  // Choisis un mot au hasard dans la liste
  const randInt = Math.floor(Math.random() * wordList.length)
  // useEffect(() => {
  //   setWord(wordList[randInt])
  // }, []
  // )
  // Transforme le mot en tableau de lettres
  const characters = wordList[randInt].toUpperCase().split('')

  return (
        <div className="section-accueil">
            <h1>Jeu du motus</h1>
            <p>Vous devez trouver un mot de X caractères en X tentatives.</p>
            <div className="content-history">
                <input value="test"></input>
                <div className="content-accueil">
                    {/* Pour chaque lettre du mot, on crée un div avec la lettre à l'intérieur */}
                    {characters.map((char: string, index: number) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="motus-border motus-warning">
                            <p key={index}>{char}</p>
                        </div>

                    ))}
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
