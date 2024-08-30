// La idea es recorrer el rango de 1 a n 
// verificando que las combinaciones del array se enceuntran ahi
function minPatches(nums: number[], n: number): number {
    // Requerimos un apuntador, una variable para los numeros agregados y un indice
    let prompter: number = 1;
    let numsAdded: number = 0;
    let index: number = 0;

    // Mientras estemos en el arreglo
    while(prompter <= n){
        // Aqui verificamos que el numero que estamos viendo recorriendo el arreglo se 
        // encuentra en nuestro rango de [1 a n]
        if(nums[index] <= prompter)
        {
            // Se aumenta el apuntador con el valor correspondiente al indice
            // que estamos revisando en nuestra lista de numeros
            // (Esto se hace para que nuestro apuntador tenga mayor rango de alcance,
            // sin salirse del rango de [1 a n], en caso contrario habremos terminado 
            // porque ya no cumpliria el while inicial. Y se aumenta el indice para 
            // verificar el siguiente numero de la lista nums)
            prompter += nums[index];
            index++;
        }
        // En caso contrario, si el valor que estamos verificando en el arreglo es mayor
        // al apuntador significa que no hay un valor existente en el arreglo que 
        // satisfaga al valor que apunta el rango [1 a n], eso significa que se requiere 
        // agregar un numero al arreglo, pero como no es estrictamente necesario, 
        // porque se solicita la cantidad de números potencialmente agregados solo 
        // llevamos la cuenta de los números añadidos.
        // El apuntador ahora se suma a si mismo (o se multiplica x2), con esto nos 
        // aseguramos que el apuntador está en algun valor que existe en el rango [1 a n],
        // en caso de que no exista hay dos opciones: 
        // 1.- Cae denuevo en esa seccion de codigo y se agrega un nuevo valor.
        // 2.- Se sale del rango porque el apuntador es mayor a n y se termina el ciclo   
        else
        {
            prompter += prompter;
            numsAdded++;
        }
    }

    return numsAdded;
};
