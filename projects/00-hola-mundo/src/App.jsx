import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    
    return (
        <section className='App'>
            <TwitterFollowCard userName="omar_loopezz">
                Omar Lopez 
            </TwitterFollowCard>
            <TwitterFollowCard  userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
        </section>
    )
}