import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthContext } from "../../providers/AuthContext"

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

export default ProtectedRoute