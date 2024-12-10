import { useParams } from "react-router-dom"


const SearchPage = () => {
    const params = useParams();
    alert(params.text);
    return (
        <div>SearchPage</div>
    )
}

export default SearchPage