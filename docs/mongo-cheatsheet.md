# Mongo Cheat Sheet *for Warbler*

## Control commands

- List databases: `show dbs`
- List collections (in current database): `show collections`
- Use a database: `use <db>` e.g. `use warbler`
- Quit: `quit()`

## Data commands

These examples all refer to the `users` collection, which assumes `use warbler` has been run to select the warbler db.

- Find size of collection: `db.users.count()`
- Retrieve one document: `db.users.findOne()`
- Retrieve all documents: `db.users.find({})`
- Retrieve a document by id: `db.users.find({"_id":ObjectId("61d33430b7190a254aadba69")})`
- Retrieve a document by name: `db.users.find({"username":"Freddie"})`
- Retrieve a document by email: `db.users.find({"email":"freddie@company.com"})`
- Retrieve all emails:  `db.users.find({},{"email":1})`
- Retrieve all emails and names: `db.users.find({},{"_id":0, "email":1, "username":1})`
