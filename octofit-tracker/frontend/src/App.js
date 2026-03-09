
import logo from '../public/octofitapp-small.png';

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Octofit Logo" className="octofit-logo" />
            Octofit Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
              <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
              <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
              <Nav.Link as={Link} to="/workouts">Workouts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<Activities />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
