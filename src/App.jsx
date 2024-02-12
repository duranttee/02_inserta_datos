const persona = {
  nombre: 'Paola Estefanía Flores Durán',
  edad: 21,
  nacimiento: '15-03-2002',
  lugar_de_nacimiento: 'Tuxtepec, Oaxaca',
  profesion: 'Estudiante',
  pasatiempos: [
    'Escuchar música',
    'Leer',
    'Ver peliculas',
    'Hacer ejercicio',
    'Estar en la PC'
    ]
}


function App() {
  return (
    <>
    <div>
      <h1>Información Personal</h1>
      <hr />
      <ul>
      <li>Nombre: {persona.nombre}</li>
      <li>Edad: {persona.edad}</li>
      <li>Fecha de nacimiento: {persona.nacimiento}</li>
      <li>Lugar de nacimiento: {persona.lugar_de_nacimiento}</li>
      <li>Profesión: {persona.profesion}</li>
      <li>Pasatiempos:
        <ul>
          {
          persona.pasatiempos.map((pasatiempos) => {
          return <li key= {pasatiempos}>
          {pasatiempos}
          </li>    
          })
          }

          {/*
        <li>{persona.pasatiempos[0]}</li>
        <li>{persona.pasatiempos[1]}</li>
        <li>{persona.pasatiempos[2]}</li>
        <li>{persona.pasatiempos[3]}</li> */}
        </ul>
      </li>
      </ul>
    </div>
        
    </>
  )
}

export default App