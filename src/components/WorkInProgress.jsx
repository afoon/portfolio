
import construction from "../assets/construction.png"
import '../styles/wip.css'

const WorkInProgress = () => {
    return(
    <div class="wrapper-hero">
        <div class="img-wrapper">
            <img class="image" src={"src/assets/construction.png"} alt="Image by freepik"/>
        </div>
        <div class="text liquid-glass">
            <h2 class="text-h1">
                Work in progress
            </h2>
            <h3 class="subtitle-2">
                I'm hard at work updating the site. New content will be up soon.
            </h3>
        </div>
    </div>
    )
}

export default WorkInProgress
