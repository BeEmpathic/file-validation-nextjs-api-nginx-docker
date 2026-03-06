# Nginx is not for rejecting early too large request body 

I couldn't make the nginx stop quit / kill the connection before it did something called TCP drainage, so I'm qutting this.
I learned that nginx is mostly load balancer and I don't know if it does anything else well. I saw that it might have problem with anything else what you would like from it.
So I learned from this that:
- Nginx is mostly load balancer between servers
- You should use a lib for file validation when using node.js
You can do it by yourself, but why create another shitty javascript library if you can use a existing one.

### Feel free to find the solution and share with my I wouldn't mind to get nginx to just kill the connection early. 

## What you need to run the project

You need this on your machine to run this project:

- npm / node.js
- docker dekstop (with docker compose)

## Then clone all the stuff

then run with terminal inside the project:

```bash
docker compose up --build --watch
```

some stuff should work Good luck
