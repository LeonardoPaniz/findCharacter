import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
  name: string;
  quote: string;
  image: string;
}

function CharacterCard({ name, quote, image }: CharacterCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>"{quote}"</p>
    </div>
  );
}

export default CharacterCard;
