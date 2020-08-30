# Redis Server Docker Image

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
