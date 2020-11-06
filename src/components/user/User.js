export function User(props) {

    let {id,name,  email} = props.item;
    return (
        <div>
            {id} - {name} - {email}
        </div>);
}