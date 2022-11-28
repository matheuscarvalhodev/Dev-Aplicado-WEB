import Styles from './Inicio.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Row, Input } from 'reactstrap'


export default function Login() {

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,

        }
        console.log(data)
    }

    return (
        <Row>
            <Col className={Styles.colCor}>
                <img src='DFCIVIL.png' className={Styles.src} />
            </Col>
            <Col>
                <form className={Styles.cardBody} onSubmit={onSubmit}>
                    <h3>LOGIN</h3>
                    <div className="mb-3">
                        <Input
                            name='email'
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            name='password'
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                            />
                            <label className={Styles.customControlLabel} htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button
                            type="submit"
                            className={Styles.btnColor}>
                            SIGN
                        </button>
                    </div>
                    <p className={Styles.dontAccont}>
                        Dont have an accont?
                    </p>
                </form>
            </Col>
        </Row>

    )
}