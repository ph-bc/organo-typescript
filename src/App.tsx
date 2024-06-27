import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

import { ISubject } from "./interfaces/ISubject";
import { ITeam } from "./interfaces/ITeam";

import subjectsData from "./db.json";

function App() {
  const [teams, setTeams] = useState<ITeam[]>([
    { id: uuidv4(), name: "Programação", color: "#57c278" },
    { id: uuidv4(), name: "Front-End", color: "#82CFFA" },
    { id: uuidv4(), name: "Data Science", color: "#A6D157" },
    { id: uuidv4(), name: "DevOps", color: "#E06869" },
    { id: uuidv4(), name: "UX e Design", color: "#DB6EBF" },
    { id: uuidv4(), name: "Mobile", color: "#FFBA05" },
    { id: uuidv4(), name: "Inovação e Gestão", color: "#FF8A29" },
  ]);

  const [subjects, setSubjects] = useState<ISubject[]>(
    subjectsData.collaborator
  );

  // useEffect(() => {
  //   fetch("http://localhost:8080/collaborator")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSubjects(data);
  //     });
  // }, []);

  const delSubject = (id: string) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  const favoriteSystem = (id: string) => {
    setSubjects(
      subjects.map((subject) => {
        if (subject.id === id) {
          subject.favorite = !subject.favorite;
        }
        return subject;
      })
    );
  };

  const subjectRegister = (newSubject: ISubject) => {
    setSubjects([...subjects, { ...newSubject }]);
  };

  const teamRegister = (newTeam: ITeam) => {
    setTeams([...teams, { ...newTeam }]);
  };

  const changeTeamColor = (color: string, id: string) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }

        return team;
      })
    );
  };

  return (
    <div className="App">
      <Banner imageSrc="/images/banner.png" />

      <Form
        teams={teams.map((team) => team.name)}
        subjectRegister={subjectRegister}
        teamRegister={teamRegister}
      />

      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team) => (
          <Team
            key={team.id}
            team={team}
            changeColor={changeTeamColor}
            subjects={subjects.filter((subject) => subject.team === team.name)} // Cria um novo array com todos os elementos que passam no teste
            onDel={delSubject}
            onFavorite={favoriteSystem}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default App;
