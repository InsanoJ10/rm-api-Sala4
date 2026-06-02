import s from './card.module.css'


export const Card = (props) => {
    return(
        <>
        <img src={props.imagem} alt={props.nome} />
        <p>Name: {props.nome}</p>
        <p>Species: {props.especie}</p>
        <p>Origin: {props.origem}</p>
         </>
           
    )
}