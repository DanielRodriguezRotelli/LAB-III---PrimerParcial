import {LeerData} from "./localStorage.js";

const monstruos = LeerData("monsterRotelli");
const $articulos = document.getElementById("articulos");

if(monstruos.length)
{
    monstruos.forEach(monstruo => 
        {
            $articulos.insertAdjacentHTML("beforeend",
            `<article>
                <p>Nombre: ${monstruo.nombre}</p>
                <p><i class="fa-solid fa-mask"></i> Alias: ${monstruo.alias}</p>
                <p><i class="fa-solid fa-shield-halved"></i> Defensa: ${monstruo.defensa}</p>
                <p><i class="fa-solid fa-ghost"></i> Miedo: ${monstruo.miedo}</p>
                <p><i class="fa-solid fa-skull"></i> Tipo: ${monstruo.tipo}</p>
            </article>`);
        });
}