
function ListItem({ title, id, status }) {
    console.log(title)
    return (
        <div><h3 style={{color:"white"}}>{title}</h3></div>
    )
}

export {ListItem}