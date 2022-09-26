# Routes

## Auth
- [x] /auth
  - [x] POST /login
    - login with email and password
  - [x] POST /signup
    - sign up in the system
  - [x] POST /forgot
    - send email to reset password
  - [x] POST /reset
    - send code to reset password

## Users
- [x] /users
  - [x] [GET] /
    - get all users
  - [x] [POST] /
    - create a new user
  - [x] [GET] /:id
    - get a user by id
  - [x] [PUT] /:id
    - update a user by id
  - [x] [DELETE] /:id
    - delete a user by id

## Pets
- [ ] /pets
  - [x] [GET] /
    - get all pets
  - [x] [POST] /
    - create a new pet
  - [x] [GET] /:id
    - get a pet by id
  - [x] [PUT] /:id
    - update a pet by id
  - [x] [DELETE] /:id
    - delete a pet by id
  - [x] [POST] /:id/adopt
    - adopt a pet by id
  - [x] [GET] /:id/activities
    - get all activities for a pet by id
  - [x] [POST] /:id/activities
    - create a new activity for a pet by id

## Addresses
- [x] /addresses
  - [x] [GET] /
    - get all addresses
  - [x] [POST] /
    - create a new address
  - [x] [GET] /:id
    - get an address by id
  - [x] [PUT] /:id
    - update an address by id
  - [x] [DELETE] /:id
    - delete an address by id
