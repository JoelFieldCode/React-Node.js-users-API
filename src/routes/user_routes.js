
// @flow
import { getUsers, addUser, updateUser, deleteUser } from '../repositories/users';

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

    app.put('/user', async (req, res) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const userId = req.body.id;
        const newUserData = {
            firstName,
            lastName
        };
        try {
            await updateUser(userId, newUserData);
            res.send(
                `User ${firstName} ${lastName} updated!`
            );
        } catch (err) {
            res.send(JSON.stringify(err), 400);
        }
    });

    app.delete('/user', async (req, res) => {
        const userId = req.body.id;
        try {
            await deleteUser(userId);
            res.send(`Success`);
        } catch (err) {
            res.send(JSON.stringify(err), 400);
        }
    });
}

export default registerRoutes;