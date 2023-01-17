import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../styles/botonesFooter/botonesFooter.css';
function Botones(){
    const navigate = useNavigate();
    return(
        <div className="botones-footer">
            <button className="boton" style={{
                background:"linear-gradient(90deg, rgb(151, 91, 0) 0%, rgb(228, 156, 0)  100%)"
            }} onClick={
                () => navigate('/doctorados')
            }>
                Doctorados</button>
            <button className="boton" style={{
                background:"linear-gradient(90deg, rgb(0, 33, 71) 0%, rgb(0, 74, 158) 100%)"
            }} onClick={
                () => navigate('/maestrias')
            }>
            Maestrías</button>
            <button className="boton" style={{
                background:"linear-gradient(90deg, rgb(0, 97, 13) 0%, rgb(43, 151, 0) 100%)",
            }} onClick={
                () => navigate('/especialidades')
            }>
            Especialidades</button>
            <button className="boton" style={{
                background:"linear-gradient(90deg, rgb(0, 109, 117) 0%, rgb(0, 163, 212) 100%)"
            }} onClick={
                () => navigate('/diplomados')
            }>
            Diplomados</button>
            <button className="boton" style={{
                background:"linear-gradient(90deg, rgb(160, 0, 0) 0%, rgb(214, 0, 0) 100%)",
            }} onClick={
                () => navigate('/cursos')
            }>
            Cursos</button>
        </div>        
    )
}
export default Botones;