import axios from 'axios';
import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import styles from './CadastroNoticia.module.css'

//Firebase
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from './firebase';


function CadastroNoticia() {
    const [formValues, setFormValues] = useState({})

    const [imgURL, setImageURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');
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
        

        const titulo = data.tituloNoticia;
        const corpo = data.corpoDaNoticia;
        console.log(titulo)

        if ((titulo == '' || titulo == null) || (corpo == '' || corpo == null)) {
            alert("Nenhum campo pode ficar em branco!")
        }
        else {
            if ((image === null || image === '')|| image === undefined) {
                // const formData = new FormData(e.target);
                // const data = Object.fromEntries(formData);
                // console.log("HandleSubmit ", data);
                // const titulo = data.tituloNoticia;
                // const corpo = data.corpoDaNoticia;
                // const dataPublicacao = new Date();

                // axios.post("http://localhost:5000/noticias", { titulo, corpo, dataPublicacao })

                alert("Você precisa adicionar um arquivo de imagem!");
                // window.location.reload();
                return;
            }
            else {
                const storageRef = ref(storage, `images/${image.name}`)
                const uploadTask = uploadBytesResumable(storageRef, image)

                uploadTask.on(
                    "state_changed",
                    snapshot => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        setProgress(progress);
                    },
                    error => {
                        alert(error)
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(url => {
                            setImage(url)

                            const urlImagem = url;
                            const dataPublicacao = new Date();

                            axios.post("http://localhost:5000/noticias", { titulo, corpo, urlImagem, dataPublicacao })

                            alert("Notícia enviada!");
                            window.location.reload();
                        })
                    }
                )
            }
        }

    };

    console.log(image)

    return (
        <div>
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
                                    <input type="file" accept="image/*" onChange={(e) => {
                                        e.preventDefault()
                                        setImage(e.target.files[0])
                                    }} />
                                </div>
                            </div>
                            <div className={styles.botaoSubmit}>
                                <button type="submit" className="btn btn-secondary btn-lg" >Publicar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {/* {!image && <progress value={progress} max="100px" />}
            {image && <img src={image} alt="Imagem" />} */}
        </div>

    )
}

export default CadastroNoticia;