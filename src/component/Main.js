import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"

function Main({onShow}) {
  return (
    <main className="py-4">
      <Container>
        <Outlet context={onShow} />
      </Container>
    </main>
  )
}

export default Main