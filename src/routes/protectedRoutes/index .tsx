import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet, useParams } from "react-router"
import { AuthContext } from "../../providers/AuthContext"
import api from "../../services/api"

export const ProtectedRouteProfile = () => {
    const { user } = useContext(AuthContext)
    
    return user!.type ? 
        <Outlet/> 
    :
        <Navigate to='/home' replace/>
}

export const ProtectedRouteAnaunces = () => {
    const [typeUser, setTypeUser] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        api.get(`users/${id}`)
        .then(res => setTypeUser(res.data[0].type))
        .catch(err => {
            console.log(err);
        });
    }, [])

    return (
        <span>
            {
            typeUser ? 
                <Outlet/> 
            :
                <Navigate to='/home' replace/>
        }
        </span>
    )

}
