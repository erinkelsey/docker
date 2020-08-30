# Common Docker Commands

### Build Image

    $ docker build .

### Tagging an Image

    $ docker build -t <your_docker_id>/<repo_or_project_name>:<version> .

NOTE: version is usually latest; version is the actual tag, the rest is the project/rep name.

    $ docker build -t erinkelsey/redis:latest .

### Run Built Image

    $ docker run <container_id>


    $ docker run <image_name>
    $ docker run erinkelsey/redis

NOTE: if you don't specify the version, it will run the latest

Override Default Startup Command:

    $ docker run <container_id> <command>

### List All Containers Currently Running on Your Machine

    $ docker ps

### List All Containers Ever Run on Machine

    $ docker ps --all

### Removing Stopped Containers

    $ docker system prune

### Retrieving Logs from Container

    $ docker logs <container_id>

### Creating a Container

    $ docker create <image_name>

NOTE: Outputs the container_id

### Start a Container

Execute startup command (no output):

    $ docker start <container_id>

Execute startup command (with output):

    $ docker start -a <container_id>

### Stopping Container

    $ docker stop <container_id>

NOTE: Gracefully shuts down, by sending SIGTERM. Container can do additional cleanup work. If it takes more than 10s to shutdown, Docker will automatically run kill command

    $ docker kill <container_id>

NOTE: Shut down container immediately, by sending SIGKILL. Container cannot do any cleanup work.

### Executing Commands in Running Containers

    $ docker exec -it <container_id> <command>

-i flag -> attach out terminal STDIN/STDOUT/STDERR to the new running process

-t flag -> make sure that text in and out of process is nicely formatted

### Opening up a Shell in Container

Running Container:

    $ docker exec -it <container_id> sh

On Start:

    $ docker run -it <image_name> sh

NOTE: This approach will start container without running any other process (i.e. the default startup command)

Exit Shell:

    CMD-D
