import {Route, Routes} from 'react-router'
import { IndexLayout } from '../layout/IndexLayout'
import { SchedulerComponent } from '../components/SchedulerComponent'
import { DrillDownComponent } from '../components/DrillDownComponent'

export function Routers() {

    return (
        <Routes>
            <Route path='/' element={<IndexLayout />}>
                <Route path='/recomendations' element={<SchedulerComponent />}></Route>
                <Route path='/recomendations/drilled-list' element={<DrillDownComponent />}></Route>
            </Route>
        </Routes>
    )

}