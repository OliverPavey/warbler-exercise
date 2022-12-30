# Curl Cheatsheet *for Warbler*

## Curl parameter flags used below

- `-i` shows the headers returned.
- `-X` specifies the HTTP method, which otherwise defaults to GET.
- `-H` adds a header to be sent.
- `-d` specifies the message body text.

After the parameters the target URL is given.

## Create a User

```bash
curl -i -X POST -H 'Content-Type: application/json' \
  -d '{"username":"Jimmy", "email":"jimmy@company.com", "password":"password"}' \
  http://localhost:8081/api/auth/signup
```

Example output:

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 236
ETag: W/"ec-DJjWSi5XcwzMgfC4pwB4826zCq0"
Date: Tue, 04 Jan 2022 17:42:41 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":"61d48711b2ddb109b8f2aa10","username":"Jimmy","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDQ4NzExYjJkZGIxMDliOGYyYWExMCIsInVzZXJuYW1lIjoiSmltbXkiLCJpYXQiOjE2NDEzMTgxNjF9.N_3mSH39iD73s7baAZsxVUR6knk5DRpPF_Mw42RqyVs"}
```

## Login

```bash
curl -i -H 'Content-Type: application/json' \
  -d '{"email":"jimmy@company.com","password":"password"}' \
  http://localhost:8081/api/auth/signin
```

Example output:

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 236
ETag: W/"ec-K/g0packP5taY7s/htu7SV7e1kc"
Date: Tue, 04 Jan 2022 17:43:34 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":"61d48711b2ddb109b8f2aa10","username":"Jimmy","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDQ4NzExYjJkZGIxMDliOGYyYWExMCIsInVzZXJuYW1lIjoiSmltbXkiLCJpYXQiOjE2NDEzMTgyMTR9.G46VMZzVSHMHXkShNPmbkHtB1lKqNt9S8ZmVOkCSuIE"}
```

Use copy and paste to put the user id and JWT token in variables.

```bash
USER_ID=61d48711b2ddb109b8f2aa10
JWT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDQ4NzExYjJkZGIxMDliOGYyYWExMCIsInVzZXJuYW1lIjoiSmltbXkiLCJpYXQiOjE2NDEzMTgyMTR9.G46VMZzVSHMHXkShNPmbkHtB1lKqNt9S8ZmVOkCSuIE
```

These can then be used in subsequent commands.

## Create a message

```bash
curl -i -X POST -H 'Content-Type: application/json' \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -d '{"text":"I love to go awandering, along the mountain track."}' \
  "http://localhost:8081/api/users/$USER_ID/messages"
```

Example output:

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 241
ETag: W/"f1-g5w6huIzB3YgasFSENVL8GVI0Ik"
Date: Tue, 04 Jan 2022 20:47:20 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"_id":"61d4b2586cebd047c745f2c3","text":"I love to go awandering, along the mountain track.","user":{"_id":"61d48711b2ddb109b8f2aa10","username":"Jimmy"},"createdAt":"2022-01-04T20:47:20.704Z","updatedAt":"2022-01-04T20:47:20.704Z","__v"
:0}
```

Use copy and paste to put the message id into a variable.

```bash
MESSAGE_ID=61d4b2586cebd047c745f2c3
```

## Get message

```bash
curl -i \
  -H "Authorization: Bearer $JWT_TOKEN" \
  "http://localhost:8081/api/users/$USER_ID/messages/$MESSAGE_ID"
```

Example output:

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 214
ETag: W/"d6-HAjWz9sEy1pNThwsW65eFN5ShKg"
Date: Tue, 04 Jan 2022 20:54:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"_id":"61d4b2586cebd047c745f2c3","text":"I love to go awandering, along the mountain track.","user":"61d48711b2ddb109b8f2aa10","createdAt":"2022-01-04T20:47:20.704Z","updatedAt":"2022-01-04T20:47:20.704Z","__v":0}
```

## List all messages

```bash
curl -i \
  -H "Authorization: Bearer $JWT_TOKEN" \
  "http://localhost:8081/api/messages"
```

Example output:

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 216
ETag: W/"2999-5aeVJalhS4Hex50w5L6TS2hKuBs"
Date: Tue, 04 Jan 2022 20:57:57 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"_id":"61d48aedb2ddb109b8f2aa13","text":"I love to go awandering
, along the mountain track.","user":{"_id":"61d48711b2ddb109b8f2aa10","username":"Jimmy"},"createdAt":"2022-01-04T17:59:09.675Z","updatedAt":"2022-01-04T17:59:09.675Z","__v":0}]
```

## Delete message

```bash
curl -i -X DELETE \
  -H "Authorization: Bearer $JWT_TOKEN" \
  "http://localhost:8081/api/users/$USER_ID/messages/$MESSAGE_ID"
```

Example output:

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 214
ETag: W/"d6-HAjWz9sEy1pNThwsW65eFN5ShKg"
Date: Tue, 04 Jan 2022 21:13:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"_id":"61d4b2586cebd047c745f2c3","text":"I love to go awandering, along the mountain track.","user":"61d48711b2ddb109b8f2aa10","createdAt":"2022-01-04T20:47:20.704Z","updatedAt":"2022-01-04T20:47:20.704Z","__v":0}
```
