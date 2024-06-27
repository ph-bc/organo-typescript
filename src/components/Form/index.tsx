import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ISubject } from "../../interfaces/ISubject";
import { ITeam } from "../../interfaces/ITeam";

import Button from "../Button";
import DropdownList from "../DropdownList";
import Field from "../Field";

import "./Form.css";

interface FormProps {
  teams: string[];
  subjectRegister: (subject: ISubject) => void;
  teamRegister: (team: ITeam) => void;
}

const Form = ({ teams, subjectRegister, teamRegister }: FormProps) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [team, setTeam] = useState("");

  const [teamName, setTeamName] = useState("");
  const [color, setColor] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0]; // Obtém o primeiro arquivo selecionado pelo usuário
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          setImage(e.target.result); // Define a imagem como base64
        }
      };
      reader.readAsDataURL(file); // Lê o arquivo como URL de dados
    }
  };

  return (
    <section className="form">
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          subjectRegister({
            id: uuidv4(),
            name,
            role,
            image,
            date,
            team,
            favorite: false,
          });
          setName("");
          setRole("");
          setImage("");
          setDate("");
          setTeam("");
        }}
      >
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Field
          required
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <Field
          required
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          onChanged={(value) => setRole(value)}
        />

        <label>Imagem</label>
        <input
          required
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {image && <img src={image} alt="Imagem do colaborador" />}

        <Field
          required
          label="Data de entrada"
          type="date"
          placeholder=""
          value={date}
          onChanged={(value) => setDate(value)}
        />

        <DropdownList
          required
          label="Time"
          items={teams}
          value={team}
          onChanged={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          teamRegister({ id: uuidv4(), name: teamName, color: color });
          setTeamName("");
          setColor("");
        }}
      >
        <h2>Preencha os dados para criar um novo time:</h2>
        <Field
          required
          label="Nome"
          placeholder="Digite o nome do time"
          value={teamName}
          onChanged={(value) => setTeamName(value)}
        />
        <Field
          required
          label="Cor"
          type="color"
          placeholder="Digite a cor do time"
          value={color}
          onChanged={(value) => setColor(value)}
        />
        <Button>Criar time</Button>
      </form>
    </section>
  );
};

export default Form;
