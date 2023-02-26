import { useEffect, useState } from "react";

import * as userServive from "./services/UserService";

import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServive.getAll().then((users) => setUsers(users));
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
