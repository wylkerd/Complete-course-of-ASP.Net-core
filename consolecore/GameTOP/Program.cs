using System;

namespace GameTOP
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new JogoMANEIRO(new Jogador("Ronaldo"));
            jogo.IniciarJogo();
        }
    }

    public class Jogador
    {
        // property
        public readonly string _Nome;

        // constructor
        public Jogador(string nome)
        {
            _Nome = nome;
        }

        // Chuta
        public void chuta()
        {
            Console.WriteLine($"{_Nome} está chutando");
        }
        // Corre
        public void corre()
        {
            Console.WriteLine($"{_Nome} está correndo");
        }
        // Passe
        public void passe()
        {
            Console.WriteLine($"{_Nome} está passando");
        }
    }
}
