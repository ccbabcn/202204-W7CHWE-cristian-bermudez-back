# API Users

API para leer, crear y modificar una base de usuarios.

Controllers para interactuar con la base de datos:

- `userLogin`
- `userRegister`
- `relatedUsers`
- `getFriends`
- `getEnemies`
- `addFriend`
- `addEnemy`
- `updateUser`

## Endpoints que llamarán a los métodos anteriores.

- (POST) /user/login
- (POST) /user/register
- (GET) /user/related/:id
- (GET) /user/friends/:id
- (GET) /user/enemies/:id
- (PATCH) /user/addfriend/:id
- (PATCH) /user/addenemy/:id
- (PUT) /user/update/:id
