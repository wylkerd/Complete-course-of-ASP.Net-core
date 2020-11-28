using System;
using GameTOP.Interface;

namespace GameTOP
{
    public class JogoMANEIRO
    {
        // property
        private readonly iJogador _jogadorA;
        private readonly iJogador _jogadorB;

        // constructor
        public JogoMANEIRO(iJogador jogadorA, iJogador jogadorB)
        {
            _jogadorA = jogadorA;
            _jogadorB = jogadorB;
        }
        public void IniciarJogo()
        {
            Console.WriteLine(_jogadorA.Corre());
            Console.WriteLine(_jogadorA.Chuta());
            Console.WriteLine(_jogadorA.Passe());
            //
            System.Console.Write("\n  PRÓXIMO JOGADOR \n");
            //
            Console.WriteLine(_jogadorB.Corre());
            Console.WriteLine(_jogadorB.Chuta());
            Console.WriteLine(_jogadorB.Passe());
        }

        
    }
}