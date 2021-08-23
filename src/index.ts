import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import { Role } from "./entity/Role";
import {User} from "./entity/User";

createConnection().then(async connection => {
    var users = await getUsersByRoleName(connection,'Root');
    console.log(users);
}).catch(error => console.log(error));

async function getUsersByRoleName(connection: Connection,roleName:string) {
    return connection.createQueryBuilder(User,'user')
    .innerJoin('user.roles', 'role')
    .where('role.name LIKE :roleName', { roleName })
    .getMany();
}

async function loadData(connection: Connection){
    const rootRole = new Role();
    rootRole.name='Root';
    const adminRole = new Role();
    adminRole.name='Admin';
    const superRole = new Role();
    superRole.name='SuperUser';

    const user1 = new User();
    user1.firstName = "Daniel";
    user1.lastName = "Carbajal";
    user1.age = 31;
    user1.roles = [rootRole,adminRole];

    const user2 = new User();
    user2.firstName = "Vicente";
    user2.lastName = "Robles";
    user2.age = 32;
    user2.roles = [adminRole];

    const user3 = new User();
    user3.firstName = "Gonzalo";
    user3.lastName = "Brocq";
    user3.age = 33;
    user3.roles = [superRole];

    console.log("Inserting Data");
    await connection.manager.save(rootRole);
    await connection.manager.save(adminRole);
    await connection.manager.save(superRole);
    await connection.manager.save(user1);
    await connection.manager.save(user2);
    await connection.manager.save(user3);
    console.log("Data insertion finished");

}
