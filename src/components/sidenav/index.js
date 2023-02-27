import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div>
         <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                <li class="menu-title">User</li>
                    <li class="active">
                        <Link to="/dashboard"><i class="menu-icon fa fa-laptop"></i>Dashboard </Link>
                    </li>
                    <li>
                        <Link to="/transactions" ><i class="menu-icon fa fa-cogs"></i>Transactions </Link>
                    </li>
                    <li>
                        <Link><i class="menu-icon fa fa-puzzle-piece"></i>Statements </Link>
                    </li>
                    <li>
                        <Link to="/billpayment"><i class="menu-icon fa fa-id-badge"></i>Bill Payment</Link>
                    </li>
                    <li>
                        <Link><i class="menu-icon fa fa-id-badge"></i>User List </Link>
                    </li>
                    <li>
                        <Link><i class="menu-icon fa fa-id-card-o"></i>BBPS </Link>
                    </li>
                    <li>
                        <Link><i class="menu-icon fa fa-spinner"></i>Referal </Link>
                    </li>
                    <li>
                        <Link><i class="menu-icon fa fa-id-badge"></i>Referal Transaction </Link>
                    </li>
                    <li>
                        <Link><i class="menu-icon fa fa-book"></i>Config </Link>
                    </li>



                    
                    
                </ul>
            </div>
        </nav>
    </aside>
    </div>
  )
}

export default SideNav