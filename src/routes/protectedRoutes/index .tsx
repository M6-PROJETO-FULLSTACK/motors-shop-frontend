import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet, useParams } from "react-router"
import { AuthContext } from "../../providers/AuthContext"
import api from "../../services/api"

const ProtectedRoute = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading){
        return <div>Loading...</div>
    }

    return user ? 
        <Outlet/> 
    :
        <Navigate to='/login' replace/>
}

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

export default ProtectedRoute