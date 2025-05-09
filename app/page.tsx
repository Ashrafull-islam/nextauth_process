import { getServerSession } from 'next-auth';
import Homes from './Components/Home/Homes';
import './page.css';
import { authOption } from './api/auth/[...nextauth]/route';
import Signout from './Components/Signout';


export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <div>
      {/* <Homes></Homes> */}
      {session ? (
        <div className="user-info">
          <h1>Welcome, {session.user?.name}</h1>
          <p>Email: {session.user?.email}</p>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
