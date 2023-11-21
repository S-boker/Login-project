
# Login Template

This is a login system that one can make accounts to login to a site, but a correct login will just take you to youtube. But feel free to use it use it for quick login system for your up coming project.



## Installation

You can open the code in any IDE you like VScode. The first step would be to get the docker contianer up and running.

```bash
cd Back-End
docker compose up -d
```
The second step is to create the DB

```bash
psql -U SB
Create database login;
```

Then confrim login is there

```bash
\l
```
Lastly exit

```bash
\q
exit
```
Now you can use npm to run the front-end and use your IDE to run the back-end

```bash
cd ../Front-end
npm start run
```
Then run your back-end either using maven or your IDE


    
## Features

- The passwords are encrypted.
- There is a function to send a request to change your password via email, but it currently has no real functionality.
- THis made in React js for the front end and Java Spring Boot for the back-end.


## Contributing

Contributions are always welcome!

I would love to see some one improve on any front end designs, help with the forgot password funcitonaly with emails, or any oher great improvments.




