namespace GameTOP
{
    public class Jogador1 
    {
        // property
        public readonly string _Nome;

        // constructor
        public Jogador1(string nome)
        {
            _Nome = nome;
        }

        // Chuta
        public string chuta()
        {
            return $"{_Nome} está chutando";
        }
        // Corre
        public string corre()
        {
            return $"{_Nome} está correndo";
        }
        // Passe
        public string passe()
        {
            return $"{_Nome} está passando";
        }
    }
}