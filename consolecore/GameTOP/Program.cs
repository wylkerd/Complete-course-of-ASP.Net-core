using System;

namespace GameTOP
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new JogoMANEIRO("Messi");
            jogo.IniciarJogo();
        }
    }

    class JogoMANEIRO
    {
        // property
        private readonly string _NomeJogador;

        // constructor
        public JogoMANEIRO(string nome)
        {
            _NomeJogador = nome;
        }
        public void IniciarJogo()
        {
            Console.Write($" {_NomeJogador} deu um passe");
        }

        
    }

}
