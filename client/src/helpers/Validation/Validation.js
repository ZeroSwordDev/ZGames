export const Validation = (game) => {
  const {
    name,
    description_raw,
    platforms,
    background_image,
    released,
    rating,
  } = game;


  let aux = '';
if(!name ) {
    aux = 'Name is required';
    return aux;
}else if(!description_raw) {
    aux = 'Description is required';
    return aux;
}else if(platforms.length === 0) {
    aux = 'one Platform is required';
    return aux;
}else if(!background_image){
    aux = 'background image is required';
    return aux;
}else if(!released){
    aux = 'Release is required';
    return  aux;
}else if(!rating ){
    aux = 'Rating is required';
    return  aux;
}else if( !Number(rating)){
    aux = 'Rating is Number 1 a 5 ';
    return aux
}else if( rating <= 0 || rating > 5){
    aux = 'Rating not negative  (Number 1 a 5) ';
    return aux
}


   
    return true

};


