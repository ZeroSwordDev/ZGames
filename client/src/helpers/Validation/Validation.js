export const Validation = (game) => {

   
        let errors = {};
  
        if (!game.name){
          errors.name = "El usuario no puede estar vacío";
          return errors;
        }else if (!game.description_raw){
          errors.desc = "La descripcion no puede estar vacío";
          return errors;
        }else  if (game.platforms.length === 0){
          errors.platforms = "Debe pertenecer a alguna plataforma";
          return errors;
        }else if (game.generos.length === 0){
          errors.platforms = "Debe tener a menos 1 genero";
          return errors;
        }else if ( !game.released ){
          errors.released = "Juego debe tener un fecha de lanzamiento";
          return errors;
        }else if(!game.rating  ) {
          errors.rating = "Debe tener una calificacion dentro del rango 1 al 5";
          return errors;
        }else if ( game.rating > 5 || game.rating < 0 ){
          errors.rating = "Rating no puede ser mas alto que 5 o menor que 0";
          return errors;
        }

     
        return  true

};


