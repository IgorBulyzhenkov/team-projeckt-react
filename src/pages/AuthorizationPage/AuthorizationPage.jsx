import s from './authorization.module.css'
// import cabbage from '../../../images/cabbage.svg'

import AuthForm from 'components/AuthForm'
import kapusta from '../../img/AuthorizationPage/kapusta.svg'


const AuthorizationPage = () => {


    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.authBox}>
                <div className={s.title}>
                    <img className={s.titleIcon} src={kapusta} alt="" />
                    <p className={s.text}>smart finance</p>
                </div>
                <AuthForm/>
                </div> 
                {/* <img className={s.cab} src={cabbage} alt="" /> */}
            </div>
        </section>
    )
}

export default AuthorizationPage