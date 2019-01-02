
// @flow
import { getUsers, addUser, updateUser, deleteUser } from '../repositories/users';

const registerRoutes = (app: any) => {
    app.get('/users', async (req, res) => {
        const users = await getUsers();
        res.send(users);
    });

    app.post('/user', async (req, res) => {
        try {
            const user = await addUser(req.body);
            res.send(JSON.stringify(user));
        } catch (err) {
            res.send(JSON.stringify(err), 400);
        }
    });

    app.put('/user/:userId', async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await updateUser(userId, req.body);
            res.send("Success");
        } catch (err) {
            res.send(JSON.stringify(err), 400);
        }
    });

    app.delete('/user/:userId', async (req, res) => {
        try {
            const { userId } = req.params;
            await deleteUser(userId);
            res.send(`Success`);
        } catch (err) {
            res.send(JSON.stringify(err), 400);
        }
    });
}

export default registerRoutes;