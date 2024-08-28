import css from './ContactForm.module.css';
import { useRef } from 'react';
import { useSnackbar } from 'notistack';

const ContactForm = (props) => {

    const nameref = useRef('');
    const numref = useRef('');
    const {enqueueSnackbar} = useSnackbar();

    const SubmitHandler = (event)=>{
    event.preventDefault();
    if(nameref.current.value === '' || numref.current.value===''){
        enqueueSnackbar("Fill The Form Please!",{
            variant: "warning",
            anchorOrigin:{
                vertical:"top",
                horizontal:"right"
            }
        })
        return;
    }
    if( numref.current.value.length<10){
        enqueueSnackbar("Fill The Appropriate Number!",{
            variant: "warning",
            anchorOrigin:{
                vertical:"top",
                horizontal:"right"
            }
        })
        return;
    }
    if (!/^\d+$/.test(numref.current.value)) {
        enqueueSnackbar("Please enter a valid number!", {
            variant: "warning",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right"
            }
        });
        return;
    }
    const contact = {
        name: nameref.current.value,
        number:numref.current.value,
    }
    nameref.current.value = '';
    numref.current.value = '';
    props.AddContact(contact);

    enqueueSnackbar("Contact Added Successfully",{
        variant:"success",
        anchorOrigin:{
            vertical:"top",
            horizontal:"right"
        }
    })
}
    return (
        <form className={css.main} onSubmit={SubmitHandler}>
           
            <div className={css.inputGroup}>
                <label htmlFor="name">Contact Name</label>
                <input id="name" type="text" placeholder="Eg: Awais Alam" ref = {nameref}/>
            </div>
            <div className={css.inputGroup}>
                <label htmlFor="num">Contact Number</label>
                <input id="num" type="text" placeholder="10 digits" ref={numref}/>
            </div>
            <button type="submit">+Save</button>
        </form>
    );
}

export default ContactForm;
