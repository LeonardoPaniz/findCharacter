import { useEffect, useState } from "react";
import ListCharacterStyles from "./ListCharacter.module.scss";
import simpsonsFamilyImage from "../../assets/simsponsFamili.svg";
import footer from "../../assets/footer.png"
import { getSimpsonsCharacters } from "../../services/api";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

interface Character {
  character: string;
  quote: string;
  image: string;
}

function ListCharacter() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const currentCharacters = characters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getSimpsonsCharacters();
        setCharacters(response.data);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <body>
      <section className={ListCharacterStyles.home}>
        <nav>
          <h2 className={ListCharacterStyles.title}>
            Find<strong>Character</strong>
          </h2>
        </nav>
        <main className={ListCharacterStyles.aberturaMain}>
          <div className={ListCharacterStyles.textDiv}>
            <h1>A Família Amarela Mais Amada do Mundo</h1>
            <p>
              Bem-vindo ao portal definitivo sobre os Simpsons! Explore frases
              inesquecíveis dos personagens mais queridos de todos os tempos,
              relembre figuras icônicas que fizeram participações especiais e
              redescubra os vilões mais temidos da série.
            </p>
            <a href="">
              <button>Me tornar amarelo</button>
            </a>
          </div>
          <div className={ListCharacterStyles.figureSimpsons}>
            <img src={simpsonsFamilyImage} alt="Família Simpsons" />
          </div>
        </main>
      </section>
      <section className={ListCharacterStyles.charactersListSections}>
        <div className={ListCharacterStyles.lineGreen} />
        <main>
          <h2>Listagem dos personagens</h2>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <div className={ListCharacterStyles.grid}>
              {currentCharacters.map((character, index) => (
                <CharacterCard
                  key={index}
                  name={character.character}
                  quote={character.quote}
                  image={character.image}
                />
              ))}
            </div>
          )}

          <div className={ListCharacterStyles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={
                    currentPage === page
                      ? ListCharacterStyles.activePage
                      : ListCharacterStyles.page
                  }
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </main>
      </section>
      <img className={ListCharacterStyles.footer} src={footer} alt="" />
    </body>
  );
}

export default ListCharacter;
