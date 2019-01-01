
// @flow
import fs from 'fs';

import { getUsers, addUser } from './users';

const registerRoutes = (app: any) => {
    app.get('/users', (req, res) => {
        res.send(getUsers());
    });

    app.post('/user', (req, res) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        var newUserData = {
            firstName,
            lastName
        };

        addUser(newUserData, () => {
            res.send(
                `User ${firstName} ${lastName} added!`
            );
        });
    });
}

export default registerRoutes;