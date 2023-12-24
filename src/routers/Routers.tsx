import {Route, Routes} from 'react-router'
import { IndexLayout } from '../layout/IndexLayout'

export function Routers() {

    return (
        <Routes>
            <Route path='/' element={<IndexLayout />}>
                    
            </Route>
        </Routes>
    )

}