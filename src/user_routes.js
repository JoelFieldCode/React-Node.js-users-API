
// @flow
import { getUsers, addUser } from './users';

const registerRoutes = (app: any) => {
    app.get('/users', async (req, res) => {
        const users = await getUsers();
        res.send(users);
    });

    app.post('/user', async (req, res) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const newUserData = {
            firstName,
            lastName
        };
        try {
            await addUser(newUserData);
            res.send(
                `User ${firstName} ${lastName} added!`
            );
        } catch (err) {
            res.send(JSON.stringify(err), 400);
        }
    });
}

export default registerRoutes;