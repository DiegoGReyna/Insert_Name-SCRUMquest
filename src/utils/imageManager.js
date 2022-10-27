import guest1 from '../img/guest1.png'
import guest2 from '../img/guest2.png'
import guest3 from '../img/guest3.png'

export const imageManager = (imgNumber)=>{
  var aux = guest1;
  switch(imgNumber){
    case 1:{
      aux = guest1;
      break;
    }
    case 2:{
      aux = guest2;
      break;
    }
    case 3:{
      aux = guest3;
      break;
    }
  }
  return aux;
}
