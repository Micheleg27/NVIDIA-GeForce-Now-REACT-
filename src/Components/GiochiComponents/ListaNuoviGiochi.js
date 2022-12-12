import { Link } from "react-router-dom";

export default function ListaNuoviGiochi() {
    return (
        <div className="container-list">
            <h4><strong>GFN Thursday 17/11/2022</strong></h4>
            <ul className="lista-nuovi-giochi">
                <li className="li-lista-giochi">Ballads of Hongye (New release on <Link class="link-giochi" to="https://store.steampowered.com/app/1723560/Ballads_of_Hongye/?utm_source=nvidia&utm_campaign=geforce_now">Steam</Link>)</li>
                <li className="li-lista-giochi">Bravery and Greed (New release on <Link class="link-giochi" to="https://store.steampowered.com/app/1723560/Ballads_of_Hongye/?utm_source=nvidia&utm_campaign=geforce_now">Steam</Link>)</li>
                <li className="li-lista-giochi">TERRACOTTA (New release on <Link class="link-giochi" to="https://store.steampowered.com/app/748020/TERRACOTTA/?utm_source=nvidia&utm_campaign=geforce_now">Steam</Link> and <Link class="link-giochi" to="https://store.epicgames.com/it/p/terracotta-72cc62?utm_campaign=geforce_now&utm_source=nvidia">Epic Games</Link>)</li>
                <li className="li-lista-giochi">Warhammer 40,000: Darktide (New release pre-order beta access on <Link class="link-giochi" to="https://store.steampowered.com/app/1361210/Warhammer_40000_Darktide/?utm_source=nvidia&utm_campaign=geforce_now">Steam</Link>)</li>
                <li className="li-lista-giochi">Frozen Flame (New release on <Link class="link-giochi" to="https://store.steampowered.com/app/715400/Frozen_Flame/?utm_source=nvidia&utm_campaign=geforce_now">Steam</Link>, Nov. 17)</li>
                <li className="li-lista-giochi">Goat Simulator 3 (New release on <Link class="link-giochi" to="https://store.epicgames.com/en-US/p/goat-simulator-3?utm_campaign=geforce_now&utm_source=nvidia">Steam</Link>, Nov. 17)</li>
                <li className="li-lista-giochi">Nobody — The Turnaround (New release on <Link class="link-giochi" to="https://store.steampowered.com/app/1810580?utm_source=nvidia&utm_campaign=geforce_now">Steam</Link>, Nov. 17)</li>
                <li className="li-lista-giochi">Caveblazers (<Link class="link-giochi" to="https://store.steampowered.com/app/452060?utm_source=nvidia&utm_campaign=geforce_now">Steam</Link>)</li>
                <li className="li-lista-giochi">The Darkest Tales (<Link class="link-giochi" to="https://store.epicgames.com/en-US/p/the-darkest-tales-7d0dab?utm_campaign=geforce_now&utm_source=nvidia">Epic Games</Link>)</li>
                <li className="li-lista-giochi">The Tenants (<Link class="link-giochi" to="https://store.epicgames.com/en-US/p/the-tenants?utm_campaign=geforce_now&utm_source=nvidia">Epic Games</Link>)</li>
            </ul>
        </div>
    )
}