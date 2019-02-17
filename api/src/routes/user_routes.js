
// @flow
import { getUsers, addUser, updateUser, deleteUser } from '../repositories/users';

const registerRoutes = (app: any) => {
    app.get('/users', async (req, res) => {
        const users = await getUsers();
        res.json(users);
    });

    app.post('/user', async (req, res) => {
        try {
            const user = await addUser(req.body);
            res.json(user);
        } catch (err) {
            res.json(err, 400);
        }
    });

    app.put('/user/:userId', async (req, res) => {
        try {
            const { userId } = req.params;
            await updateUser(userId, req.body);
            res.json('Success');
        } catch (err) {
            res.json(err, 400);
        }
    });

    app.delete('/user/:userId', async (req, res) => {
        try {
            const { userId } = req.params;
            await deleteUser(userId);
            res.json('Success');
        } catch (err) {
            res.json(err, 400);
        }
    });
}

export default registerRoutes;