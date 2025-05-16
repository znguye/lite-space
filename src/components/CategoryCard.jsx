import workImg from "../assets/work.png";
import learningImg from "../assets/study.png";
import relationshipsImg from "../assets/relationships.png";
import selfImg from "../assets/self.png";

const categoryImages = {
    Work: workImg,
    Learning: learningImg,
    Relationships: relationshipsImg,
    Self: selfImg,
};


export default function CategoryCard({category, tasks}){

    //Defining progress
    const total = tasks.length;
    const completed = tasks.filter(t => t.status?.toLowerCase() ==="done").length;
    const progress = total === 0 ? 0 : Math.round((completed/total)*100);

    //Returning just one card in case we want more categories later, Homepage will do the loop
    return(
        <div className="category-card">
            <img src={categoryImages[category]} alt={category} />
            <div className="progress-bar">
                <div className="progress-fill" style={{width: `${progress}%`}}></div>
            </div>           
            <h4>{category}</h4>
        </div>
    )

}