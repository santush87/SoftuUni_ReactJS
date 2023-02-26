import { useEffect, useState } from "react";

import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import "./App.css";
// import { UserDetails } from "./components/user-list/user-details/UserDetails";

function App() {
    const [users, setUsers] = useState([]);
    const baseUrl = "http://localhost:3005/api/users";

    useEffect(() => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((result) => {
                setUsers(result.users);
            });
    }, []);

    console.log(users);

    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    {/* <UserDetails /> */}

                    <UserList users={users} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
