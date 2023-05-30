import React from 'react';
import "./AccueilView.css";

const AccueilView = () => {
    return (
        <div className='fond'>
            <div className='tampon'>

            </div>
            <div className='bandeau-blanc'>
                <div className='prez'>
                    <img src="/gros-logo-pour-prez.png" alt="Gros logo Trallo" className='groslogo' />
                    <div className='texte'>
                        <p className='titre'>Bienvenue sur Trallo !</p>
                        <p className='titre'>Vous allez pouvoir travailler plus efficacement avec vos équipes</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus ornare ipsum, nec sagittis mauris efficitur eget. Sed nec dui porta arcu convallis mattis non quis leo. Pellentesque aliquam tellus at nibh finibus ullamcorper. Etiam non congue massa, et lobortis magna. Suspendisse nec cursus elit. Duis ac eros eu ex commodo lacinia a ut metus. Maecenas laoreet viverra sem eget egestas. Mauris facilisis felis neque, eu sagittis odio porttitor.</p>
                    </div>


                </div>
            </div>

            <div className='initiation-global'>
            <div className='initiation'>
                    <img src="/gros-logo-pour-prez.png" alt="Petit logo Trallo" className='groslogo2' />
                    <div className='texte2'>
                        <p className='titre2'>Bienvenue sur Trallo !</p>
                        <p className='titre2'>Vous allez pouvoir travailler plus efficacement avec vos équipes</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus ornare ipsum, nec sagittis mauris efficitur eget. Sed nec dui porta arcu convallis mattis non quis leo. Pellentesque aliquam tellus at nibh finibus ullamcorper. Etiam non congue massa, et lobortis magna. Suspendisse nec cursus elit. Duis ac eros eu ex commodo lacinia a ut metus. Maecenas laoreet viverra sem eget egestas. Mauris facilisis felis neque, eu sagittis odio porttitor.</p>
                    </div>
            </div>
            <div  className='initiation-illus'>
                <img src="/illus.png" alt="illustration trello" />
            </div>
            </div>
        </div>

    );
};

export default AccueilView;