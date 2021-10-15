import Avatar from "./Avatar";
import {ComentList} from "./Coments";
function Post() {
    return <div style={{ border: 1, borderColor: "black", borderStyle: "solid ", margin: 20, padding: 10, backgroundColor: "white" }} >
        <Avatar />

        Estou muito feliz em estar aqui!!!
        <ComentList />

    </div>


}

export default Post;