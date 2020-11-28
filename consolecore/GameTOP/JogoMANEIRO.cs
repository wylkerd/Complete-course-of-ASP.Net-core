namespace GameTOP
{
    public class JogoMANEIRO
    {
        // property
        private readonly Jogador _jogador;

        // constructor
        public JogoMANEIRO(Jogador jogador)
        {
            _jogador = jogador;
        }
        public void IniciarJogo()
        {
            _jogador.corre();
            _jogador.chuta();
            _jogador.passe();
        }

        
    }
}