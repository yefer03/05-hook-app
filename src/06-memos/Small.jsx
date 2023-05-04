

import { memo } from 'react';


//El memo recibe como argumento el componente que se va a memorizar.
//este se coloca entre parentesis luego de colocar el memo
//

export const Small = memo(({ value }) => {

    console.log('Me volvi a generar');

    return (
        <small> { value } </small>
    );
});
