import { useEffect, useState } from "react";

<<<<<<< HEAD
=======
import * as userServive from "./services/UserService";

import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import "./App.css";

>>>>>>> bf229eb96f652583bd4d0d37693c1004ca3d9072
function App() {
    const [users, setUsers] = useState([]);
    const baseUrl = "http://localhost:3005/api/users";

    useEffect(() => {
<<<<<<< HEAD
        fetch(baseUrl)
            .then((response) => response.json())
            .then((result) => {
                setUsers(result.users);
            });
=======
        userServive.getAll().then((users) => setUsers(users));
>>>>>>> bf229eb96f652583bd4d0d37693c1004ca3d9072
    }, []);

    console.log(users);

    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
