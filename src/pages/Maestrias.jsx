//importar axios
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/programas/cards.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Imagen from '../images/uatfpostgrado.webp';
import ReactHowler from 'react-howler'
import Audio from '../audio/maestrias.mp3'
function Maestrias(){
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://administrativos.uatfpostgrado.edu.bo/api/maestrias')
        .then((response) => {
            setCursos(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);
    return(
        <div className='contenedorprograma'>
            <ReactHowler
                src={Audio}
                playing={true}
                loop={false}
            />
            <h1>MAESTRIAS</h1>
            {
                loading ? 
                <div className='cargandoprograma'>
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
                : 
                cursos.length !== 0 ?
                    <div className='contenedorcard'>
                        {cursos.map((curso) => {
                            return(
                                <div key={
                                    curso.id
                                }>
                                    <div className='cardprograma'>
                                        <LazyLoadImage src={
                                            'https://administrativos.uatfpostgrado.edu.bo/'+curso.imagen
                                        } alt="imagen" effect="blur"
                                        placeholderSrc={
                                            <Imagen />
                                        }
                                        />
                                        <h2 className='cardtituloprograma'>
                                            {curso.nombrePrograma}
                                        </h2>
                                        <div className='cardcontenedorbotoninscripcion'>
                                            <div>
                                                <Link to={
                                                    '/maestrias/'+curso.id
                                                }>
                                                    {'Inscribirse'}
                                                    <ion-icon name="arrow-forward"></ion-icon>
                                                </Link>
                                                <Link to={
                                                    '/maestrias/'+curso.id
                                                }>
                                                    {'Más información'}
                                                    <ion-icon name="arrow-forward"></ion-icon>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='cardredessocialesprograma'>
                                            <a style={{
                                                color: 'black'
                                            }} href={curso.facebook} target="_blank" rel="noreferrer">
                                                <ion-icon name="logo-facebook"></ion-icon>
                                            </a>
                                            <a style={{
                                                color: 'black'
                                            }} href={curso.instagram} target="_blank" rel="noreferrer">
                                                <ion-icon name="logo-instagram"></ion-icon>
                                            </a>
                                            <a style={{
                                                color: 'black'
                                            }} href={curso.twitter } target="_blank" rel="noreferrer">
                                                <ion-icon name="logo-twitter"></ion-icon>
                                            </a>
                                        </div>
                        
                                    </div>
                                </div>
                            );
                        })
                        ||
                            <Skeleton
                                type="circle" 
                            />
                        }
                    </div>
                :
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        height: '50vh',
                        color: 'rgb(178,0,0)',
                        fontSize: '2rem'
                    }}
                >
                    <h2>
                        {'No hay Maestrias disponibles'}
                    </h2>
                </div>
            }
        </div>
    );
}
export default Maestrias;