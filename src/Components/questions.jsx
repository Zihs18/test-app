const Questions = () => {
    const questions = [{"id":1,"Question":"What is deployment?", "Answer":"Deployment is the process of installing, configuring, and enabling a specific application or set of applications, usually through an application manager or software management system, to a specific URL on a server.Once the process of deploying the application(s) has been completed it becomes publicly accessible on the URL."},
                        {"id":2,"Question":"What is the difference between deploy and host?", "Answer":" Hosting means you run a webserver, deployment means you are bringing new code/app/web to your hosting enviroment. So when you deploy a website, you bring it to life for the public."},
                        {"id":3,"Question":"What does react run build do?","Answer":"React uses the build script to ensure that the finished project is bundled and optimized with best practices for deployment. After running the build script, you can find all deployable optimized static resources inside the build directory."},]
    return (  
        <div id="questions">
                    {
                        questions.map(elem=><div className="quest" id={`q`+elem.id}>
                            <h2>{elem.Question}</h2>
                            <p>{elem.Answer}</p>
                        </div>)
                    }
        </div>
    );
}
 
export default Questions;