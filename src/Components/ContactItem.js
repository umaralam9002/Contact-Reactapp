import css from './ContactItem.module.css'
const ContactItem = ({ name, num })=>{
    return <li className={css.contact}>
            <img src='https://api.dicebear.com/9.x/micah/svg' alt= 'avatar'/>
            <div className={css.description}>
                <h2>{name}</h2>
                <b>{num}</b>
            </div>
    </li>
}

export default ContactItem;