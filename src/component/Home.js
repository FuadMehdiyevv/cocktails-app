import { useOutletContext } from "react-router-dom"
import List from "./List"
import Random from "./Random"


function Home() {
    const onShow = useOutletContext()
    return (
        <>
            <Random />
            <List onShow={onShow} />
        </>
    )
}

export default Home