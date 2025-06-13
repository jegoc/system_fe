import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from '../components/apiurl_MongoDB';

interface User {
  _id: string;
  name: string;
  email: string;
  cellphone: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get<User[]>(`${apiUrl.url}users`);
      setUsers(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (err) {
      console.error("Failed to fetch users", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add a user
  const addUser = async () => {
    if (!name || !email) return;
    try {
      const res = await axios.post<User>(`${apiUrl.url}users`, { name, email });
      setUsers([...users, res.data]);
      setName("");
      setEmail("");
    } catch (err) {
      console.error("Error adding user", err);
    }
  };

  // Delete a user
  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`${apiUrl.url}users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <br/><br/><br/><br/><br/><br/>
      <h1>👤 User Management</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {loading ? (
        <p>Loading users...</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id} style={{ marginBottom: "8px" }}>
              <strong>{user.name}</strong> — {user.email} - {user.cellphone}
              <button
                onClick={() => deleteUser(user._id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default App;