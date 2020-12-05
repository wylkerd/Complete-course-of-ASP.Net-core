using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        // T é um tipo generico
        // GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        // EVENTOS
        Task<Evento[]> GetAllEventoByTema(string tema, bool includePalestrantes);
        Task<Evento[]> GetAllEventoAsync(bool includePalestrantes);
        Task<Evento> GetEventoById(int EventoId, bool includePalestrantes);

        // PALESTRANTE
        Task<Evento[]> GetAllPalestrantesAsyncByName(bool includePalestrantes);
        Task<Evento> GetPalestranteAsync(int PalestranteId, bool includePalestrantes);
    }
}