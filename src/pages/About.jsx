const About = () => {
  return (
    <div id='home-div' className='container'>
      <h1>About</h1>
      <p>Plataforma de búsqueda de péliculas y filtrado por calificaciones de usuarios consumiendo la API de IMDB
        El diseño es libre.
      </p>
      <p>La API que debes utilizar es:
        https://developer.imdb.com/
        La documentación más completa la puedes consultar en:
      </p>
      <p>Ver y consultar películas
        Mostrar detalles de la película seleccionada
        Filtrar películas por calificaciones de usuarios.
        PLUS: Paginar los resultados de la consulta de películas
        Debe desplegarse la aplicación en una dirección de internet.
      </p>
      <p>Debe utilizar colores agradables al usuario
        El proyecto debe tener una barra de navegación y un footer con tus datos de contacto como desarrollad@r
        Incluir mensajes de error en caso de que fallen las consultas a la API
        El diseño de la página debe ser responsivo
      </p>
    </div>
  )
}

export default About
