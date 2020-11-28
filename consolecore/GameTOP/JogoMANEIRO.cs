namespace GameTOP
{
    public class JogoMANEIRO
    {
        // property
        private readonly iJogador _jogador;

        // constructor
        public JogoMANEIRO(iJogador jogador)
        {
            _jogador = jogador;
        }
        public void IniciarJogo()
        {
            _jogador.Corre();
            _jogador.Chuta();
            _jogador.Passe();
        }

        
    }
}