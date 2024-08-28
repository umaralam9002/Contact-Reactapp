import css from './ContacList.module.css'
import ContactItem from './ContactItem'

const ContactList = ({data})=>{

    return (
        <ul className={css.main}>
            {data && data.length > 0 ?(
            data.map((item)=>(<ContactItem  key={item.id} name={item.name} num={item.number} />))):(<p>Please Fetch the Contacts</p>)}
        </ul>
    )

}
export default ContactList;