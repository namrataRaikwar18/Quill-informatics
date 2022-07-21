import {
  Alerts,
  Buttons,
  Cards,
  Classes,
  DarkMode,
  Footer,
  Forms,
  Getstarted,
  Grid,
  Icons,
  Installation,
  Sidebar,
  Tables,
  Typography,
} from '../Components'
import { useState } from 'react'

const Landing = () => {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <section className="page page-style-guide bg-dark center dark padding">
        <div className="margin-bottom margin-top max-width-m">
          <h1>Documentation</h1>
          <p className="lead">Get started with your ReactJs template.</p>
        </div>
      </section>
      <div className="padding">
        <div className="row max-width-l">
          <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          <div className="col-four-fifths">
            <Getstarted />
            <Installation />
            <Classes />
            <Grid />
            <Icons />
            <Typography />
            <Buttons />
            <Forms />
            <Alerts />
            <Tables />
            <Cards />
            <DarkMode />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export { Landing }
