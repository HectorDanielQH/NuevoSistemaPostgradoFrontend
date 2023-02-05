import { Link } from "react-router-dom";
import React  from "react";
import '../../styles/navegador/style1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faGraduationCap, 
    faSheetPlastic,
    faUserLock,
    faUserFriends,
    faBars,
    faClose,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
function Navegador(){
    //estado de muestra menu
    const [showMenu, setShowMenu] = React.useState(false);
    const [showMenu2, setShowMenu2] = React.useState(false);
    const [showMenu3, setShowMenu3] = React.useState(false);
    const [showMenu5, setShowMenu5] = React.useState(false);
    //consultar pantalla
    //funcion para mostrar menu
    return(
        <div className="navegador">
            <div className="barras">
                <button className="boton" 
                    onClick={() => setShowMenu5(!showMenu5)}>
                    {showMenu5 ? (
                        <FontAwesomeIcon icon={faClose} style={{color:'white', backgroundColor:'rgb(200, 0, 0)',borderRadius:'50%', padding:'7px 10px', fontSize:'1rem', animation:'radar 1s infinite' }}/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </button>
            </div>
            <ul className={
                showMenu5 ? "navegador-mostrar navegador-contenedor" : "navegador-contenedor navegador-ocultar"
            }>
                <li>
                    <button
                        onClick={() => {
                            setShowMenu(!showMenu);
                            setShowMenu2(false);
                            setShowMenu3(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faHome} style={{margin:'0 10px' }} />
                        
                        Inicio
                        
                        {showMenu ? ( 
                            <FontAwesomeIcon icon={faClose} style={{margin:'0 10px', color:'white', backgroundColor:'rgb(200, 0, 0)',borderRadius:'50%', padding:'7px 10px', fontSize:'1rem', animation:'radar 1s infinite' }}/>

                        ) : (
                            <FontAwesomeIcon 
                                icon={
                                    faChevronDown
                                }
                                style={{margin:'0 10px', color:'white', backgroundColor:'rgb(200, 0, 0)',borderRadius:'50%', padding:'7px 7px', fontSize:'1rem' }}/>
                        )}
                    </button>
                    <ul style={
                        showMenu ? {display:'block'} : {display:'none'}
                    }>
                        <li>
                            <Link to="/" onClick={
                                ()=>{
                                    setShowMenu(false);
                                    if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }

                                    //cambiar icono
                                }
                            }>
                                <FontAwesomeIcon icon={faHome} style={{margin:'0 10px' }} />Home</Link>
                        </li>
                        <li><Link to="/mensajedirector" onClick={
                            ()=>{
                                setShowMenu(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faBook} style={{margin:'0 10px' }}/>
                            Mensaje del Director de Postgrado</Link></li>
                        <li><Link to="/historiapostgrado" onClick={
                            ()=>{
                                setShowMenu(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faBook} style={{margin:'0 10px' }}/>
                            Historia de Postgrado</Link></li>
                        <li><a href="/reglamento.pdf" target={'_blank'} onClick={
                            ()=>{
                                setShowMenu(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faBook} style={{margin:'0 10px' }}/>
                            Normatividad</a></li>
                        <li><Link to="/consejoPostgrado" onClick={
                            ()=>{
                                setShowMenu(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faBook} style={{margin:'0 10px' }}/>
                                Consejo Directivo de Postgrado</Link></li>
                        <li style={{display:'none',width:'0px',height:'0px'}}>
                            <Link to="/areasfuncionales" onClick={
                                ()=>{
                                    setShowMenu(false);
                                    if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                                }
                            }>
                                <FontAwesomeIcon icon={faBook} style={{margin:'0 10px' }}/>
                                Áreas Funcionales de Postgrado
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <button onClick={() => {
                            setShowMenu2(!showMenu2);
                            setShowMenu(false);
                            setShowMenu3(false);
                        }}>
                        <FontAwesomeIcon icon={faGraduationCap} style={{margin:'0 10px' }} />
                        Programas de Postgrado
                        {showMenu2 ? (
                            <FontAwesomeIcon icon={faClose} style={{margin:'0 10px', color:'white', backgroundColor:'rgb(200, 0, 0)',borderRadius:'50%', padding:'7px 10px', fontSize:'1rem',animation:'radar 1s infinite' }}/>
                        ) : (
                            <FontAwesomeIcon 
                            icon={
                                faChevronDown
                            }
                            style={{margin:'0 10px', color:'white', backgroundColor:'rgb(200, 0, 0)',borderRadius:'50%', padding:'7px 7px', fontSize:'1rem' }}/>
                        )}
                    </button>
                    <ul style={
                        showMenu2 ? {display:'block'} : {display:'none'}
                    }>
                        <li><Link to="/AreaDeConocimiento/doctorados" onClick={
                            ()=>{
                                setShowMenu2(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faGraduationCap} style={{margin:'0 10px' }}/>
                            Doctorados</Link></li>
                        <li><Link to="/AreaDeConocimiento/maestrias" onClick={
                            ()=>{
                                setShowMenu2(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faGraduationCap} style={{margin:'0 10px' }}/>
                            Maestrías</Link></li>
                        <li><Link to="/AreaDeConocimiento/especialidades" onClick={
                            ()=>{
                                setShowMenu2(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faGraduationCap} style={{margin:'0 10px' }}/>
                            Especialidades</Link></li>
                        <li><Link to="/AreaDeConocimiento/diplomados" onClick={
                            ()=>{
                                setShowMenu2(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faGraduationCap} style={{margin:'0 10px' }}/>
                            Diplomados</Link></li>
                        <li><Link to="/AreaDeConocimiento/cursos" onClick={
                            ()=>{
                                setShowMenu2(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }>
                            <FontAwesomeIcon icon={faGraduationCap} style={{margin:'0 10px' }}/>  
                            Cursos</Link></li>
                    </ul>
                </li>
                <li>
                    <button onClick={() => {
                            setShowMenu3(!showMenu3);
                            setShowMenu(false);
                            setShowMenu2(false);
                        }}>
                        <FontAwesomeIcon icon={faSheetPlastic} style={{margin:'0 10px'}}/>
                        Requisitos y trámites
                        {showMenu3 ? (
                            <FontAwesomeIcon icon={faClose} style={{margin:'0 10px', color:'white', backgroundColor:'rgb(200, 0, 0)',borderRadius:'50%', padding:'7px 10px', fontSize:'1rem',animation:'radar 1s infinite' }}/>
                        ) : (
                            <FontAwesomeIcon 
                            icon={
                                faChevronDown
                            }
                            style={{margin:'0 10px', color:'white', backgroundColor:'rgb(200, 0, 0)',borderRadius:'50%', padding:'7px 7px', fontSize:'1rem' }}/>
                        )}
                    </button>
                    <ul style={
                        showMenu3 ? {display:'block'} : {display:'none'}
                    }>
                        <li><a href="/FormatoEmpastado.pdf" target={'_blank'} onClick={
                            ()=>{
                                setShowMenu3(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }><FontAwesomeIcon icon={faSheetPlastic} style={{margin:'0 0px', padding:'15px 25px'}}/>Formato de carátula y empastado</a></li>
                        <li><a href="/RequisitosConActa.pdf" target={'_blank'} onClick={
                            ()=>{
                                setShowMenu3(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }><FontAwesomeIcon icon={faSheetPlastic} style={{margin:'0 0px', padding:'15px 25px'}}/>Requisitos para trámites con acta</a></li>
                        <li><a href="/RequisitosSinActa.pdf" target={'_blank'} onClick={
                            ()=>{
                                setShowMenu3(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                            }
                        }><FontAwesomeIcon icon={faSheetPlastic} style={{margin:'0 0px', padding:'15px 25px'}}/>Requisitos para trámites sin acta, Fautapo</a></li>
                        <li><Link to="/" onClick={
                            ()=>{
                                setShowMenu3(false);
                                if(window.innerWidth <= 992){
                                        setShowMenu5(false);
                                    }
                                window.open('https://titulosvut.uatf.edu.bo/programaPostgrado');
                            }
                        }><FontAwesomeIcon icon={faSheetPlastic} 
                                            style={{
                                                margin:'0 0px', 
                                                padding:'15px 25px'
                                            }}
                        />Trámites títulos</Link></li>
                    </ul>
                </li>
                
                <li className="links-li">
                    <p onClick={
                        ()=>{
                            //abrir otra ventana en el navegador
                            window.open('http://postgradovirtual.uatf.edu.bo/campus2/', '_blank');
                        }
                    } className="links" style={{
                        //mano
                        cursor:'pointer'
                    }}>
                        <FontAwesomeIcon icon={faUserFriends} className="linkfontawesome"/>
                        Moodle
                    </p>
                </li>
                <li className="links-li">
                    <p onClick={
                        ()=>{
                            //abrir otra ventana en el navegador
                            window.open('https://administrativos.uatfpostgrado.edu.bo', '_blank');
                        }
                    }  className="links" style={{
                        //mano
                        cursor:'pointer'
                    }}>
                        <FontAwesomeIcon icon={faUserLock} className="linkfontawesome"/>
                        Administrativos
                    </p>
                </li>
            </ul>
        </div>
    );
}
export default Navegador;