import { FaCircleXmark, FaStar, FaRegStar } from "react-icons/fa6";
import { ISubject } from "../../interfaces/ISubject";

import "./Subject.css";

interface SubjectProps {
  subject: ISubject;
  color: string;
  onDel: (id: string) => void;
  onFavorite: (id: string) => void;
}

const Subject = ({ subject, color, onDel, onFavorite }: SubjectProps) => {
  const idFavorite = () => {
    onFavorite(subject.id);
  };

  const fav = {
    size: 25,
    onClick: idFavorite,
  };

  return (
    <div className="subject">
      <FaCircleXmark
        size={25}
        className="delete"
        onClick={() => onDel(subject.id)}
      />
      <div className="header" style={{ backgroundColor: color }}>
        <img src={subject.image} alt={subject.name} />
      </div>
      <div className="footer">
        <h4 style={{ color: color }}>{subject.name}</h4>
        <h5>{subject.role}</h5>
        <h5>
          Adicionado em: <br /> {new Date(subject.date).toLocaleDateString()}
        </h5>
        <div className="favorite">
          {subject.favorite ? (
            <FaStar {...fav} color="#FFFF00" />
          ) : (
            <FaRegStar {...fav} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Subject;
