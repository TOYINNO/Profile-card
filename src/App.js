import "./index.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiqqyESSz4Pzw5OimCt8TSKS4NOgWku8LuQ&usqp=CAU" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Ashley Christian</h1>
      <p>
        A front-end developer and Chemical Engineering graduate from FUPRE,
        currently serving as a Research Assistant. Passionate about crafting
        user-friendly interfaces and exploring the convergence of technology and
        science.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" emoji="💪" />
      <Skill name="JavaScript" emoji="💪" />
      <Skill name="Git and Git-Hub" emoji="👍" />
      <Skill name="React" emoji="💪" />
      <Skill name="Web Design" emoji="💪" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
