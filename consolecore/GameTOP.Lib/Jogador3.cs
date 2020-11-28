using GameTOP.Interface;

namespace GameTOP.Lib
{
    public class Jogador3 : iJogador
    {
        public string Chuta()
        {
            return "Teste chuta";
        }

        public string Corre()
        {
            return "Teste corre";
        }

        public string Passe()
        {
            return "Teste Passe";
        }
    }
}