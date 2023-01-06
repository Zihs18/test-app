const Github = () => {
    return ( 
        <div id="github">
            <h2>Deploying a REACT application using Github</h2>
            <div className="columns">
                <div className="col">
                    <div className="mini">
                        <h4>What is Github?</h4>
                        <p>Github is a website that provides a cloud service for developers to store and manage their code. It also provides monitoring, as well as control of the modifications made to it. Today, it represents one of the most popular ways to host open source projects and share content. Retrieving source code from the website, transferring it to a local machine or even developing your own Android application, there are many projects supported by the site.</p>
                    </div>
                    <div className="mini">
                        <h4>What are the main benefits of using GitHub?</h4>
                        <p>
                            +GitHub Action for your automation, build, test and deployment any platform and any languages <br/>
                            +GitHub help store our artifacts and dependency with in Github using GitHub packages <br/>
                            +You can integrate with the other third party applications like Jira, Azure DevOps etc.. <br/>
                            +GitHub helps to integrate Development IDE like Visual studio, Eclipse, and jet brain ides etc..
                        </p>
                    </div>
                    <div className="mini">
                        <h4>What is the difference between Git and Github?</h4>
                        <p>
                            Git is a version control system that lets you manage and keep track of your source code history. GitHub is a cloud based hosting service that lets you manage Git repositories.And to deploy using GitHub it is necessary to have Git downloaded on your device.
                        </p>
                    </div>
                </div>
                <div className="col code">
                    <ol>
                        <li>Create repository</li>
                        <li>Open your terminal and enter the following : <br/>
                            <ul>
                                <li><strong>git init</strong></li>
                                <li><strong>git add .</strong></li>
                                <li>git commit -m "first commit" <br/>
                                    git branch -M main <br/>
                                    git remote add origin https://github.com/username/repository.git <br/>
                                    git push -u origin main
                                </li>
                            </ul>
                        </li>
                        <li>LogIn to your GitHub account using your browser</li>
                        <li>Open package.json and add :
                            <ul>
                                <li>"homepage":"https://username.github.io/repositoryName"</li>
                            </ul>
                        </li>
                        <li>Run <strong>npm install gh-pages --save-dev</strong> on your terminal</li>
                        <li>Add to scripts :<br/>
                            "predeploy":"npm run build" <br/>
                            "deploy":"gh-pages -d build"
                        </li>
                        <li>Run <strong>npm run deploy</strong> on terminal</li>
                        <li>Open browser and enter "https://username.github.io/repositoryName"</li>
                        <li>After modifiying your files run :"npm run deploy" and click on Commit</li>
                    </ol>
                </div>
            </div>
        </div>
     );
}
 
export default Github;