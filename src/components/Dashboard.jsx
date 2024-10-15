import NavBar from "./Navbar"
import { AppWrapper, UserDetail, UserTitle } from "../styles/App"
import CardBox from "./CardBox"
import Balance from "./Balance"
import { Typography } from "@mui/material"

function Dashboard() {
  return (
    <AppWrapper>
      <NavBar />
      <UserDetail>
        Hello, <UserTitle>UserName</UserTitle>
      </UserDetail>
      <Balance />
      <CardBox />
    </AppWrapper>
  )
}

export default Dashboard
