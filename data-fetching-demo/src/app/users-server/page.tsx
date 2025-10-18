import { error } from "console";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function UserServer() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users: User[] = await response.json();
        console.log(users);
    }
    catch(err){

    }
}