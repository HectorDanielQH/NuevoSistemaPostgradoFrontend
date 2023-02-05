import React from 'react';
import {useParams} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImagenPostgrado from '../images/uatfpostgrado.webp';
import ImagenFacultadDeArtes from '../images/AreaConocimientoImages/ARTES.webp';
import ImagenAgricolas from '../images/AreaConocimientoImages/AGRICOLAS.webp';
import ImagenCienciasEconomicas from '../images/AreaConocimientoImages/CIENCIASECONOMICAS.webp';
import ImagenCienciasPuras from '../images/AreaConocimientoImages/CIENCIASPURAS.webp';
import ImagenCienciasSociales from '../images/AreaConocimientoImages/CIENCIASSOCIALES.webp';
import ImagenDerecho from '../images/AreaConocimientoImages/DERECHO.webp';
import ImagenIngenieria from '../images/AreaConocimientoImages/INGENIERIA.webp';
import ImagenGeologica from '../images/AreaConocimientoImages/GEOLOGICA.webp';
import ImagenMinera from '../images/AreaConocimientoImages/MINERA.webp';
import ImagenTecnologica from '../images/AreaConocimientoImages/TECNOLOGICA.webp';
import ImagenCienciasSalud from '../images/AreaConocimientoImages/CIENCIASDESALUD.webp';
import ImagenMedicina from '../images/AreaConocimientoImages/uatf.webp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/AreaDeConocimiento/Areaconocimiento.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function AreaDeConocimiento(){
    const { programa } = useParams();
    const navigate = useNavigate();
    const [curso, setCurso] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://administrativos.uatfpostgrado.edu.bo/api/'+programa+'contar')
        .then((response) => {
            setCurso(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [
        programa
    ]);

    window.scrollTo(0, 0);
    return (
        <div className='contenedorprograma'>
            <h1 className='
                tituloprogramaselector
            '>{programa.toUpperCase()}</h1>
            <br />
            <span>
                <p style={{
                    textAlign:'center',
                    weight:'bold',
                    fontSize:'2rem',
                    color:'rgb(200, 0, 0, 0.95)',
                    textShadow:'0px 0px 10px rgb(200, 0, 0, 0.5)'
                }}>
                    Seleccione cualquier facultad para ver los programas de postgrado que ofrece.
                </p>
            </span>
        {
            !loading ?
            <div className='cardsseparacionareasconocimientos'>
                <h2 className='tituloareaconocimiento'>
                    PROGRAMAS DE DIRECCIÓN DE POSTGRADO
                </h2>
                <div className='cardsfacultades'>
                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}

                        onClick={()=>{
                            document.querySelector('.fondoemergentefacultad').style.display='flex';
                        }}
                    >
                        <LazyLoadImage src={ImagenPostgrado}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenPostgrado}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Dirección de Postgrado</h2>
                    </div>
                </div>


                
                <h2 className='tituloareaconocimiento'>
                    PROGRAMAS DEL ÁREA DEL CONOCIMIENTO CIENCIAS FÍSICO - MATEMÁTICAS Y DE LA INGENIERÍA
                </h2>


                <div className='fondoemergentefacultad'>
                    <div className='recuadro'>
                        <div>
                            <h1>Dirección de Postgrado</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={1}
                                onClick={()=>{
                                    navigate(`/${programa}/5`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Dirección de Postgrado {curso.map((item)=>{
                                        if(item.carrera_id === 5){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}
                                </li>
                            <li
                                key={2}
                                onClick={()=>{
                                    navigate(`/${programa}/10`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Ingeniería de Sistemas {curso.map((item)=>{
                                        if(item.carrera_id === 10){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}
                                </li>
                            <li
                                key={3}
                                onClick={()=>{
                                    navigate(`/${programa}/47`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Odontología {curso.map((item)=>{
                                        if(item.carrera_id === 47){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}
                                
                                </li>
                        </ul>
                    </div>
                </div>

                <div className='fondoemergentefacultad1'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ingeniería</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad1').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={4}
                                onClick={()=>{
                                    navigate(`/${programa}/8`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Ingeniería Civil {curso.map((item)=>{
                                        if(item.carrera_id === 8){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={5}
                                onClick={()=>{
                                    navigate(`/${programa}/43`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Construcciones Civiles  {curso.map((item)=>{
                                        if(item.carrera_id === 43){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={6}
                                onClick={()=>{
                                    navigate(`/${programa}/15`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Ing. en Geodesia y Topografía {curso.map((item)=>{
                                        if(item.carrera_id === 15){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>
                

                <div className='fondoemergentefacultad2'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ingeniería Minera</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad2').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={7}
                                onClick={()=>{
                                    navigate(`/${programa}/19`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Ingeniería Minera {curso.map((item)=>{
                                        if(item.carrera_id === 19){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={8}
                                onClick={()=>{
                                    navigate(`/${programa}/9`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Ing. de  Procesos de Mat. Primas Min. {curso.map((item)=>{
                                        if(item.carrera_id === 9){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>


                <div className='fondoemergentefacultad3'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ingeniería Geológica</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad3').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={9}
                                onClick={()=>{
                                    navigate(`/${programa}/16`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Ingeniería Geológica {curso.map((item)=>{
                                        if(item.carrera_id === 16){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={10}
                                onClick={()=>{
                                    navigate(`/${programa}/11`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Ingeniería del Medioambiente {curso.map((item)=>{
                                        if(item.carrera_id === 11){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>



                <div className='fondoemergentefacultad4'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ingeniería Tecnológica</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad4').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={10}
                                onClick={()=>{
                                    navigate(`/${programa}/12`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Ingeniería Eléctrica {curso.map((item)=>{
                                        if(item.carrera_id === 12){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={11}
                                onClick={()=>{
                                    navigate(`/${programa}/17`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Ingeniería Mecánica {curso.map((item)=>{
                                        if(item.carrera_id === 17){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={12}
                                onClick={()=>{
                                    navigate(`/${programa}/44`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Mecanica Automotriz {curso.map((item)=>{
                                        if(item.carrera_id === 44){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={13}
                                onClick={()=>{
                                    navigate(`/${programa}/18`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Ingeniería Mecatrónica {curso.map((item)=>{
                                        if(item.carrera_id === 18){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={14}
                                onClick={()=>{
                                    navigate(`/${programa}/13`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Ingeniería Electrónica {curso.map((item)=>{
                                        if(item.carrera_id === 13){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>


                <div className='fondoemergentefacultad5'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ciencias Puras</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad5').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={15}
                                onClick={()=>{
                                    navigate(`/${programa}/33`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Química {curso.map((item)=>{
                                        if(item.carrera_id === 33){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={16}
                                onClick={()=>{
                                    navigate(`/${programa}/1`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Ingeniería Informática {curso.map((item)=>{
                                        if(item.carrera_id === 1){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={17}
                                onClick={()=>{
                                    navigate(`/${programa}/34`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Estadística {curso.map((item)=>{
                                        if(item.carrera_id === 34){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={18}
                                onClick={()=>{
                                    navigate(`/${programa}/3`);
                                }}
                            >    
                                <LazyLoadImage src={ImagenPostgrado}
                                        className='imagendeareasconocimiento'
                                        effect="blur"
                                        alt="imagen" 
                                        placeholderSrc={ImagenPostgrado}
                                        height='60px' 
                                    />
                                Matemática {curso.map((item)=>{
                                        if(item.carrera_id === 3){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={19}
                                onClick={()=>{
                                    navigate(`/${programa}/35`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Física {curso.map((item)=>{
                                        if(item.carrera_id === 35){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>


                
                <div className='fondoemergentefacultad6'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Medicina </h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad6').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={20}
                                onClick={()=>{
                                    navigate(`/${programa}/46`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Medicina {curso.map((item)=>{
                                        if(item.carrera_id === 46){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>

                <div className='fondoemergentefacultad7'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ciencias de la Salud</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad7').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={21}
                                onClick={()=>{
                                    navigate(`/${programa}/4`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Enfermeria {curso.map((item)=>{
                                        if(item.carrera_id === 4){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={22}
                                onClick={()=>{
                                    navigate(`/${programa}/45`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Enfermeria - Villazon {curso.map((item)=>{
                                        if(item.carrera_id === 45){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>


                <div className='fondoemergentefacultad8'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ciencias Agricolas y Pecuarias</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad8').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={23}
                                onClick={()=>{
                                    navigate(`/${programa}/7`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Ingeniería Agropecuaria - Villazon {curso.map((item)=>{
                                        if(item.carrera_id === 7){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={24}
                                onClick={()=>{
                                    navigate(`/${programa}/23`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Ingeniería Agroindustrial {curso.map((item)=>{
                                        if(item.carrera_id === 23){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={25}
                                onClick={()=>{
                                    navigate(`/${programa}/24`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Med. Veterinaria y Zootecnia - Tupiza {curso.map((item)=>{
                                        if(item.carrera_id === 24){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={26}
                                onClick={()=>{
                                    navigate(`/${programa}/14`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Ingeniería en Desarrollo Rural {curso.map((item)=>{
                                        if(item.carrera_id === 14){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={27}
                                onClick={()=>{
                                    navigate(`/${programa}/6`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Ingeniería Agronómica {curso.map((item)=>{
                                        if(item.carrera_id === 6){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>

                

                <div className='fondoemergentefacultad9'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Derecho</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad9').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={28}
                                onClick={()=>{
                                    navigate(`/${programa}/2`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Derecho {curso.map((item)=>{
                                        if(item.carrera_id === 2){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={29}
                                onClick={()=>{
                                    navigate(`/${programa}/42`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Derecho - Uncia {curso.map((item)=>{
                                        if(item.carrera_id === 42){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>


                <div className='fondoemergentefacultad10'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ciencias Economicas, Financieras y Administrativas</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad10').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={30}
                                onClick={()=>{
                                    navigate(`/${programa}/27`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Economia- Uyuni {curso.map((item)=>{
                                        if(item.carrera_id === 27){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={31}
                                onClick={()=>{
                                    navigate(`/${programa}/28`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Contabilidad y Finanzas {curso.map((item)=>{
                                        if(item.carrera_id === 28){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={32}
                                onClick={()=>{
                                    navigate(`/${programa}/29`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Contaduría Pública - Tupiza {curso.map((item)=>{
                                        if(item.carrera_id === 29){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={33}
                                onClick={()=>{
                                    navigate(`/${programa}/20`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Administración de Empresas {curso.map((item)=>{
                                        if(item.carrera_id === 20){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={34}
                                onClick={()=>{
                                    navigate(`/${programa}/30`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Economia {curso.map((item)=>{
                                        if(item.carrera_id === 30){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={35}
                                onClick={()=>{
                                    navigate(`/${programa}/31`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Economía - Uncía {curso.map((item)=>{
                                        if(item.carrera_id === 31){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={36}
                                onClick={()=>{
                                    navigate(`/${programa}/32`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Auditoria - Contaduria Pública {curso.map((item)=>{
                                        if(item.carrera_id === 32){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>
                

                <div className='fondoemergentefacultad11'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Artes</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad11').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={37}
                                onClick={()=>{
                                    navigate(`/${programa}/21`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Artes Musicales {curso.map((item)=>{
                                        if(item.carrera_id === 21){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={38}
                                onClick={()=>{
                                    navigate(`/${programa}/22`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Artes Plásticas {curso.map((item)=>{
                                        if(item.carrera_id === 22){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>



                <div className='fondoemergentefacultad12'>
                    <div className='recuadro'>
                        <div>
                            <h1>Facultad de Ciencias Sociales y Humanisticas</h1>
                            <button  onClick={
                                ()=>{
                                    document.querySelector('.fondoemergentefacultad12').style.display='none';
                                }
                            }>X</button>
                        </div>
                        <ul>
                            <li
                                key={39}
                                onClick={()=>{
                                    navigate(`/${programa}/37`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Turismo - Uyuni {curso.map((item)=>{
                                        if(item.carrera_id === 37){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={40}
                                onClick={()=>{
                                    navigate(`/${programa}/38`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Linguistica e Idiomas {curso.map((item)=>{
                                        if(item.carrera_id === 38){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={41}
                                onClick={()=>{
                                    navigate(`/${programa}/40`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Trabajo Social - Uncia {curso.map((item)=>{
                                        if(item.carrera_id === 40){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={42}
                                onClick={()=>{
                                    navigate(`/${programa}/39`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Trabajo Social {curso.map((item)=>{
                                        if(item.carrera_id === 39){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={43}
                                onClick={()=>{
                                    navigate(`/${programa}/36`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Turismo {curso.map((item)=>{
                                        if(item.carrera_id === 36){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                            <li
                                key={44}
                                onClick={()=>{
                                    navigate(`/${programa}/41`);
                                }}
                            >
                                <LazyLoadImage src={ImagenPostgrado}
                                    className='imagendeareasconocimiento'
                                    effect="blur"
                                    alt="imagen" 
                                    placeholderSrc={ImagenPostgrado}
                                    height='60px' 
                                />
                                Linguistica e Idiomas - Uyuni {curso.map((item)=>{
                                        if(item.carrera_id === 41){
                                            return <span style={{color:'red'}}>{'->'+ item.total + ' '+ programa + ' disponible(s) '}</span>;
                                        }
                                        else{
                                            return null;
                                        }
                                    })}</li>
                        </ul>
                    </div>
                </div>



                
                <div className='cardsfacultades'>
                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad1').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenIngenieria}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenIngenieria}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ingenieria</h2>
                    </div>
                    
                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad2').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenMinera}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenMinera}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ingenieria Minera</h2>
                    </div>

                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad3').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenGeologica}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenGeologica}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ingenieria Geologica</h2>
                    </div>   

                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad4').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenTecnologica}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenTecnologica}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ingenieria Tecnologica</h2>
                    </div>

                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad5').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenCienciasPuras}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenCienciasPuras}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ciencias Puras</h2>
                    </div>                 
                </div>


                <h2 className='tituloareaconocimiento'>
                PROGRAMAS DEL ÁREA DEL CONICIMIENTO CIENCIAS BIOLÓGICAS Y DE LA SALUD
                </h2>
                <div className='cardsfacultades'>
                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad6').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenMedicina}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenMedicina}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Medicina</h2>
                    </div>

                    
                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}

                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad7').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenCienciasSalud}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenCienciasSalud}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ciencias de la Salud</h2>
                    </div>

                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad8').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenAgricolas}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenAgricolas}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ciencias Agricolas y Pecuarias</h2>
                    </div>
                </div>
                


                <h2 className='tituloareaconocimiento'>
                PROGRAMAS DEL ÁREA DEL CONOCIMIENTO CIENCIAS SOCIALES
                </h2>
                <div className='cardsfacultades'>
                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad9').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenDerecho}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenDerecho}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Derecho</h2>
                    </div>

                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad10').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenCienciasEconomicas}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenCienciasEconomicas}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ciencias Economicas, Financieras y Administrativas</h2>
                    </div>    
                </div>
                <h2 className='tituloareaconocimiento'>
                PROGRAMAS DEL ÁREA DEL CONOCIMIENTO HUMANIDADES Y DE LAS ARTES
                </h2>
                <div className='cardsfacultades'>
                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad11').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenFacultadDeArtes}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenFacultadDeArtes}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Artes</h2>
                    </div>
                    
                    <div className='cardfacultad' style={{
                        cursor:'pointer'
                    }}
                    onClick={
                        ()=>{
                            document.querySelector('.fondoemergentefacultad12').style.display='flex';
                        }
                    }
                    >
                        <LazyLoadImage src={ImagenCienciasSociales}
                            className='imagendeareasconocimiento'
                            effect="blur"
                            alt="imagen" 
                            placeholderSrc={ImagenCienciasSociales}
                            height='200px' 
                        />
                        <h2 className='cardtitulofacultad'>Facultad de Ciencias Sociales y Humanisticas</h2>
                    </div>
                </div>   
            </div>
            :
            <div className='cargandoprograma'>
                <div className='cargandoprograma'>
                        <div className="spinner">
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                        </div>
                </div>
            </div>
            ||
            <Skeleton />
        }
        </div>
    )
}
export default AreaDeConocimiento;