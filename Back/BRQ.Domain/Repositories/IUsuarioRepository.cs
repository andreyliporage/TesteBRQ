using System.Collections.Generic;
using BRQ.Domain.Entities;

namespace BRQ.Domain.Repositories
{
    public interface IUsuarioRepository
    {
        Usuario Get(int id);
        Usuario Get(string cpf);
        IEnumerable<Usuario> Get();
        int Post(Usuario usuario);
        int Put(Usuario usuario);
        int Delete(int id);
        bool ExisteUsuario(int id);
    }
}