import styles from './Inicio.module.css';

export function Selection(props)
{
    return (
        <section class={styles.sect_item}>
            <p>{props.name}</p>
            
            <select>
                <option selected>Selecione</option>
                {props.select.map((item,index)=>{
                    return <option>{item}</option>
                })}
            </select>
        </section>
    );
}
