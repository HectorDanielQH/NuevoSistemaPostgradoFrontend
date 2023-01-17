import '../styles/secciones/MensajeDirector/mensajeDirector.css';
import DirectorPostgrado from '../images/DirectorPostgrado.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function MensajeDirector() {
  useEffect(() => {
    AOS.init( {duration: 1000} );
    AOS.refresh();
  }, []);
  return (
    <div className="MensajeDirector">
      <h1 style={{
        color: '#00255c',
        fontweight: '300',
      }} data-aos="zoom-in">MENSAJE DEL DIRECTOR</h1>
      <p style={{
        color: '#00255c',
        fontweight: '100',
      }} data-aos="zoom-in-up">
        La Universidad Autónoma Tomás Frías de Potosí, 
        comprometida con la formación de recursos humanos
        del más alto nivel que, con sentido ético, contribuyan
        a la solución de problemas regionales, departamentales,
        nacionales y fomenta el bienestar de su sociedad,
        ofrece una sólida formación a través de sus diversos
        programas de postgrado. La Universidad Autónoma Tomás
        Frías de Potosí está edificando una nueva visión, a
        partir de su experiencia de cara a las nuevas realidades
        y necesidades del contexto, un postgrado con identidad
        y de calidad, para lograr el postgrado que todos
        queremos con sus dos significados, el postgrado que
        deseamos alcanzar y el postgrado que valoramos,
        respetamos y cuidamos.Nos estamos esforzando
        constantemente para mantener el justo equilibrio entre
        la reproducción de la actividad académica existente y
        la respuesta efectiva a las necesidades de la sociedad,
        brindando una formación flexible e interdisciplinaria,
        para contribuir a partir de la investigación,
        especialización e innovación, al avance en la producción
        de conocimiento y su aplicación para el desarrollo de
        los pueblos.Por ello, la iniciativa de esta Dirección
        de Postgrado es de trabajar en una articulación del
        grado y postgrado con las doce Unidades de Postgrado
        Facultativas de nuestra Universidad, por ejemplo, y de
        avanzar hacia una mayor integración entre sus programas,
        enriqueciendo la oferta educativa de los estudiantes de
        la UATF. Asimismo, desarrollar programas de formación
        continua que permita fortalecer las competencias
        profesionales a todo nivel.Agradecer en nombre de la
        Universidad Autónoma Tomás Frías a los docentes de
        postgrado, que entregan su saber con generosidad, al
        equipo técnico y coordinadores que apoyan con eficiencia
        la marcha de los programas y a los alumnos y alumnas que
        se integran a esta comunidad para aprender, crear y aplicar.
        Finalmente, la Dirección de Postgrado de la UATF además,
        busca contribuir contigo al logro de una sociedad más libre,
        solidaria, justa, incluyente, productiva y pacífica,
        por ello nos interesa tu formación con calidad humana e
        intelectual, en el mayor servicio a los demás. 
        Desde la Dirección de Postgrado nos comprometemos a
        trabajar con dedicación para ayudarles a cumplir con las
        exigentes metas que se han trazado.Bienvenidos a la
        Dirección de Postgrado de la U.A.T.F.
        <br />
        <h3 className='pieMensaje' data-aos="flip-up">
            <LazyLoadImage src={DirectorPostgrado} alt="DirectorPostgrado" effect="blur" 
            placeholderSrc={DirectorPostgrado}
            />
            <p>
              M.Sc. Ing. Gonzalo Fernando Ramírez Cala
                <br />
                DIRECTOR DE POSTGRADO UATF a.i.
            </p>
        </h3>
      </p>
    </div>
  );
}
export default MensajeDirector;