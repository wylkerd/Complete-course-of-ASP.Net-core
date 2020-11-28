using System;

namespace GameTOP
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new JogoMANEIRO(new Jogador1("Ronaldo"));
            jogo.IniciarJogo();
        }
    }
}
