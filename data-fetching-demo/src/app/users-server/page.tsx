import { error } from "console";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function UserServer() {
        await new Promise((resolve)=> setTimeout(resolve,3000));
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users: User[] = await response.json();
        
    return (
        <ul className="space-y-4 p-4">
            {
                users.map((user) => (
                    <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-grey-400">
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm">
                            <div>UserName: {user.username}</div>
                            <div>email: {user.email}</div>
                            <div>phone: {user.phone}</div>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}