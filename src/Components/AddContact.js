import css from './AddContact.module.css'
const AddContact = props =>{

    const fetchHandler = async () => {
        try {
            const details = await fetch('https://contactdata-9ea78-default-rtdb.firebaseio.com/data.json');
            const response = await details.json();
            console.log(response);
            const tempdata = [];
            for(const key in response ){
                tempdata.push({
                    id:key,
                    name:response[key].name,
                    number:response[key].number,
                })
            }
            // const data = response.data.map(Data=>{
            //     return {
            //         id:Data.id,
            //         name:Data.name,
            //         number:Data.number,
            //         photo:Data.photo,
            //     }
            // })
            props.passData(tempdata);
        } catch (error) {
            console.error('Error fetching contact details:', error);
        }
    };

    return (
        <div className={css.main}>
            <button>Add Contact</button>
            <button onClick={fetchHandler}>Fetch Contact</button>
        </div>
    )
}

export default AddContact;