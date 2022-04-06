const Lenguajes = [ //BD tabla de lenguajes de programación en  sql server
                {
                    id: 1,
                    name: 'Javascript',
                    complejidad: 'Baja'
                },
                {
                    id: 2,
                    name: 'PHP',
                    complejidad: 'Media'
                },
                {
                    id: 3,
                    name: 'Python',
                    complejidad: 'media'
                },
                {
                    id: 4,
                    name: 'GO',
                    complejidad: 'Alta'
                },
                {
                    id: 5,// PK
                    name: 'Java',
                    complejidad: 'Alta'
                },
                
            ]; 


 exports.getLenguajes=()=>{
         return Lenguajes
 }