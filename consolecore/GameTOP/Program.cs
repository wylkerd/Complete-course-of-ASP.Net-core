using System;

namespace GameTOP
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new JogoMANEIRO(
                new Jogador2(),
                new Jogador1()
            );
            
            jogo.IniciarJogo();
        }
    }
}
