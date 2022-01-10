# fullstack-interview-test

Interview test for fullstack Software Engineers

## Pre-requisites for linux OS!

You will need to have installed docker-compose in order to run
this project, with docker-compose 3 different containers are created
and maintain communication with each other (API, Front-end and DB).

- Have docker installed, if you does not have docker, install it following [these instructions](https://docs.docker.com/engine/install/)
- Get docker-compose:
  ```bash
  sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  ```
- Allow binary docker-compose to execute:
  ```bash
  sudo chmod +x /usr/local/bin/docker-composedocker-compose
  ```
- Test installation:
  ```bash
  docker-compose --version
  ```
- If you found any problem, you can search for a solutuion in [this link](https://docs.docker.com/compose/install/)

## Running this project!

- In the root of this project (where is docker-compose.yml), run:
  ```bash
  docker-compose up --build
  ```
- After all processes have started, go to [localhost:3000](http://localhost:3000/) to see the web app.
