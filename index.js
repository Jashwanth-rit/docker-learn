const express = require("express")
app = express();
PORT = 6500
app.get("/",(req,res)=>{
    res.json([{
        id:48,
        name:"jk",
        number:7975
    },
    {
        id:28,
        name:"ak",
        number:7975
    },
]
    )

});
app.listen(PORT,()=>{
    console.warn(`running at ${PORT}`)
})

//create local image

//  docker build -t basic-app . - code to run or create local image by using parent image

//create local image with version

//docker build -t basic-app:v1 . 

//here v1 is version name given by us


// basic-app - is name of local image we can set

//by using docker we can use node js file or run node js file

//delete operation on docker image and continer

//docker image rm image_name -  to dlt image if it is not in use 
//docker image rm image_name -f -  to dlt image if it is  in use 


//docker container rm container_name - to dlt if container is not runing 
 //docker container rm container_name -f - to dlt if container is  runing 

 // code to run image

 // docker run --name nameof_container -p portof_docker:protof_node image_name:version_name

 //volume - volume is used because instead of building too many local image 
 // with changes in code data present or if we change code in node js or like that files which used by docker
  
 //that is done by using nodemon


 //code used to run with volume 

 //docker run --name nameof_container -p portof_docker:protof_node --rm -v pathof_nodejsfile:/app(workdir name) image_name:version_name


//  Building an Image:

//  bash
//  Copy code
//  docker build -t jashwanth0/getting-started-todo-app .


//  Running a Container in Detached Mode:
 
//  bash
//  Copy code
//  docker run -d ubuntu


//  Running a Container in Foreground Mode:
 
//  bash
//  Copy code
//  docker run ubuntu


//  Viewing Container Logs:
 
//  bash
//  Copy code
//  docker logs <container_id_or_name>


//  Pruning Stopped Containers:
 
//  bash
//  Copy code
//  docker container prune -f


//  Listing Running Containers:
 
//  bash
//  Copy code
//  docker ps



// Start a Stopped Container:

// bash
// Copy code
// docker start <container_id_or_name>
// Starts a previously stopped container.


// Execute a Command in a Running Container:

// bash
// Copy code
// docker exec -it <container_id_or_name> <command>
// Runs a command in an interactive terminal inside a running container.


// Create a New Image from a Container:

// bash
// Copy code
// docker commit [OPTIONS] <container_id_or_name> <repository>:<tag>
// Saves the current state of a container as a new image.


// Stop a Running Container:

// bash
// Copy code
// docker stop [OPTIONS] <container_id_or_name>


// Stops a running container gracefully.
