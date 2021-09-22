import React, { Component } from 'react';
import "./AboutPage.css";

class About extends Component {
    render() {
        return (
            <div className="About">
                <br/><br/>
                <h5>C'est une mini Projet avec React</h5>
                <br/>
                <h6>Technologies:</h6>
                <ul>
                    <li>React, React router</li>
                    <li>Redux, Redux Thunk</li>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Mock API, Axios</li>
                    <li>Bootstrap 4</li>
                </ul>
                <br/><br/>
                <h6>Fonctionnalité :</h6>
                <ul>
                    <li>Créer d'un compte</li>
                    <li>Ajouter, enlever une comment</li>
                    <li>Ajouter, enlever un like</li>
                    <li>Créer un nouveau post</li>
                </ul>
            </div>
        );
    }
}

export default About;