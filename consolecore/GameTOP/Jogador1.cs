namespace GameTOP
{
    public class Jogador1 : iJogador
    {
        // property
        public readonly string _Nome;

        // constructor
        public Jogador1(string nome = "Neymar")
        {
            _Nome = nome;
        }

        // Chuta
        public string Chuta()
        {
            return $"{_Nome} está chutando";
        }
        // Corre
        public string Corre()
        {
            return $"{_Nome} está correndo";
        }
        // Passe
        public string Passe()
        {
            return $"{_Nome} está passando";
        }
    }
}