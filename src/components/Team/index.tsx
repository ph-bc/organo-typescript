import hexToRgba from "hex-to-rgba";

import Subject from "../Subject";
import { ISubject } from "../../interfaces/ISubject";
import { ITeam } from "../../interfaces/ITeam";

import "./Team.css";

interface TeamProps {
  team: ITeam;
  subjects: ISubject[];
  changeColor: (color: string, teamId: string) => void;
  onDel: (subjectId: string) => void;
  onFavorite: (subjectId: string) => void;
}

const Team = ({
  team,
  subjects,
  changeColor,
  onDel,
  onFavorite,
}: TeamProps) => {
  return (
    subjects.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: hexToRgba(team.color, "0.5"),
        }}
      >
        <input
          value={team.color}
          onChange={(event) => changeColor(event.target.value, team.id)}
          type="color"
          className="input-color"
        />
        <h3 style={{ borderColor: team.color }}>{team.name}</h3>
        <div className="subjects">
          {subjects.map((subject) => {
            return (
              <Subject
                key={subject.id}
                subject={subject}
                color={team.color}
                onDel={onDel}
                onFavorite={onFavorite}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
