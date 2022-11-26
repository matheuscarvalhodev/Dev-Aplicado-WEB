import axios from 'axios';
import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import styles from './CadastroNoticia.module.css'

function CadastroNoticia() {
    const [formValues, setFormValues] = useState({})
    //---------------------------------
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log("***HandleInputChange ", name, value);
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log("HandleSubmit ", data);
        
        let titulo = data.tituloNoticia;
        let corpo = data.corpoDaNoticia
        axios.post("http://localhost:3000/noticias",{titulo,corpo})
    };



    //Upload de arquivo
    // const filesElement = useRef(null);

    // const sendFile = async () => {
    //     const dataForm = new FormData();
    //     for (const file of filesElement.current.files) {
    //         dataForm.append('file', file);
    //     }
    //     const res = await fetch(`http://localhost:3000`, {
    //         method: 'POST',
    //         body: dataForm,
    //     });
    //     const data = await res.json();
    //     console.log(data);
    // };
    // async function inputaDados(e){
    //     e.preventDefault();
    //     const dados = {

    //     }
    // }
   

    return (
        <form onSubmit={handleSubmit} className="container">
            {/* Título da página */}
            <h2 className={styles.tituloCadastroNoticia}>Cadastramento de notícias</h2>
            {/* Campo de título da notícia */}
            <div className={styles.corpo}>
                <div className='row'>
                    <div className="col-sm-2 linha2"><div className={styles.coluna1}>
                        <h3 className={styles.tituloNoticia}>Título</h3></div>
                    </div>
                    <div className="col-sm-9 linha1">
                        <div className={styles.coluna2}>
                            <input type="text" name="tituloNoticia" onChange={handleInputChange} value={formValues.tituloNoticia || ''} className="form-control bg-light" placeholder="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.corpo}>
                {/* Campo de corpo da notícia */}
                <div className='row'>
                    <div className="col-sm-2 linha2"><div className={styles.coluna1}>
                        <h3 className={styles.tituloNoticia}>Corpo do texto</h3></div>
                    </div>
                    <div className="col-sm-9 linha1">
                        <div className={styles.coluna2}>
                            <textarea name="corpoDaNoticia" value={formValues.corpoDaNoticia || ''} onChange={handleInputChange} className="form-control bg-light" id="exampleFormControlTextarea1" rows="10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.corpo}>
                {/* Escolher arquivo */}
                <div className='row'>
                    <div className="col-sm-2 linha2"><div className={styles.coluna1}>
                        <h3 className={styles.tituloNoticia}></h3></div>
                    </div>
                    <div className="col-sm-9 linha1">
                        <div className={styles.coluna2}>
                            <div className={styles.arquivoCampo}>
                                <input type="file" accept="image/*" />
                            </div>
                        </div>

                        <div className={styles.botaoSubmit}>
                            <button type="submit" className="btn btn-secondary btn-lg" >Publicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CadastroNoticia;