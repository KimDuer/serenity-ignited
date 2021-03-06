import React, {useState} from 'react'
import Overview from './Overview'
import ReikiAdmin from './ReikiAdmin'
import SoapsAdmin from './SoapsAdmin'


const Dashboard = () => {

    const [active, setActive] = useState('reiki')

    
    const onClick = (e) => {
        if (e.target.innerHTML === 'Overview' && active !== 'overview') {
            setActive('overview')
        } else if (e.target.innerHTML === 'Serenity In Healing' && active !== 'reiki') {
            setActive('reiki')
        } else if (e.target.innerHTML === 'Serenity In Soaps' && active !== 'soaps') {
            setActive('soaps')
        }
    }
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={onClick}>Overview</button>
            <button onClick={onClick}>Serenity In Healing</button>
            <button onClick={onClick}>Serenity In Soaps</button>
            {active === 'overview' ? <Overview /> : null}
            {active === 'reiki' ? <ReikiAdmin /> : null}
            {active === 'soaps' ? <SoapsAdmin /> : null}
        </div>
    )
}

export default Dashboard