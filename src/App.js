import {Link, Outlet} from 'react-router-dom'

// Nested routes
// with routerv6, we have a 'Outlet' component that allows us to nest the UI components for shared layout when the child route matches:

function App() {
  return (
    <div>
      <h1>My React Router APP about BookKeepers!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">
          Invoices || { " "}
        </Link>
        <Link to="/expenses">
          Expenses
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
