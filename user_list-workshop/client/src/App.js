import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import "./App.css";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:3005/api";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/users`)
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
                    <UserList users={users} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
