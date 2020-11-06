export default function User(props) {

    let oneUserByIdUser = props.getOneUserByIdUser;


    console.log(props.item);
    let {id, name,  email} = props.item;
    return (
        <div>
            {id} - {name} - {email}
<div>
            <button onClick={ () => oneUserByIdUser(id) }>choose this</button>
</div>
        </div>);
}