using System;
using GameTOP.Lib;

namespace GameTOP
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new JogoMANEIRO(
                new Jogador1(),
                new Jogador3()
            );
            
            jogo.IniciarJogo();
        }
    }
}
