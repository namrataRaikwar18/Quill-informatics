import {RiArrowLeftSLine,RiArrowDownSLine} from 'react-icons/ri';

const Sidebar = ({openSidebar, setOpenSidebar}) => {

    const sidebarOpenHandler = () => {
        setOpenSidebar(!openSidebar)
    }

    return(
        <div className="col-one-fifth">
        <aside className={ openSidebar ? 'sidebarOpen sidebar' : `sidebarClose sidebar`}>
          <h6 className="sidebar-header" onClick={sidebarOpenHandler}>Components <p className='arrowIcon'>{openSidebar ? <RiArrowDownSLine/> : <RiArrowLeftSLine/>}</p> </h6>
          <ul className="blank">
            <li><a href="#getting-started">Getting Started</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#grid">Grid</a></li>
            <li><a href="#icons">Icons</a></li>
            <li><a href="#typography">Typography</a></li>
            <li><a href="#buttons">Buttons</a></li>
            <li><a href="#forms">Forms</a></li>
            <li><a href="#alerts">Alerts</a></li>
            <li><a href="#tables">Tables</a></li>
            <li><a href="#cards">Cards</a></li>
            <li><a href="#dark-mode">Dark Mode</a></li>
          </ul>
        </aside>
      </div> 
    )
}

export {Sidebar}